import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Download,
  Plane,
  Radio,
} from "lucide-react";
import InteractivePreview from "@/components/interactive-preview";
import {
  DownloadSection,
  FaqSection,
  FeatureGrid,
  Footer,
  LocalAiArchitecture,
  Navbar,
  QuickStart,
  SystemRequirements,
} from "@/components/site-sections";

const capabilityHighlights = [
  { icon: Radio, label: "GSX Pro connected", detail: "Ground services, in sync" },
  { icon: Cpu, label: "100% local AI", detail: "No cloud. No subscription." },
  { icon: Plane, label: "Built for MSFS 2024", detail: "A more complete turnaround" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-shell" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR TURNAROUND, UNDER CONTROL</div>
              <h1>
                Ground ops,
                <br />
                <span>cleared for</span> takeoff.
              </h1>
              <p className="hero-lede">
                A smarter ground-handling companion for Microsoft Flight Simulator 2024.
                Take command of GSX Pro, brief your flight, and talk to your local AI copilot.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#download" aria-label="View Ground Manager Pro downloads">
                  <Download size={17} strokeWidth={2.2} />
                  Get Ground Manager Pro
                  <ArrowUpRight size={16} />
                </a>
                <a className="button button-quiet" href="#features">
                  Explore features <ArrowDownRight size={16} />
                </a>
              </div>
              <div className="hero-release">
                <span className="release-dot" />
                <span>Release <strong>v1.4.1</strong></span>
                <span className="release-divider" />
                <span>Windows 10 / 11 · 64-bit</span>
              </div>
              <div className="hero-highlights">
                {capabilityHighlights.map(({ icon: Icon, label, detail }) => (
                  <div className="highlight-item" key={label}>
                    <span className="highlight-icon"><Icon size={17} /></span>
                    <span><strong>{label}</strong><small>{detail}</small></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual" id="preview">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-coordinates">47°27&apos;N &nbsp; 008°33&apos;E</div>
              <div className="visual-caption"><span className="live-pulse" /> LIVE UI PREVIEW <span>INTERACTIVE DEMO</span></div>
              <InteractivePreview />
              <div className="visual-bottom-note"><span>LOCAL AGENT</span><code>127.0.0.1:8383</code><span className="note-ready">READY</span></div>
            </div>
          </div>
          <div className="hero-bottomline"><span>DESIGNED FOR THE FLOW BETWEEN ARRIVAL AND DEPARTURE</span><ArrowDown size={15} /></div>
        </section>

        <section className="section-shell feature-section" id="features">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> ONE COCKPIT. EVERY TURNAROUND.</div>
              <h2>Every ground task,<br /><span>in its place.</span></h2>
            </div>
            <p>From the first chock to the final taxi clearance, Ground Manager Pro brings your operation into one calm, connected workspace.</p>
          </div>
          <FeatureGrid />
        </section>

        <section className="section-shell ai-section" id="copilot">
          <div className="ai-layout">
            <div className="ai-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR VOICE. YOUR HARDWARE. YOUR PC.</div>
              <h2>Intelligence that<br /><span>stays on board.</span></h2>
              <p className="section-lede">A complete voice-to-action pipeline runs locally on your Windows PC. No cloud round-trips, API keys, or recurring AI fees.</p>
              <div className="ai-points">
                <div><span className="check-mark"><Check size={14} /></span><span><strong>Universal push-to-talk</strong><small>Bind keyboard, mouse, yoke, joystick, or throttle controls.</small></span></div>
                <div><span className="check-mark"><Check size={14} /></span><span><strong>GPU or CPU inference</strong><small>Choose a local Qwen2.5 or Phi-3.5 model to suit your system.</small></span></div>
                <div><span className="check-mark"><Check size={14} /></span><span><strong>Made for the cockpit</strong><small>Natural male pilot voice with an animated, lip-synced First Officer.</small></span></div>
              </div>
              <a className="text-link" href="#requirements">See the system requirements <ArrowRight size={16} /></a>
            </div>
            <LocalAiArchitecture />
          </div>
        </section>

        <section className="section-shell requirements-section" id="requirements">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> BUILT FOR YOUR SIM RIG</div>
              <h2>Ready for your <span>flight deck.</span></h2>
            </div>
            <p>Designed for Windows 10 and 11, Microsoft Flight Simulator 2024, and FSDT GSX Pro.</p>
          </div>
          <SystemRequirements />
        </section>

        <DownloadSection />
        <QuickStart />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
