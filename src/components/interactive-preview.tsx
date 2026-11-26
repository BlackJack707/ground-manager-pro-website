"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  AudioLines,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  Cloud,
  Fuel,
  Headphones,
  Map,
  Menu,
  Mic,
  Plane,
  Radio,
  Settings2,
  Sparkles,
  Truck,
  Waves,
  Wind,
} from "lucide-react";

const appModules = [
  { number: "01", label: "Ground Operations", icon: Truck, title: "Ground Operations", subtitle: "Your turnaround at a glance.", metric: "TURNAROUND", value: "IN PROGRESS", status: "4 SERVICES ACTIVE", tile: "Ground services" },
  { number: "02", label: "AI Copilot", icon: Sparkles, title: "Ground Copilot", subtitle: "Your local First Officer is ready.", metric: "VOICE ENGINE", value: "LOCAL · READY", status: "PUSH TO TALK AVAILABLE", tile: "Copilot" },
  { number: "03", label: "Flight Plan", icon: Map, title: "Flight Plan & Briefing", subtitle: "A clear picture before you push.", metric: "FLIGHT", value: "VONE 274", status: "BRIEFING READY", tile: "Flight plan" },
  { number: "04", label: "Checklists", icon: ClipboardList, title: "Interactive Checklists", subtitle: "One action at a time, all accounted for.", metric: "CURRENT CHECKLIST", value: "BEFORE PUSHBACK", status: "6 OF 9 COMPLETE", tile: "Checklists" },
  { number: "05", label: "Aircraft & Telemetry", icon: Waves, title: "Aircraft & Telemetry", subtitle: "Live data from your simulator.", metric: "SIMCONNECT", value: "CONNECTED", status: "TELEMETRY LIVE", tile: "Telemetry" },
  { number: "06", label: "Announcements", icon: AudioLines, title: "Automated Announcements", subtitle: "The right message for the flight phase.", metric: "ANNOUNCEMENT SYSTEM", value: "STANDBY", status: "3 ANNOUNCEMENTS QUEUED", tile: "Announcements" },
  { number: "07", label: "Route & Navigation", icon: Plane, title: "Route & Navigation", subtitle: "Your route, always in view.", metric: "ROUTE", value: "ZURICH → VIENNA", status: "FLIGHT PLAN LOADED", tile: "Navigation" },
  { number: "08", label: "Settings", icon: Settings2, title: "Settings & Hardware", subtitle: "Set up your cockpit your way.", metric: "LOCAL SETUP", value: "ALL SYSTEMS READY", status: "3 DEVICES CONFIGURED", tile: "Settings" },
];

const serviceCommands = [
  { label: "Pushback", icon: Truck, answer: "Pushback is selected. Confirm your tug and direction in the GSX menu when ready." },
  { label: "De-icing", icon: Wind, answer: "De-icing request prepared for stand 14. Check conditions and confirm the GSX service." },
  { label: "Refueling", icon: Fuel, answer: "Fuel service is ready to coordinate. Review your fuel load before confirming." },
];

const moduleStats: Record<string, Array<[string, string, string]>> = {
  "01": [["PUSHBACK", "READY", "gold"], ["BOARDING", "IN PROGRESS", "green"], ["CATERING", "COMPLETE", "muted"]],
  "03": [["DEPARTURE", "LSZH", "ice"], ["ARRIVAL", "LOWW", "ice"], ["AIRCRAFT", "A320", "gold"]],
  "04": [["PARKING BRAKE", "SET", "green"], ["CABIN DOORS", "CLOSED", "green"], ["JETWAY", "DISCONNECTED", "gold"]],
  "05": [["ALTITUDE", "1,420 FT", "ice"], ["GROUNDSPEED", "0 KTS", "ice"], ["PARKING BRAKE", "SET", "green"]],
  "06": [["BOARDING", "READY", "green"], ["SAFETY DEMO", "QUEUED", "gold"], ["WELCOME", "COMPLETE", "muted"]],
  "07": [["DISTANCE", "270 NM", "ice"], ["CRUISE", "FL350", "ice"], ["ETE", "00:52", "gold"]],
  "08": [["AI MODEL", "QWEN 2.5", "green"], ["PTT DEVICE", "YOKE BUTTON 4", "gold"], ["AUDIO", "HEADSET MIC", "ice"]],
};

type ConversationEntry = { role: "pilot" | "copilot"; text: string };

export default function InteractivePreview() {
  const [activeModule, setActiveModule] = useState("02");
  const [conversation, setConversation] = useState<ConversationEntry[]>([
    { role: "copilot", text: "Good evening, Captain. Ground Copilot is online and ready for your turnaround." },
  ]);
  const active = appModules.find((module) => module.number === activeModule) ?? appModules[1];
  const ActiveIcon = active.icon;

  function runDemoCommand(command: (typeof serviceCommands)[number]) {
    setActiveModule("02");
    setConversation((current) => [
      ...current.slice(-2),
      { role: "pilot", text: command.label },
      { role: "copilot", text: command.answer },
    ]);
  }

  return (
    <div className="preview-window" aria-label="Interactive Ground Manager Pro app preview">
      <div className="preview-titlebar">
        <div className="window-lights"><i /><i /><i /></div>
        <span className="preview-app-title"><span className="preview-brand-mark"><Plane size={11} /></span> GROUND MANAGER PRO</span>
        <span className="preview-window-version">v1.4.1</span>
        <Menu size={14} className="preview-menu-icon" />
      </div>
      <div className="preview-statusbar">
        <span className="status-time"><Clock3 size={11} /> TIME <b>19:40Z</b></span>
        <Status label="SIMCONNECT" value="CONNECTED" ready />
        <Status label="COUATL" value="RUNNING" ready />
        <Status label="REMOTE" value="READY" ready />
        <Status label="GSX MENU" value="READY" ready />
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar" aria-label="Preview modules">
          <div className="sidebar-kicker">FLIGHT DECK</div>
          {appModules.map(({ number, label, icon: Icon }) => (
            <button
              type="button"
              className={`preview-nav-item ${activeModule === number ? "active" : ""}`}
              key={number}
              onClick={() => setActiveModule(number)}
              aria-current={activeModule === number ? "page" : undefined}
              aria-label={`${number} ${label}`}
            >
              <span className="preview-nav-number">{number}</span><Icon size={13} /><span className="preview-nav-label">{label}</span>
            </button>
          ))}
          <div className="preview-sidebar-footer"><span className="mini-avatar"><Headphones size={14} /></span><span>LOCAL COPILOT<small>ONLINE</small></span></div>
        </aside>
        <div className="preview-workspace">
          <div className="preview-page-heading">
            <span className="preview-module-icon"><ActiveIcon size={15} /></span>
            <div><div className="preview-page-title">{active.title}</div><div className="preview-page-subtitle">{active.subtitle}</div></div>
            <button className="preview-expand" type="button" aria-label="Preview options"><ArrowUpRight size={13} /></button>
          </div>
          <div className="preview-content">
            {activeModule === "02" ? (
              <CopilotPanel conversation={conversation} onCommand={runDemoCommand} />
            ) : (
              <ModulePanel module={active} />
            )}
          </div>
          <div className="preview-footnote"><span><Cloud size={11} /> 100% LOCAL SESSION</span><span><span className="tiny-live" /> SIMULATED UI PREVIEW</span></div>
        </div>
      </div>
    </div>
  );
}

function Status({ label, value, ready }: { label: string; value: string; ready?: boolean }) {
  return <span className="status-item"><span className="status-label">{label}</span><span className={`status-value ${ready ? "ready" : ""}`}><i />{value}</span></span>;
}

function CopilotPanel({
  conversation,
  onCommand,
}: {
  conversation: ConversationEntry[];
  onCommand: (command: (typeof serviceCommands)[number]) => void;
}) {
  return (
    <div className="copilot-panel">
      <div className="copilot-intro">
        <span className="copilot-orb"><Sparkles size={16} /></span>
        <span><strong>Ground Copilot</strong><small>Local voice & text assistant</small></span>
        <span className="copilot-online"><i /> ONLINE</span>
      </div>
      <div className="conversation">
        {conversation.map((entry, index) => (
          <div className={`chat-line ${entry.role}`} key={`${entry.role}-${index}`}>
            <span className="chat-avatar">{entry.role === "copilot" ? <Headphones size={11} /> : "YOU"}</span>
            <span>{entry.text}</span>
          </div>
        ))}
      </div>
      <div className="service-shortcuts-label">TRY A GROUND COMMAND <span>DEMO</span></div>
      <div className="service-shortcuts">
        {serviceCommands.map(({ label, icon: Icon, ...command }) => (
          <button type="button" className="service-shortcut" key={label} onClick={() => onCommand({ label, icon: Icon, ...command })}>
            <Icon size={12} />{label}<ChevronRight size={11} />
          </button>
        ))}
      </div>
      <div className="copilot-input">
        <span><Mic size={13} /> Click a service to simulate a request</span>
        <button type="button" aria-label="Demo input is not a live microphone" disabled><ArrowUpRight size={13} /></button>
      </div>
      <div className="copilot-demo-note"><Check size={11} /> Demo only · no simulator actions are sent</div>
    </div>
  );
}

function ModulePanel({ module }: { module: (typeof appModules)[number] }) {
  const stats = moduleStats[module.number] ?? [];
  return (
    <div className="module-panel">
      <div className="module-hero-card">
        <div className="module-card-orbit"><span><Plane size={17} /></span><i /></div>
        <div className="module-metric-label">{module.metric}</div>
        <strong className={module.number === "05" ? "ice-text" : ""}>{module.value}</strong>
        <span className="module-state"><i />{module.status}</span>
      </div>
      <div className="module-stats">
        {stats.map(([label, value, tone]) => (
          <div className="module-stat" key={label}><span>{label}</span><strong className={tone}>{value}</strong></div>
        ))}
      </div>
      <div className="module-detail-row">
        <span className="module-detail-icon">{module.number === "05" ? <Waves size={13} /> : <CheckCircle2 size={13} />}</span>
        <span><strong>{module.tile} overview</strong><small>Connected to your flight session</small></span>
        <span className="module-detail-ready">READY</span>
      </div>
      <div className="module-detail-row muted-detail">
        <span className="module-detail-icon"><Radio size={13} /></span>
        <span><strong>Local agent</strong><small>127.0.0.1:8383</small></span>
        <span className="module-detail-ready">ACTIVE</span>
      </div>
    </div>
  );
}
