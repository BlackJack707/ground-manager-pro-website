import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Download,
  Headphones,
  Keyboard,
  Mic2,
  Plane,
  Radio,
  ShieldCheck,
  Sparkles,
  Waves,
  Workflow,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

const modules = [
  {
    number: "01",
    title: "Ground Operations",
    icon: Radio,
    description: "Coordinate the services that turn your aircraft around. Monitor GSX Pro and Couatl, then manage de-icing, pushback, refuelling, boarding, catering, baggage, and jetway or stairs.",
    detail: "GSX PRO · COUATL · REMOTE · SERVICE CONTROL",
    size: "feature-wide",
  },
  {
    number: "02",
    title: "Local AI Copilot",
    icon: Sparkles,
    description: "Issue natural text or push-to-talk commands, from a single service to a sequence of up to five ground actions.",
    detail: "LOCAL MODELS · TEXT + VOICE",
    size: "feature-tall",
  },
  {
    number: "03",
    title: "Flight Plan & Briefing",
    icon: Plane,
    description: "Keep your route, flight details, and turnaround briefing together in one operational view.",
    detail: "ROUTE · AIRCRAFT · BRIEFING",
    size: "",
  },
  {
    number: "04",
    title: "Interactive Checklists",
    icon: CheckCircle2,
    description: "Move through cockpit and turnaround procedures with clear, interactive checklists from gate to pushback.",
    detail: "GATE · CABIN · BEFORE PUSH",
    size: "",
  },
  {
    number: "05",
    title: "Aircraft & Telemetry",
    icon: Waves,
    description: "See live aircraft and simulator data delivered directly from MSFS 2024 through SimConnect.",
    detail: "SIMCONNECT · LIVE TELEMETRY",
    size: "",
  },
  {
    number: "06",
    title: "Automated Announcements",
    icon: AudioLines,
    description: "Set up cabin and cockpit announcements that follow flight phases and aircraft state.",
    detail: "AAS · FLIGHT-PHASE AWARE",
    size: "",
  },
  {
    number: "07",
    title: "Route & Navigation",
    icon: Workflow,
    description: "Keep route context and navigation details close at hand in the same unified cockpit interface.",
    detail: "ROUTE OVERVIEW · NAV DATA",
    size: "",
  },
  {
    number: "08",
    title: "Settings & Hardware",
    icon: Cpu,
    description: "Configure your local model, voice, microphone, PTT controls, and SimConnect or GSX paths.",
    detail: "MODEL · AUDIO · DEVICE SETUP",
    size: "",
  },
];

const questions = [
  {
    question: "Do I need an internet connection or an AI subscription?",
    answer: "The AI voice and language-model pipeline is designed to run locally on your PC, so it does not require a cloud AI account or subscription. An internet connection may still be needed for simulator, add-on, or other online services you use independently.",
  },
  {
    question: "Can I use my joystick or yoke as the push-to-talk button?",
    answer: "Yes. Universal PTT is designed to work with keyboard and mouse buttons as well as connected joysticks, yokes, throttle quadrants, and other controllers without relying on a fixed device index.",
  },
  {
    question: "Which aircraft are supported?",
    answer: "Ground Manager Pro works with MSFS 2024 and FSDT GSX Pro ground services. The brief specifically calls out popular airline add-ons including the Fenix A319/A320/A321, PMDG 737, iFly 737 MAX, and Aerosoft A330neo; aircraft-specific behavior can vary by add-on and simulator setup.",
  },
  {
    question: "How does the SimConnect connection work?",
    answer: "The desktop app reads simulator aircraft and telemetry data through SimConnect. Its local GroundManagerAgent communicates on 127.0.0.1:8383, while GSX Pro and Couatl provide the ground-service integration.",
  },
  {
    question: "What do I need to use the local AI copilot?",
    answer: "A Windows 10 or 11 64-bit PC is required. The app supports local CPU inference, with CUDA-capable NVIDIA graphics recommended for a faster experience. Allow additional disk space for your selected GGUF model and voice assets.",
  },
];

const requirements = [
  ["Operating system", "Windows 10 / 11 (64-bit)", "Windows 11 (64-bit)"],
  ["Simulator", "Microsoft Flight Simulator 2024", "Microsoft Flight Simulator 2024"],
  ["Ground services", "FSDT GSX Pro", "FSDT GSX Pro"],
  ["Processor / GPU", "Modern multi-core CPU", "NVIDIA GTX / RTX with CUDA"],
  ["Memory", "16 GB RAM", "32 GB RAM"],
  ["Storage", "App + selected local AI model", "SSD with space for app, models & voices"],
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Ground Manager Pro home">
          <span className="brand-mark"><Plane size={19} strokeWidth={2} /></span>
          <span className="brand-name">GROUND MANAGER <b>PRO</b><small>TURNAROUNDSTUDIO / V-ONE STUDIOS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#copilot">AI Copilot</a>
          <a href="#preview">UI Preview</a>
          <a href="#requirements">Requirements</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#download" className="header-cta">Download for Windows <ArrowRight size={15} /></a>
      </div>
    </header>
  );
}

export function FeatureGrid() {
  return (
    <div className="feature-grid">
      {modules.map(({ number, title, icon: Icon, description, detail, size }) => (
        <article className={`feature-card ${size}`} key={number}>
          <div className="feature-topline"><span className="feature-index">{number} / 08</span><Icon size={19} strokeWidth={1.7} /></div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="feature-detail">{detail}</div>
        </article>
      ))}
    </div>
  );
}

const pipeline = [
  { index: "01", name: "Whisper.net", detail: "Push-to-talk speech recognition", icon: Mic2, color: "ice" },
  { index: "02", name: "LLamaSharp", detail: "Qwen2.5 / Phi-3.5 · CPU or CUDA", icon: Cpu, color: "gold" },
  { index: "03", name: "Kokoro / Piper", detail: "Natural male pilot voice", icon: AudioLines, color: "green" },
  { index: "04", name: "SimConnect + GSX", detail: "Local actions and ground services", icon: Plane, color: "gold" },
];

export function LocalAiArchitecture() {
  return (
    <div className="architecture-card">
      <div className="architecture-header"><span><span className="tiny-live" /> LOCAL VOICE PIPELINE</span><span className="architecture-tag">NO CLOUD REQUIRED</span></div>
      <div className="pipeline">
        {pipeline.map(({ index, name, detail, icon: Icon, color }, position) => (
          <div className="pipeline-step" key={name}>
            <div className="pipeline-icon-row">
              <span className={`pipeline-icon ${color}`}><Icon size={18} /></span>
              <span className="pipeline-index">{index}</span>
            </div>
            <strong>{name}</strong>
            <small>{detail}</small>
            {position < pipeline.length - 1 && <span className="pipeline-link"><ArrowRight size={15} /></span>}
          </div>
        ))}
      </div>
      <div className="architecture-footer">
        <div className="avatar-orbit"><span className="avatar-silhouette"><Headphones size={17} /></span><span className="orbit-dot" /></div>
        <div><strong>Your First Officer, on your side.</strong><small>Animated 3D copilot · lip-synced voice · local processing</small></div>
        <div className="waveform" aria-label="Audio waveform"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="ptt-row">
        <span className="ptt-label">UNIVERSAL PTT</span>
        <span><Keyboard size={14} /> Keyboard</span>
        <span><Mic2 size={14} /> Mouse</span>
        <span><Plane size={14} /> Yoke / Joystick</span>
        <span><Zap size={14} /> Throttle</span>
      </div>
    </div>
  );
}

export function SystemRequirements() {
  return (
    <div className="requirements-table-wrap">
      <table className="requirements-table">
        <thead><tr><th>COMPONENT</th><th><span className="table-dot minimum" /> MINIMUM</th><th><span className="table-dot recommended" /> RECOMMENDED</th></tr></thead>
        <tbody>
          {requirements.map(([component, minimum, recommended]) => (
            <tr key={component}><th scope="row">{component}</th><td>{minimum}</td><td>{recommended}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="requirements-note"><BadgeCheck size={16} /><span>CUDA is recommended, not required. Local models and voice assets need additional storage.</span></div>
    </div>
  );
}

export function DownloadSection() {
  return (
    <section className="section-shell download-section" id="download">
      <div className="download-panel">
        <div className="download-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> RELEASE CENTER · v1.4.1</div>
          <h2>Your next turnaround<br /><span>starts here.</span></h2>
          <p>Ground Manager Pro for Windows 10 / 11 · 64-bit.</p>
          <div className="release-facts"><span><CheckCircle2 size={15} /> No subscription</span><span><ShieldCheck size={15} /> Local-first AI</span></div>
        </div>
        <div className="download-options">
          <DownloadCard title="Windows Installer" format="NSIS · .EXE" icon={<Download size={19} />} />
          <DownloadCard title="Enterprise Installer" format="MSI · WINDOWS" icon={<BadgeCheck size={19} />} />
          <p className="download-availability"><span className="availability-dot" /> Installers are not yet available for download.</p>
        </div>
        <div className="changelog" id="changelog">
          <div><span className="changelog-label">LATEST RELEASE</span><strong>v1.4.1</strong><span className="changelog-pill">Release notes</span></div>
          <ul className="changelog-highlights">
            <li>GSX Pro ground-service coordination with live connection status.</li>
            <li>Local text and push-to-talk AI copilot with universal controller binding.</li>
            <li>Flight plan, interactive checklists, and live SimConnect telemetry.</li>
            <li>Flight-phase announcements, route view, and hardware setup.</li>
          </ul>
          <small>Installer size and SHA-256 checksum will be published with the release files.</small>
        </div>
        <div className="bundle-note"><span className="bundle-icon"><ShieldCheck size={17} /></span><p><strong>One install. Everything on board.</strong><br />The Windows release package is intended to include the local agent, voice assets, and 3D copilot assets.</p></div>
      </div>
    </section>
  );
}

function DownloadCard({ title, format, icon }: { title: string; format: string; icon: ReactNode }) {
  return (
    <div className="download-card">
      <div className="download-card-icon">{icon}</div>
      <div className="download-card-copy"><strong>{title}</strong><small>{format} <span>·</span> v1.4.1</small></div>
      <button className="download-disabled" type="button" disabled aria-label={`${title} not yet available`}>Not yet available</button>
    </div>
  );
}

export function QuickStart() {
  const steps = [
    { number: "01", title: "Install the app", description: "Install Ground Manager Pro on your Windows 10 / 11 PC." },
    { number: "02", title: "Bind your PTT", description: "Choose a push-to-talk button on your yoke, joystick, throttle, or keyboard." },
    { number: "03", title: "Start your sim", description: "Launch MSFS 2024 and GSX Pro, then check your connection status." },
  ];
  return (
    <section className="section-shell quick-start" id="quick-start">
      <div className="quick-start-title">
        <div className="eyebrow"><span className="eyebrow-line" /> THREE STEPS TO THE GATE</div>
        <h2>Brief. Bind.<br /><span>Board.</span></h2>
      </div>
      <div className="quick-steps">
        {steps.map(({ number, title, description }) => (
          <article className="quick-step" key={number}>
            <span className="quick-number">{number}</span>
            <span className="quick-connector" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-shell faq-section" id="faq">
      <div className="faq-heading">
        <div className="eyebrow"><span className="eyebrow-line" /> FREQUENTLY ASKED</div>
        <h2>Clear for<br /><span>questions.</span></h2>
        <p>Good flights start with good information.</p>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }, index) => (
          <details className="faq-item" key={question} open={index === 0}>
            <summary><span className="faq-question">{question}</span><ChevronDown size={17} /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark"><Plane size={18} strokeWidth={2} /></span>
            <span className="brand-name">GROUND MANAGER <b>PRO</b><small>TURNAROUNDSTUDIO / V-ONE STUDIOS</small></span>
          </a>
          <p>Every turnaround, under control.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a><a href="#copilot">AI Copilot</a><a href="#requirements">Requirements</a><a href="#quick-start">Quick start</a><a href="#changelog">Changelog</a><a href="#faq">Support & FAQ</a>
        </div>
        <a className="footer-download" href="#download">Get the app <ArrowRight size={15} /></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TurnaroundStudio / V-ONE Studios</span>
        <span>Ground Manager Pro is not affiliated with Microsoft or FSDT.</span>
        <span>Imprint and privacy details will be published before downloads are enabled.</span>
        <span className="footer-version">PRODUCT RELEASE <b>v1.4.1</b></span>
      </div>
    </footer>
  );
}
