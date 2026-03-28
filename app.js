const state = {
  stack: [0, 0, 0, 0], // X, Y, Z, T
  fin: { n: 0, i: 0, pv: 0, pmt: 0, fv: 0 },
  mem: [0, 0, 0, 0, 0],
  decimals: 2,
  separator: ',',
};

const $ = (id) => document.getElementById(id);

function parseLocaleNumber(value) {
  if (typeof value !== 'string') return Number(value) || 0;
  const cleaned = value.trim().replace(/\s/g, '');
  if (!cleaned) return 0;

  // aceita ponto e vírgula na entrada
  const normalized = cleaned.includes(',') && cleaned.includes('.')
    ? cleaned.replace(/\./g, '').replace(',', '.')
    : cleaned.replace(',', '.');

  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}

function formatNumber(value) {
  const fixed = Number(value || 0).toFixed(state.decimals);
  return state.separator === ',' ? fixed.replace('.', ',') : fixed;
}

function refresh() {
  $('display').textContent = formatNumber(state.stack[0]);
  $('stack').textContent = `Y: ${formatNumber(state.stack[1])} | Z: ${formatNumber(state.stack[2])} | T: ${formatNumber(state.stack[3])}`;
  $('finValues').textContent = `n=${formatNumber(state.fin.n)} | i=${formatNumber(state.fin.i)} | PV=${formatNumber(state.fin.pv)} | PMT=${formatNumber(state.fin.pmt)} | FV=${formatNumber(state.fin.fv)}`;
  $('memoryState').textContent = state.mem.map((v, i) => `M${i}=${formatNumber(v)}`).join(' | ');
}

function push(x) {
  state.stack = [x, state.stack[0], state.stack[1], state.stack[2]];
}

function setX(x) {
  state.stack[0] = x;
}

function applyBinary(op) {
  const [x, y, z, t] = state.stack;
  let result = 0;
  switch (op) {
    case '+': result = y + x; break;
    case '-': result = y - x; break;
    case '*': result = y * x; break;
    case '/': result = x === 0 ? 0 : y / x; break;
    default: return;
  }
  state.stack = [result, z, t, t];
  refresh();
}

function calcFV() {
  const i = state.fin.i / 100;
  const n = state.fin.n;
  const pv = state.fin.pv;
  const pmt = state.fin.pmt;
  const fv = -(pv * (1 + i) ** n + (i === 0 ? pmt * n : pmt * (((1 + i) ** n - 1) / i)));
  state.fin.fv = fv;
  setX(fv);
  refresh();
}

function calcPMT() {
  const i = state.fin.i / 100;
  const n = state.fin.n;
  const pv = state.fin.pv;
  const fv = state.fin.fv;
  if (n <= 0) return;

  let pmt;
  if (i === 0) {
    pmt = -(pv + fv) / n;
  } else {
    const factor = ((1 + i) ** n - 1) / i;
    pmt = -(fv + pv * (1 + i) ** n) / factor;
  }

  state.fin.pmt = pmt;
  setX(pmt);
  refresh();
}

$('enterBtn').addEventListener('click', () => {
  const value = parseLocaleNumber($('numberInput').value);
  push(value);
  $('numberInput').value = '';
  refresh();
});

document.querySelectorAll('[data-op]').forEach((btn) => {
  btn.addEventListener('click', () => applyBinary(btn.dataset.op));
});

$('chsBtn').addEventListener('click', () => {
  setX(-state.stack[0]);
  refresh();
});

$('percentBtn').addEventListener('click', () => {
  const [x, y] = state.stack;
  setX((y * x) / 100);
  refresh();
});

$('swapBtn').addEventListener('click', () => {
  const [x, y, z, t] = state.stack;
  state.stack = [y, x, z, t];
  refresh();
});

$('clearBtn').addEventListener('click', () => {
  setX(0);
  refresh();
});

$('saveN').addEventListener('click', () => { state.fin.n = state.stack[0]; refresh(); });
$('saveI').addEventListener('click', () => { state.fin.i = state.stack[0]; refresh(); });
$('savePV').addEventListener('click', () => { state.fin.pv = state.stack[0]; refresh(); });
$('savePMT').addEventListener('click', () => { state.fin.pmt = state.stack[0]; refresh(); });
$('saveFV').addEventListener('click', () => { state.fin.fv = state.stack[0]; refresh(); });
$('calcFV').addEventListener('click', calcFV);
$('calcPMT').addEventListener('click', calcPMT);

$('stoBtn').addEventListener('click', () => {
  const slot = Number($('memSlot').value);
  state.mem[slot] = state.stack[0];
  refresh();
});

$('rclBtn').addEventListener('click', () => {
  const slot = Number($('memSlot').value);
  push(state.mem[slot]);
  refresh();
});

$('decimals').addEventListener('change', () => {
  const v = Number($('decimals').value);
  state.decimals = Number.isFinite(v) ? Math.min(10, Math.max(0, v)) : 2;
  refresh();
});

$('separator').addEventListener('change', () => {
  state.separator = $('separator').value;
  refresh();
});

refresh();
