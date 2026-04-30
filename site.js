// Shared header + footer markup, injected into every page

const headerHTML = (active) => `
<div class="top-strip">
  <div class="top-strip-inner">
    <div class="ticker">
      <span><span class="dot"></span>LIVE — Matchday 12 fixtures</span>
      <span>Premier League · La Liga · Serie A · Bundesliga · Ligue 1</span>
    </div>
    <div class="meta" id="todayDate"></div>
  </div>
</div>
<header class="masthead">
  <div class="masthead-inner">
    <button class="menu-toggle" aria-label="Open menu" onclick="document.getElementById('mobileMenu').classList.add('open')">
      <span></span><span></span><span></span>
    </button>
    <nav class="primary">
      <a href="index.html" class="${active==='home'?'active':''}">Home</a>
      <a href="reports.html" class="${active==='reports'?'active':''}">Reports</a>
      <a href="features.html" class="${active==='features'?'active':''}">Features</a>
      <a href="comment.html" class="${active==='comment'?'active':''}">Comment</a>
      <a href="about.html" class="${active==='about'?'active':''}">About</a>
    </nav>
    <a href="index.html" class="brand">
      <span class="brand-mark"></span>
      <span class="brand-name">
        <span class="the">The</span>
        Half Space
      </span>
    </a>
    <div class="utility">
      <button class="search-btn" onclick="document.getElementById('searchOverlay').classList.add('open')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <span>Search</span>
      </button>
      <a href="subscribe.html" class="subscribe-btn">Subscribe</a>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <button class="close" onclick="document.getElementById('mobileMenu').classList.remove('open')" aria-label="Close menu">×</button>
  <nav>
    <a href="index.html">Home</a>
    <a href="reports.html">Reports</a>
    <a href="features.html">Features</a>
    <a href="comment.html">Comment</a>
    <a href="about.html">About</a>
    <a href="subscribe.html">Subscribe</a>
  </nav>
</div>
<div class="search-overlay" id="searchOverlay">
  <button class="close" onclick="document.getElementById('searchOverlay').classList.remove('open')" aria-label="Close search">×</button>
  <div class="search-inner">
    <label class="search-eyebrow">Search The Half Space</label>
    <input type="search" placeholder="Type a player, club, match, writer…" autofocus />
    <div class="search-suggest">
      <span>Try:</span>
      <a href="#">match reports</a>
      <a href="#">long reads</a>
      <a href="#">a midweek night</a>
      <a href="#">essays</a>
    </div>
  </div>
</div>
`;

const footerHTML = `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="brand">
        <span class="brand-mark"></span>
        <span class="brand-name">
          <span class="the">The</span>
          Half Space
        </span>
      </a>
      <p>A football paper. Match reports, comment, and the long view from the corridors between the lines.</p>
    </div>
    <div class="footer-col">
      <h4>Sections</h4>
      <ul>
        <li><a href="reports.html">Reports</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="comment.html">Comment</a></li>
        <li><a href="article.html">Long reads</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>The Paper</h4>
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="about.html#writers">Writers</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="subscribe.html">Subscribe</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Follow</h4>
      <ul>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">RSS</a></li>
        <li><a href="#">X / Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} The Half Space</span>
    <span>Est. 2026 · London</span>
  </div>
</footer>
`;

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  const active = document.body.dataset.page || '';
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHTML(active);
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Today's date in masthead
  const today = new Date();
  const opts = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateEl = document.getElementById('todayDate');
  if (dateEl) dateEl.textContent = today.toLocaleDateString('en-GB', opts);

  // Close overlays on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('mobileMenu')?.classList.remove('open');
      document.getElementById('searchOverlay')?.classList.remove('open');
    }
  });
});
