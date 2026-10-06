/* Tutor Flow site: cookie consent + Google Analytics (GA4).
   Analytics is not loaded, and no analytics cookies are set, until the visitor accepts. */
(function () {
  var GA_ID = 'G-9WFYY8WG5M';
  var KEY = 'tf_analytics_consent';
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function clearAnalyticsCookies() {
    var host = location.hostname.split('.');
    var domains = [location.hostname];
    for (var i = 1; i < host.length - 1; i++) domains.push('.' + host.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid') {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
        });
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }

  function hideBanner() {
    var b = document.getElementById('tf-consent');
    if (b) b.parentNode.removeChild(b);
  }

  function choose(v) {
    write(v);
    hideBanner();
    if (v === 'granted') {
      loadAnalytics();
    } else {
      window['ga-disable-' + GA_ID] = true;
      gtag('consent', 'update', { analytics_storage: 'denied' });
      clearAnalyticsCookies();
    }
  }

  function showBanner() {
    if (document.getElementById('tf-consent')) return;
    var css = document.createElement('style');
    css.textContent =
      '#tf-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;' +
      'background:#fff;color:#1A1A1A;border:1px solid #D9D2C5;border-radius:16px;padding:20px;' +
      'box-shadow:0 12px 40px rgba(16,89,91,.22);font:14px/1.55 "Noto Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}' +
      '#tf-consent p{margin:0 0 14px;color:#3A342C}#tf-consent a{color:#10595B;text-decoration:underline}' +
      '#tf-consent .tf-row{display:flex;gap:10px;flex-wrap:wrap}' +
      '#tf-consent button{font:inherit;font-weight:600;border-radius:10px;padding:10px 18px;cursor:pointer;border:1px solid #10595B}' +
      '#tf-consent .tf-yes{background:#10595B;color:#fff}#tf-consent .tf-no{background:#fff;color:#10595B}' +
      '#tf-consent button:focus-visible{outline:3px solid #E6C98A;outline-offset:2px}';
    document.head.appendChild(css);
    var b = document.createElement('div');
    b.id = 'tf-consent';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie preferences');
    b.innerHTML =
      '<p>We’d like to use Google Analytics cookies to see which pages of this site are useful. ' +
      'It’s optional and off unless you accept. The Tutor Flow extension itself isn’t affected. ' +
      '<a href="/tutor-flow/privacy-policy.html#website">Details</a></p>' +
      '<div class="tf-row"><button type="button" class="tf-yes">Accept analytics</button>' +
      '<button type="button" class="tf-no">Decline</button></div>';
    b.querySelector('.tf-yes').onclick = function () { choose('granted'); };
    b.querySelector('.tf-no').onclick = function () { choose('denied'); };
    document.body.appendChild(b);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (t) { e.preventDefault(); showBanner(); }
  });

  function init() {
    var v = read();
    if (v === 'granted') loadAnalytics();
    else if (v === 'denied') window['ga-disable-' + GA_ID] = true;
    else showBanner();
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
