/* Exxat Form Configuration Guide
 * Routing by URL hash, topic navigation, lightbox, code panels, the
 * Feature ID checker and the intro splash. The page works without this
 * file (see the :target rules in css/styles.css); it only adds polish.
 */
(function () {
  'use strict';

  var SITE_TITLE = 'Exxat Form Configuration Guide';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var home = $('#home');
  var view = $('#view');
  var topics = $$('.topic');

  /* ---------- Routing: #topic or #part-inside-a-topic ---------- */
  var homeScrollY = 0;
  var onHome = true;

  function showTopic(section, target) {
    if (onHome) homeScrollY = window.scrollY;
    topics.forEach(function (s) { s.hidden = s !== section; });

    var k = topics.indexOf(section);
    setStep($('#prev'), $('#prevT'), topics[k - 1]);
    setStep($('#next'), $('#nextT'), topics[k + 1]);

    home.hidden = true;
    view.hidden = false;
    onHome = false;

    if (target === section) window.scrollTo(0, 0);
    else target.scrollIntoView();
    setTimeout(updateProgress, 0);

    var colour = getComputedStyle(section).getPropertyValue('--tc');
    var deco = $('.deco');
    if (colour && deco) deco.style.setProperty('--deco-c', colour.trim());
    document.title = section.dataset.title + ' · ' + SITE_TITLE;
  }

  function setStep(link, label, section) {
    if (!link) return;
    link.hidden = !section;
    if (section) {
      link.href = '#' + section.id;
      label.textContent = section.dataset.title;
    }
  }

  function showHome() {
    view.hidden = true;
    home.hidden = false;
    if (!onHome) window.scrollTo(0, homeScrollY);
    onHome = true;
    document.title = SITE_TITLE;
  }

  function route() {
    var id = location.hash.slice(1);
    var target = id && document.getElementById(id);
    var section = target && target.closest('.topic');
    if (section) showTopic(section, target);
    else showHome();
  }

  window.addEventListener('hashchange', route);

  /* ---------- Back-to-top button and reading progress ---------- */
  var topButtons = $$('.totop');
  function toggleTopButtons() {
    var away = window.scrollY < 120;
    topButtons.forEach(function (b) { b.classList.toggle('away', away); });
  }
  topButtons.forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var href = b.getAttribute('href');
      if (location.hash !== href) history.pushState(null, '', href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  var progressBar = $('#rp');
  function updateProgress() {
    if (view.hidden || !progressBar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
  }

  window.addEventListener('scroll', function () { toggleTopButtons(); updateProgress(); }, { passive: true });
  toggleTopButtons();

  /* ---------- Lightbox for screenshots ---------- */
  var lightbox = $('#lb');
  if (lightbox) {
    var lbImage = $('img', lightbox);
    var lbCaption = $('.lbcap', lightbox);
    var lbClose = $('.lbc', lightbox);

    function openLightbox(img) {
      lbImage.src = img.src;
      lbImage.alt = img.alt;
      var caption = img.closest('figure').querySelector('figcaption');
      lbCaption.textContent = caption ? caption.textContent : '';
      lightbox.classList.add('on');
      lbClose.focus();
    }
    function closeLightbox() {
      lightbox.classList.remove('on');
      lbImage.removeAttribute('src');
    }

    document.addEventListener('click', function (e) {
      var img = e.target.closest('.tbody figure img');
      if (img) openLightbox(img);
    });
    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('on')) closeLightbox();
    });
  }

  /* ---------- Code panels: expand and copy ---------- */
  document.addEventListener('click', function (e) {
    var expand = e.target.closest('[data-expand]');
    if (expand) {
      document.getElementById(expand.dataset.expand).classList.add('open');
      return;
    }
    var copy = e.target.closest('[data-copy]');
    if (!copy) return;

    var pre = document.getElementById(copy.dataset.copy);
    var text = pre.innerText.replace(/\n$/, '');
    var label = $('span', copy);

    function done() {
      copy.classList.add('done');
      label.textContent = 'Copied';
      setTimeout(function () {
        copy.classList.remove('done');
        label.textContent = 'Copy code';
      }, 1800);
    }
    function selectInstead() {
      var range = document.createRange();
      range.selectNodeContents(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      label.textContent = 'Press Ctrl+C to copy';
    }
    try {
      navigator.clipboard.writeText(text).then(done, selectInstead);
    } catch (err) {
      selectInstead();
    }
  });

  /* ---------- Downloads inside the Claude artifact runtime ----------
   * In a normal browser the download attribute does the job. Inside an
   * artifact the page is sandboxed, so hand the file to the host instead. */
  var downloads = null;
  if (window.claude && window.claude.use) {
    window.claude.use('downloads').then(function (d) { downloads = d; }).catch(function () {});
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-dl]');
    if (!link || !downloads) return;
    e.preventDefault();
    fetch(link.getAttribute('href'))
      .then(function (r) { if (!r.ok) throw new Error(r.statusText); return r.blob(); })
      .then(function (blob) { return downloads.save({ filename: link.getAttribute('download'), data: blob }); })
      .then(function () { link.classList.add('ok'); })
      .catch(function (err) {
        if (!err || err.code !== 'declined') link.title = 'This download is not available here.';
      });
  });

  /* ---------- Feature ID checker ---------- */
  var idInput = $('#abbrIn');
  var idMessage = $('#abbrMsg');
  if (idInput && idMessage) {
    idInput.addEventListener('input', function () {
      var value = idInput.value;
      idMessage.className = 'msg';
      idInput.classList.remove('err');
      if (!value) { idMessage.textContent = ''; return; }

      var bad = value.match(/[^A-Za-z0-9_]/g);
      if (bad) {
        var unique = Array.from(new Set(bad)).map(function (c) { return c === ' ' ? '(space)' : c; }).join('  ');
        idInput.classList.add('err');
        idMessage.className = 'msg no';
        idMessage.textContent =
          (value.indexOf(' ') !== -1 ? 'Spaces are not permitted. Use an underscore instead. ' : '') +
          'Characters not permitted: ' + unique + '. Use only letters, numbers and underscores.';
      } else {
        idMessage.className = 'msg ok';
        idMessage.textContent = 'All characters are permitted. Confirm that no other form uses this Feature ID.';
      }
    });
  }

  /* ---------- Light and dark mode ----------
   * data-theme on <html> overrides the system setting (the head script sets
   * it early from localStorage). html.dark mirrors the effective theme so the
   * toggle can show the right icon. */
  var root = document.documentElement;
  var systemDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var themeButtons = $$('.theme');

  function currentTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return systemDark && systemDark.matches ? 'dark' : 'light';
  }
  function reflectTheme() {
    var dark = currentTheme() === 'dark';
    root.classList.toggle('dark', dark);
    themeButtons.forEach(function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (err) {}
    reflectTheme();
  }
  themeButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });
  if (systemDark && systemDark.addEventListener) systemDark.addEventListener('change', reflectTheme);
  reflectTheme();

  /* ---------- First paint ---------- */
  $$('.card').forEach(function (card, i) { card.style.setProperty('--d', i); });
  route();

  /* ---------- Intro splash, only on the home page and only with motion allowed ---------- */
  var intro = $('#intro');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (intro && onHome && !reduceMotion) {
    intro.hidden = false;
    var finished = false;
    var finish = function () {
      if (finished) return;
      finished = true;
      intro.classList.add('out');
      document.body.classList.add('play');
      setTimeout(function () { intro.hidden = true; }, 750);
      setTimeout(function () { document.body.classList.remove('play'); }, 2000);
    };
    setTimeout(finish, 2600);
    intro.addEventListener('click', finish);
    document.addEventListener('keydown', finish, { once: true });
  }
})();
