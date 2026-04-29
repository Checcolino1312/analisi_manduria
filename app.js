/* ============================================================
   APP — Elezioni Comunali Manduria
   ============================================================ */

// ── CHIPS ─────────────────────────────────────────────────────
function renderChips(year) {
  document.getElementById('chips-container').innerHTML = CHIPS[year].map(c =>
    `<div class="chip"><span class="muted">${c.label}:</span> <strong>${c.val}</strong></div>`
  ).join('');
}

// ── BARRE SINDACO 2020 ─────────────────────────────────────────
function renderSindacoBars() {
  const maxVoti = Math.max(...CANDIDATI_2020.map(c => c.voti));
  const colors = {
    Pecoraro: '#2D6A4F', Sammarco: '#1B4F82', Bullo: '#8B1A1A',
    Breccia: '#8B4513', Duggento: '#556B2F', Moccia: '#9370DB',
  };
  document.getElementById('sindaco-bars-2020').innerHTML = CANDIDATI_2020.map(c => `
    <div class="bar-wrap" style="margin-bottom:10px;">
      <div style="width:170px;font-size:13px;font-weight:500;flex-shrink:0;">${c.name}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(c.voti / maxVoti * 100).toFixed(1)}%;background:${colors[c.coal] || '#888'};"></div>
      </div>
      <div class="bar-num" style="width:110px;text-align:right;">${c.voti.toLocaleString('it-IT')} · ${c.pct}%</div>
    </div>
  `).join('');
}

// ── LISTE 2020 ─────────────────────────────────────────────────
function renderListe2020() {
  const coalBadge = { Pecoraro: 'b-csx', Sammarco: 'b-csx', Bullo: 'b-cdx', Breccia: 'b-ind', Duggento: 'b-ind', Moccia: 'b-ind' };
  const maxVoti   = Math.max(...LISTE_2020.flatMap(c => c.lists.map(l => l.voti)));

  document.getElementById('liste-2020-content').innerHTML = LISTE_2020.map(coal => `
    <div class="section-label">
      Coalizione ${coal.coal}
      <span class="badge ${coalBadge[coal.coal] || 'b-ind'}">
        ${coal.totalVoti.toLocaleString('it-IT')} voti${coal.totalPct ? ' · ' + coal.totalPct + '%' : ''}
      </span>
    </div>
    <div class="card">
      <table>
        <thead><tr><th>Lista</th><th></th><th class="num">Voti</th><th class="num">%</th></tr></thead>
        <tbody>
          ${coal.lists.map(l => `
            <tr>
              <td>
                <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${l.color};margin-right:6px;vertical-align:middle;"></span>
                ${l.name}
              </td>
              <td class="bar-cell">
                <div class="bar-wrap">
                  <div class="bar-track"><div class="bar-fill" style="width:${(l.voti / maxVoti * 100).toFixed(1)}%;background:${l.color};"></div></div>
                </div>
              </td>
              <td class="num">${l.voti.toLocaleString('it-IT')}</td>
              <td class="num">${l.pct}%</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

// ── CONSIGLIERI 2020 ───────────────────────────────────────────
function renderConsiglieri(data, containerId) {
  const allPrefs = data.flatMap(l => l.members.map(m => m.pref)).filter(p => p != null);
  const maxPref  = allPrefs.length ? Math.max(...allPrefs) : 1;
  document.getElementById(containerId).innerHTML = data.map(lista => `
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header">
        <span class="dot" style="background:${lista.color};"></span>
        ${lista.listName}
        ${lista.members.length === 0 ? '<span class="badge b-abs" style="margin-left:auto;">Dati non disponibili</span>' : ''}
      </div>
      ${lista.note ? `<div style="padding:10px 16px;font-size:12px;color:var(--muted);border-bottom:1px solid var(--border);background:var(--surface2);">${lista.note}</div>` : ''}
      ${lista.members.length > 0 ? `
        <table>
          <thead><tr><th>#</th><th>Nome</th><th></th><th class="num">Pref.</th></tr></thead>
          <tbody>
            ${lista.members.map((m, i) => `
              <tr>
                <td class="muted" style="font-size:11px;">${i + 1}</td>
                <td class="fw5">${m.name}${m.note ? ` <span class="badge b-new" style="margin-left:6px;">${m.note}</span>` : ''}</td>
                <td class="bar-cell" style="min-width:80px;">
                  ${m.pref != null ? `<div class="bar-track"><div class="bar-fill" style="width:${(m.pref / maxPref * 100).toFixed(1)}%;background:${lista.color};"></div></div>` : ''}
                </td>
                <td class="num">${m.pref != null ? m.pref : '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : ''}
    </div>
  `).join('');
}

// ── LISTE 2026 (griglia nomi) ──────────────────────────────────
function renderListe2026() {
  document.getElementById('liste-2026-content').innerHTML = LISTE_2026.map(coal => `
    <div class="section-label">
      Coalizione ${coal.coal}
      <span class="badge ${coal.coalBadge}">${coal.coalLabel}</span>
    </div>
    <div class="card" style="margin-bottom:16px;">
      ${coal.lists.map(lista => `
        <div class="list-group">
          <button class="list-toggle" onclick="toggleList(this)">
            <span>
              ${lista.name}
              <span class="muted" style="font-weight:300;font-size:12px;">(${lista.members.length} candidati)</span>
            </span>
            <span class="chevron">▼</span>
          </button>
          <div class="list-body">
            <div class="candidates-grid">
              ${lista.members.map((name, i) => `
                <div class="candidate-item">
                  <span class="candidate-num">${i + 1}.</span>
                  <span>${name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function toggleList(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

// ── TRACKING ──────────────────────────────────────────────────
function renderTracking() {
  const statusConfig = {
    'Stessa area':       { badge: 'b-ret',  label: 'Stessa area' },
    'Stesso candidato':  { badge: 'b-ret',  label: 'Stesso candidato' },
    'Candidato sindaco': { badge: 'b-cand', label: 'Candidato sindaco' },
    'Candidata sindaca': { badge: 'b-cand', label: 'Candidata sindaca' },
    'Cambia candidato':  { badge: 'b-sw',   label: 'Cambia candidato' },
    'Cambia coalizione': { badge: 'b-sw',   label: 'Cambia coalizione' },
  };
  const badge = s => statusConfig[s]
    ? `<span class="badge ${statusConfig[s].badge}">${statusConfig[s].label}</span>`
    : `<span class="badge b-abs">${s}</span>`;

  document.getElementById('tracking-tbody').innerHTML = TRACKING.map(t => `
    <tr>
      <td class="fw5">${t.name}</td>
      <td class="muted" style="font-size:12px;">${t.list20}</td>
      <td class="num">${t.pref != null ? t.pref : '—'}</td>
      <td>${badge(t.status)}</td>
      <td style="font-size:12px;color:var(--muted);">${t.pos26}</td>
    </tr>
  `).join('');
}

// ── CHART (lazy) ───────────────────────────────────────────────
let chartInitialized = false;
function initChart() {
  if (chartInitialized) return;
  chartInitialized = true;
  new Chart(document.getElementById('proiezione-chart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: PROIEZIONE.map(p => p.name.split(' ').slice(-1)[0]),
      datasets: [
        {
          label: 'Stima',
          data: PROIEZIONE.map(p => p.stima),
          backgroundColor: PROIEZIONE.map(p => p.color + 'CC'),
          borderColor:     PROIEZIONE.map(p => p.color),
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Min',
          data: PROIEZIONE.map(p => p.min),
          backgroundColor: 'transparent',
          borderColor:     PROIEZIONE.map(p => p.color + '88'),
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              if (ctx.datasetIndex !== 0) return null;
              const d = PROIEZIONE[ctx.dataIndex];
              return `Stima: ${d.stima.toLocaleString('it-IT')} voti (range: ${d.min.toLocaleString('it-IT')}–${d.max.toLocaleString('it-IT')})`;
            },
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 } } },
        y: { grid: { color: 'rgba(0,0,0,.06)' }, ticks: { font: { family: 'DM Sans', size: 11 } } },
      },
    },
  });
}

// ── TABS ───────────────────────────────────────────────────────
function initTabs(tabsId) {
  document.getElementById(tabsId).querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(tabsId).querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(btn.dataset.tab);
      if (panel) panel.classList.add('active');
      if (btn.dataset.tab === 's2026-proiezione') initChart();
    });
  });
}

// ── YEAR TOGGLE ────────────────────────────────────────────────
document.querySelectorAll('.year-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const year = parseInt(btn.dataset.year);
    document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.year-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + year).classList.add('active');
    renderChips(year);
  });
});

// ── SEARCH ─────────────────────────────────────────────────────
function buildSearchIndex() {
  const idx = [];
  CANDIDATI_2020.forEach(c => {
    idx.push({ name: c.name, meta: `Candidato sindaco · Coal. ${c.coal}`, votes: c.voti + ' voti', role: 'Candidato sindaco', year: 2020 });
  });
  [...CONSIGLIERI_PECORARO, ...CONSIGLIERI_SAMMARCO, ...CONSIGLIERI_BULLO, ...CONSIGLIERI_DUGGENTO, ...CONSIGLIERI_BRECCIA].forEach(lista => {
    lista.members.forEach(m => {
      if (m.name) idx.push({ name: m.name, meta: lista.listName, votes: m.pref != null ? m.pref + ' pref.' : '—', role: 'Consigliere 2020', year: 2020 });
    });
  });
  [
    { name: 'Domenico Sammarco',   area: 'Centrodestra' },
    { name: 'Vito Andrea Mariggiò', area: 'CSX civico' },
    { name: 'Fabiana Rossetti',    area: 'M5S' },
    { name: 'Stefania Ruggieri',   area: 'Sinistra/PD' },
    { name: 'Cosimo Lariccia',     area: 'Civico Noscia' },
    { name: 'Ferdinando Arnò',     area: 'Civico' },
  ].forEach(c => {
    idx.push({ name: c.name, meta: `Candidato sindaco · ${c.area}`, votes: '—', role: 'Candidato sindaco', year: 2026 });
  });
  LISTE_2026.forEach(coal => {
    coal.lists.forEach(lista => {
      lista.members.forEach(name => {
        if (name) idx.push({ name, meta: `${lista.name} · coal. ${coal.coal}`, votes: '—', role: 'Candidato 2026', year: 2026 });
      });
    });
  });
  return idx;
}

const searchIndex = buildSearchIndex();

function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
}

const searchInput   = document.getElementById('search-input');
const searchClear   = document.getElementById('search-clear');
const searchResults = document.getElementById('search-results');

function showYearPanel() {
  document.querySelectorAll('.year-panel').forEach(p => { p.style.display = ''; });
  const activeYear = document.querySelector('.year-btn.active').dataset.year;
  document.querySelectorAll('.year-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + activeYear).classList.add('active');
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  searchClear.style.display = q ? 'block' : 'none';
  if (q.length < 2) {
    searchResults.style.display = 'none';
    showYearPanel();
    return;
  }
  document.querySelectorAll('.year-panel').forEach(p => p.style.display = 'none');
  const ql      = q.toLowerCase();
  const matches = searchIndex.filter(item =>
    item.name.toLowerCase().includes(ql) ||
    item.meta.toLowerCase().includes(ql) ||
    item.role.toLowerCase().includes(ql)
  ).slice(0, 50);

  searchResults.innerHTML = matches.length === 0
    ? `<div class="no-results">Nessun risultato per "<strong>${q}</strong>"</div>`
    : `<div class="search-header">${matches.length} risultat${matches.length === 1 ? 'o' : 'i'} per "<strong>${q}</strong>"</div>`
      + matches.map(m => `
          <div class="search-item">
            <div>
              <div class="search-item-name">${highlight(m.name, q)}</div>
              <div class="search-item-meta">${highlight(m.meta, q)} · <em>${m.role}</em></div>
            </div>
            <div class="search-item-right">
              <div class="search-item-votes">${m.votes}</div>
              <span class="search-item-year">${m.year}</span>
            </div>
          </div>
        `).join('');
  searchResults.style.display = 'block';
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.style.display = 'none';
  searchResults.style.display = 'none';
  showYearPanel();
});

// ── INIT ───────────────────────────────────────────────────────
renderChips(2020);
renderSindacoBars();
renderListe2020();
renderConsiglieri(CONSIGLIERI_PECORARO, 'consiglieri-pecoraro-content');
renderConsiglieri(CONSIGLIERI_SAMMARCO, 'consiglieri-sammarco-content');
renderConsiglieri(CONSIGLIERI_BULLO,    'consiglieri-bullo-content');
renderConsiglieri(CONSIGLIERI_BRECCIA,  'consiglieri-breccia-content');
renderConsiglieri(CONSIGLIERI_DUGGENTO, 'consiglieri-duggento-content');
renderListe2026();
renderTracking();
initTabs('tabs-2020');
initTabs('tabs-2026');
