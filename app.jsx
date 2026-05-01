/* global React, ReactDOM */
const { useEffect, useRef, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "indigo"
}/*EDITMODE-END*/;

const ACCENTS = {
  indigo: { c: "#6b7cff", c2: "#8a6bff" },
  azure:  { c: "#4d8cff", c2: "#6bb8ff" },
  rose:   { c: "#ff7aa8", c2: "#c478ff" },
  mint:   { c: "#3ec9a7", c2: "#5ce1c8" },
  amber:  { c: "#e8a93b", c2: "#f0c46a" }
};

const PROJECTS = [
  {
    id: 'mutthasales',
    title: 'MutthaSales Enterprise Platform',
    role: 'Founder · Data & Platform',
    year: '2024 — Now',
    tags: ['SaaS', 'KPI Engine', 'Operations', 'Live'],
    summary: 'A unified B2B/B2C SaaS engine that consolidates sales, operations and analytics into a single source of truth — from data ingestion through decision workflows.',
    href: 'https://app.mutthasales.in',
    feature: true
  },
  {
    id: 'forecast',
    title: 'Food Demand Forecasting',
    role: 'Data Scientist',
    year: '2023',
    tags: ['Tableau', 'Python', 'Forecasting'],
    summary: 'Statistical forecasting embedded into operator-friendly dashboards — turning historical meal-order data into procurement decisions.'
  },
  {
    id: 'parking',
    title: 'Smart Car Parking System',
    role: 'Team Lead · CV Developer',
    year: '2023',
    tags: ['Computer Vision', 'OpenCV', 'C/C++'],
    summary: 'Region-mapped occupancy detection from camera feeds. Tuned preprocessing for lighting drift, shadow masking, and geometric reliability.'
  },
  {
    id: 'drowsiness',
    title: 'Drowsiness Detection System',
    role: 'CV Engineer',
    year: '2023',
    tags: ['Edge AI', 'OpenCV', 'Raspberry Pi'],
    summary: 'Real-time fatigue detection via Eye Aspect Ratio with sub-100ms inference on edge hardware. Built for low-connectivity reliability.'
  }
];

const EXPERIENCE = [
  {
    when: '2024 — Present',
    role: 'E-commerce Manager (Data Analysis)',
    org: 'MutthaSales',
    desc: 'Built KPI dashboards, improved listing performance, and maintained the enterprise SaaS platform end-to-end.',
    stack: ['Python', 'SQL', 'SaaS', 'Analytics']
  },
  {
    when: '2025 — 2027',
    role: 'MS, Web & Data Science',
    org: 'University of Koblenz',
    desc: 'Researching the intersection of ML systems and product surfaces — focus on operationalised intelligence.',
    stack: ['Research', 'ML Systems']
  },
  {
    when: 'Apr — May 2023',
    role: 'Data Science Intern',
    org: 'Oasis Infobyte',
    desc: 'Delivered ML mini-projects across classification, regression, and exploratory analysis.',
    stack: ['Scikit-learn', 'EDA', 'Python']
  },
  {
    when: 'Apr — May 2023',
    role: 'Salesforce Developer Virtual Intern',
    org: 'SmartInternz',
    desc: 'Workflow automation and platform configuration on the Salesforce ecosystem.',
    stack: ['Salesforce', 'Apex']
  },
  {
    when: '2021 — 2025',
    role: 'B.E. Artificial Intelligence & Data Science',
    org: 'Savitribai Phule Pune University',
    desc: 'Graduated with CGPA 9.05. Core focus on machine learning, computer vision, and applied analytics.',
    stack: ['CGPA 9.05']
  }
];

const SKILLS = [
  { n: 'Python',         lvl: 92 },
  { n: 'SQL',            lvl: 86 },
  { n: 'Tableau',        lvl: 80 },
  { n: 'Scikit-learn',   lvl: 82 },
  { n: 'OpenCV',         lvl: 84 },
  { n: 'Data Analytics', lvl: 90 },
  { n: 'KPI Dashboards', lvl: 88 },
  { n: 'SaaS Workflow',  lvl: 84 }
];

const DEMO_MAP = {
  mutthasales: () => (window.PortfolioDemos || {}).KpiBlock,
  forecast:    () => (window.PortfolioDemos || {}).ForecastDemo,
  parking:     () => (window.PortfolioDemos || {}).ParkingDemo,
  drowsiness:  () => (window.PortfolioDemos || {}).EarDemo,
};

// TickerBar removed

function Nav() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="glyph">P</span>
            <span>Pranit Muttha</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a className="btn primary" href="#contact">
              Get in touch
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  const { HeroLive } = window.PortfolioDemos || {};
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="pulse"></span>
              <span style={{ color: 'var(--text-2)' }}>Available for full-time roles · 2026</span>
            </div>
            <h1>
              Data-backed products,<br/>
              built for <span className="accent">decisions.</span>
            </h1>
            <p className="lede">
              I'm Pranit Muttha — a Data Scientist & AI Engineer turning real operational complexity into KPI dashboards, edge-AI systems, and SaaS workflows that real teams use every day.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">
                See selected work
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
              <a className="btn" href="resume.html">Download resume</a>
            </div>
          </div>
          {HeroLive && (
            <div className="hero-right">
              <HeroLive />
            </div>
          )}
        </div>

        <div className="hero-meta-strip">
          <div><div className="k">Based in</div><div className="v">Koblenz<small>Germany · open to relocation</small></div></div>
          <div><div className="k">Education</div><div className="v">MS Web & Data Science<small>University of Koblenz</small></div></div>
          <div><div className="k">CGPA</div><div className="v">9.05<small>B.E. AI & Data Science</small></div></div>
          <div><div className="k">Building</div><div className="v">MutthaSales<small>app.mutthasales.in</small></div></div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const Demo = DEMO_MAP[p.id] ? DEMO_MAP[p.id]() : null;
  return (
    <article className={"project" + (p.feature ? " feature" : "")}>
      <div className="project-body">
        <div className="row1">
          <h3>{p.title}</h3>
          <span className="role">{p.role}</span>
        </div>
        <p>{p.summary}</p>
        <div className="tags">
          {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="foot">
          {p.href ? (
            <a href={p.href} target="_blank" rel="noreferrer">
              Visit live product
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          ) : <span style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Case study</span>}
          <span className="year">{p.year}</span>
        </div>
      </div>
      {Demo && (
        <div className="demo-wrap">
          <Demo />
        </div>
      )}
    </article>
  );
}

function Work() {
  return (
    <section className="bay" id="work">
      <div className="container">
        <div className="section-head">
          <h2>Selected <span className="accent">work.</span></h2>
          <div className="meta">04 / projects</div>
        </div>
        <div className="projects">
          {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bay" id="about">
      <div className="container">
        <div className="about">
          <div className="about-portrait">
            <div className="badge">
              <div className="name">Pranit Muttha</div>
              <div className="role">Data Scientist · AI Engineer</div>
              <div className="loc">KOBLENZ, DE · 50.36°N</div>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">About</span>
            <h2 style={{ marginTop: 16 }}>Engineer first.<br/>Operator always.</h2>
            <p>
              I work at the intersection of machine learning, analytics, and SaaS product delivery. My focus is shipping data systems that real people use to make real decisions — not notebooks, not slide-ware.
            </p>
            <p>
              Today I run the data and platform side of MutthaSales, a B2B/B2C engine that consolidates ingestion, KPI logic, and follow-up workflows into one product. In parallel I'm reading for a Master's in Web & Data Science at the University of Koblenz.
            </p>
            <p>
              Earlier work spans computer vision (drowsy-driver alerts, parking-lot occupancy) and forecasting dashboards for food-supply operations. The thread connecting all of it: model accuracy is the easy part — the hard part is a surface the operator trusts at 3 a.m.
            </p>
            <div className="about-grid">
              <div className="stat"><div className="v">9.05</div><div className="k">CGPA · B.E.</div></div>
              <div className="stat"><div className="v">4+</div><div className="k">Production projects</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bay" id="experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience & <span className="accent">education.</span></h2>
          <div className="meta">timeline · 2021 → 2027</div>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((r, i) => (
            <div key={i} className="tl-row">
              <div className="when">{r.when}</div>
              <div>
                <div className="role">{r.role}</div>
                <div className="org">{r.org}</div>
              </div>
              <div className="desc">{r.desc}</div>
              <div className="stack">{r.stack.map(s => <span key={s} className="tag">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.bar > span').forEach(s => { s.style.width = s.dataset.lvl + '%'; });
        }
      });
    }, { threshold: 0.2 });
    const el = document.getElementById('skills'); if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="bay" id="skills">
      <div className="container">
        <div className="section-head">
          <h2>Working <span className="accent">stack.</span></h2>
          <div className="meta">core competencies</div>
        </div>
        <div className="skills">
          {SKILLS.map(s => (
            <div key={s.n} className="skill">
              <div className="h"><span className="n">{s.n}</span><span className="lvl">{s.lvl}</span></div>
              <div className="bar"><span data-lvl={s.lvl} style={{ width: 0 }}></span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bay" id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 style={{ marginTop: 16 }}>Let's build something <span className="accent">measurable.</span></h2>
              <p style={{ color: 'var(--text-2)', maxWidth: '52ch', marginTop: 20 }}>
                Open to full-time and working-student roles in Germany & EU — data science, ML engineering, analytics, and applied AI.
              </p>
            </div>
            <div className="contact-list">
              <a className="contact-row" href="mailto:mutthapranit@gmail.com">
                <span className="k">Email</span>
                <span className="v">mutthapranit@gmail.com</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-row" href="https://linkedin.com/in/pranit-muttha" target="_blank" rel="noreferrer">
                <span className="k">LinkedIn</span>
                <span className="v">/in/pranit-muttha</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-row" href="tel:+4917668386973">
                <span className="k">Phone</span>
                <span className="v">+49 176 68386973</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-row" href="https://app.mutthasales.in" target="_blank" rel="noreferrer">
                <span className="k">Product</span>
                <span className="v">app.mutthasales.in</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bay">
      <div className="container">
        <div className="foot-row">
          <div className="copy">© {new Date().getFullYear()} · Pranit Narendra Muttha · Built in Koblenz</div>
          <div className="links">
            <a href="resume.html">Resume</a>
            <a href="mailto:mutthapranit@gmail.com">Email</a>
            <a href="https://linkedin.com/in/pranit-muttha" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#top">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TweaksUI({ tw, setTweak }) {
  if (!window.TweaksPanel) return null;
  const { TweaksPanel, TweakSection, TweakSelect } = window;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Crystal accent" />
      <TweakSelect label="Accent" value={tw.accent}
        options={Object.keys(ACCENTS)}
        onChange={v => setTweak('accent', v)} />
    </TweaksPanel>
  );
}

function App() {
  const tweaks = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [tw, setTweak] = tweaks;

  useEffect(() => {
    const a = ACCENTS[tw.accent] || ACCENTS.indigo;
    document.documentElement.style.setProperty('--accent', a.c);
    document.documentElement.style.setProperty('--accent-2', a.c2);
  }, [tw.accent]);

  return (
    <>
      <div className="ambient"></div>
      <div className="grid-bg"></div>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <TweaksUI tw={tw} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
