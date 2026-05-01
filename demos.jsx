/* global React */
const { useEffect, useRef, useState } = React;

/* ---------- Sparkline (removed) ---------- */
function Sparkline() {
  // Charts removed per request — render nothing so layout stays intact.
  return null;
}

/* ---------- KPI block ---------- */
function KpiBlock() {
  const [revenue, setRevenue] = useState(842.5);
  const [orders, setOrders] = useState(1248);
  const [cycle, setCycle] = useState(4.2);
  const [series, setSeries] = useState([42, 58, 51, 68, 74, 91, 104, 98, 112, 124]);
  useEffect(() => {
    const id = setInterval(() => {
      setRevenue(r => +(r + (Math.random() - 0.4) * 4).toFixed(1));
      setOrders(o => o + Math.round(Math.random() * 8));
      setCycle(c => +Math.max(3.4, Math.min(5.2, c + (Math.random() - 0.5) * 0.1)).toFixed(2));
      setSeries(s => {
        const next = Math.max(35, s[s.length - 1] + (Math.random() - 0.4) * 8);
        return [...s.slice(1), next];
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="demo-canvas">
      <div className="kpi-row">
        <div className="kpi"><div className="k">Pipeline</div><div className="v">${revenue}<small>K</small></div><div className="delta">+12.4%</div></div>
        <div className="kpi"><div className="k">Orders</div><div className="v">{orders.toLocaleString()}</div><div className="delta">+5.2%</div></div>
        <div className="kpi"><div className="k">Cycle</div><div className="v">{cycle}<small>d</small></div><div className="delta neg">−1.1d</div></div>
      </div>
      <div className="spark-frame">
        <div className="label-row">
          <span className="label">Revenue activity · 30d</span>
          <span className="label" style={{ color: 'var(--accent)' }}>LIVE</span>
        </div>
        <Sparkline data={series} color="oklch(0.55 0.14 35)" fill height={120} />
      </div>
    </div>
  );
}

/* ---------- Drowsiness EAR demo ---------- */
function EarDemo() {
  const [series, setSeries] = useState(Array.from({ length: 50 }, () => 0.30 + Math.random() * 0.05));
  const [ear, setEar] = useState(0.32);
  const [risk, setRisk] = useState(12);
  const [warn, setWarn] = useState(false);
  useEffect(() => {
    let tick = 0;
    const id = setInterval(() => {
      tick++;
      const cycle = tick % 80;
      let v;
      if (cycle > 65) {
        v = 0.13 + Math.random() * 0.05;
        setWarn(true);
        setRisk(85 + Math.round(Math.random() * 10));
      } else {
        v = 0.30 + Math.random() * 0.05;
        if (Math.random() > 0.92 && cycle <= 65) v = 0.18;
        setWarn(false);
        setRisk(8 + Math.round(Math.random() * 8));
      }
      setEar(+v.toFixed(2));
      setSeries(s => [...s.slice(1), v]);
    }, 130);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="demo-canvas">
      <div className="kpi-row">
        <div className="kpi"><div className="k">EAR</div><div className="v">{ear.toFixed(2)}</div></div>
        <div className="kpi"><div className="k">Risk</div><div className="v" style={{ color: warn ? 'var(--bad)' : 'var(--ink)' }}>{risk}<small>%</small></div></div>
        <div className="kpi"><div className="k">FPS</div><div className="v">28<small>.4</small></div></div>
      </div>
      <div className="ear-frame">
        <div className={"ear-status " + (warn ? "warn" : "")}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: 'currentColor' }}></span>
          {warn ? "Fatigue detected" : "Active monitoring"}
        </div>
        <Sparkline data={series} color={warn ? "oklch(0.55 0.16 25)" : "oklch(0.55 0.14 35)"} height={100} />
      </div>
    </div>
  );
}

/* ---------- Parking demo ---------- */
function ParkingDemo() {
  const [slots, setSlots] = useState(() => Array.from({ length: 8 }, (_, i) => ({
    id: 'A' + (i + 1),
    state: i === 1 || i === 4 || i === 6 ? 'free' : 'occ'
  })));
  useEffect(() => {
    const id = setInterval(() => {
      setSlots(prev => prev.map(s => Math.random() > 0.85 ? { ...s, state: s.state === 'free' ? 'occ' : 'free' } : s));
    }, 2400);
    return () => clearInterval(id);
  }, []);
  const free = slots.filter(s => s.state === 'free').length;
  return (
    <div className="demo-canvas">
      <div className="kpi-row">
        <div className="kpi"><div className="k">Total</div><div className="v">8</div></div>
        <div className="kpi"><div className="k">Available</div><div className="v" style={{ color: 'var(--good)' }}>{free}</div></div>
        <div className="kpi"><div className="k">Confidence</div><div className="v">96<small>.4%</small></div></div>
      </div>
      <div className="pgrid">
        {slots.map(s => <div key={s.id} className={"pslot " + s.state} data-slot={s.id}></div>)}
      </div>
    </div>
  );
}

/* ---------- Forecast demo ---------- */
function ForecastDemo() {
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const actual = [420, 480, 510, 490, 600, 750, 820, 460, 520, 540, 510, 630, 780, 850];
  const forecast = [400, 490, 500, 470, 580, 720, 800, 450, 500, 550, 520, 610, 750, 860];
  return (
    <div className="demo-canvas">
      <div className="kpi-row">
        <div className="kpi"><div className="k">Accuracy</div><div className="v">94<small>%</small></div></div>
        <div className="kpi"><div className="k">Speedup</div><div className="v">4.5<small>×</small></div></div>
        <div className="kpi"><div className="k">Wastage</div><div className="v" style={{ color: 'var(--good)' }}>−18<small>%</small></div></div>
      </div>
      <div className="fc-frame">
        <div className="fc-legend">
          <span>Actual</span>
          <span className="f">Forecast</span>
        </div>
        <div style={{ position: 'relative', height: 120 }}>
          <Sparkline data={actual} color="oklch(0.18 0.012 70)" fill height={120} />
          <div style={{ position: 'absolute', inset: 0 }}>
            <Sparkline data={forecast} color="oklch(0.55 0.14 35)" dashed height={120} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {labels.map((l, i) => <span key={i} className="label" style={{ fontSize: 9 }}>{l}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero live panel ---------- */
function HeroLive() {
  const [pl, setPl] = useState(842.5);
  const [acc, setAcc] = useState(94);
  const [series, setSeries] = useState(Array.from({ length: 40 }, (_, i) => 50 + Math.sin(i / 4) * 10 + Math.random() * 6));
  useEffect(() => {
    const id = setInterval(() => {
      setPl(v => +(v + (Math.random() - 0.4) * 2).toFixed(1));
      setAcc(v => Math.min(99, Math.max(91, +(v + (Math.random() - 0.5) * 0.4).toFixed(1))));
      setSeries(s => [...s.slice(1), s[s.length - 1] + (Math.random() - 0.45) * 4]);
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-live">
      <div className="head">
        <span className="label">Operator status</span>
        <span className="pulse">Live</span>
      </div>
      <div className="stat-grid">
        <div className="stat"><div className="k">Pipeline</div><div className="v">${pl}K</div></div>
        <div className="stat"><div className="k">Forecast acc.</div><div className="v">{acc}%</div></div>
      </div>
      <div className="spark">
        <Sparkline data={series} color="oklch(0.55 0.14 35)" fill height={36} />
      </div>
      <div className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>SIG-A · MutthaSales</span>
        <span style={{ color: 'var(--good)' }}>● healthy</span>
      </div>
    </div>
  );
}

/* ---------- Ticker (status bar) ---------- */
function Ticker() {
  const items = [
    { t: 'MUTTHASALES', v: '+12.4%', cls: 'pos' },
    { t: 'FORECAST_ACC', v: '94.0%', cls: 'pos' },
    { t: 'EAR_THRESHOLD', v: '0.21', cls: '' },
    { t: 'OCCUPANCY', v: '37.5%', cls: '' },
    { t: 'WASTAGE', v: '-18.2%', cls: 'pos' },
    { t: 'KOBLENZ', v: '14°C · ☁', cls: '' },
    { t: 'UPTIME', v: '99.97%', cls: 'pos' },
    { t: 'CYCLE_TIME', v: '4.2d', cls: '' },
    { t: 'CGPA', v: '9.05', cls: 'pos' },
  ];
  const all = [...items, ...items];
  return (
    <div className="ticker-track">
      {all.map((it, i) => (
        <span key={i} className="item">
          <span className="sep">{String(i + 1).padStart(2, '0')}</span>
          <span>{it.t}</span>
          <b className={it.cls}>{it.v}</b>
        </span>
      ))}
    </div>
  );
}

window.PortfolioDemos = {
  KpiBlock, EarDemo, ParkingDemo, ForecastDemo, HeroLive, Ticker, Sparkline
};
