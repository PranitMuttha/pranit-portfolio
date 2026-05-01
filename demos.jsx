/* global React */
const { useEffect, useRef, useState } = React;

/* ---------- Sparkline (removed) ---------- */
function Sparkline() {
  // Charts removed per request — render nothing so layout stays intact.
  return null;
}

/* ---------- KPI block ---------- */
function KpiBlock() {
  const [series, setSeries] = useState([42, 58, 51, 68, 74, 91, 104, 98, 112, 124]);
  useEffect(() => {
    const id = setInterval(() => {
      setSeries(s => {
        const next = Math.max(35, s[s.length - 1] + (Math.random() - 0.4) * 8);
        return [...s.slice(1), next];
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="demo-canvas">
      <div className="spark-frame">
        <Sparkline data={series} color="oklch(0.55 0.14 35)" fill height={120} />
      </div>
    </div>
  );
}

/* ---------- Drowsiness EAR demo ---------- */
function EarDemo() {
  const series = Array.from({ length: 50 }, (_, i) => 0.30 + Math.sin(i / 5) * 0.015);
  return (
    <div className="demo-canvas">
      <div className="ear-frame">
        <Sparkline data={series} color="oklch(0.55 0.14 35)" height={100} />
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
      {/* KPIs removed: Total / Available / Confidence */}
      <div className="pgrid">
        {slots.map(s => <div key={s.id} className={"pslot " + s.state} data-slot={s.id}></div>)}
      </div>
    </div>
  );
}

/* ---------- Forecast demo ---------- */
function ForecastDemo() {
  // 'Actual' series removed per request; keep forecast demo only
  const forecast = [400, 490, 500, 470, 580, 720, 800, 450, 500, 550, 520, 610, 750, 860];
  return (
    <div className="demo-canvas">
      <div className="fc-frame">
        <div style={{ position: 'relative', height: 120 }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Sparkline data={forecast} color="oklch(0.55 0.14 35)" dashed height={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero live panel ---------- */
function HeroLive() {
  const [series, setSeries] = useState(Array.from({ length: 40 }, (_, i) => 50 + Math.sin(i / 4) * 10 + Math.random() * 6));
  useEffect(() => {
    const id = setInterval(() => {
      setSeries(s => [...s.slice(1), s[s.length - 1] + (Math.random() - 0.45) * 4]);
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-live">
      <div className="spark">
        <Sparkline data={series} color="oklch(0.55 0.14 35)" fill height={36} />
      </div>
    </div>
  );
}

/* Ticker removed */

window.PortfolioDemos = {
  KpiBlock, EarDemo, ParkingDemo, ForecastDemo, HeroLive, Sparkline
};
