import { useState } from "react";

export default function RoadmapDashboard() {
  const [active, setActive] = useState(0);

  const phases = [
    {
      title: "Foundation",
      warning:
        "Nobody on this team has built a SaaS backend before. This phase is about learning while building, not shipping perfect code.",
      milestone:
        "End of Phase 1: Backend API live. Frontend reads real data. 3 warm prospects identified.",
      blocks: [
        {
          title: "Backend (monty)",
          sub: "Learn just enough to ship",
          rows: [
            ["Week 1", "Express server running locally. One POST route."],
            ["Week 2", "PostgreSQL via Supabase. Businesses table."],
            ["Week 3", "Auth using Clerk or Supabase Auth."],
            ["Week 4", "Leads CRUD endpoints."],
          ],
        },
        {
          title: "Automation engineer (ty)",
          sub: "Learn event system",
          rows: [
            ["Week 1–2", "Node event emitter → lead_created event"],
            ["Week 3–4", "BullMQ + Redis delayed jobs"],
          ],
        },
        {
          title: "Frontend + integrations (cam)",
          sub: "UI shell",
          rows: [
            ["Week 1–2", "React + Tailwind auth pages"],
            ["Week 3–4", "Leads list + create lead flow"],
          ],
        },
        {
          title: "Growth owner (pat)",
          sub: "Find first prospects",
          rows: [
            ["Week 1", "Research 20 local service businesses"],
            ["Week 2–4", "3 warm prospects identified"],
          ],
        },
      ],
    },
    {
      title: "Core Product",
      milestone:
        "End of Phase 2: Full CRM working. SMS integrated. 1 real business using it manually.",
      blocks: [
        {
          title: "Backend (monty)",
          sub: "Multi-tenant CRM API",
          rows: [
            ["Week 5–6", "Add business_id isolation"],
            ["Week 7", "Full leads API (notes, stages, pagination)"],
            ["Week 8", "Validation + logging"],
          ],
        },
        {
          title: "Automation engineer (ty)",
          sub: "IF/THEN engine",
          rows: [
            ["Week 5–6", "lead_created triggers event"],
            ["Week 7–8", "delayed follow-up automation"],
          ],
        },
        {
          title: "Frontend + integrations (cam)",
          sub: "CRM dashboard",
          rows: [
            ["Week 5–6", "Kanban pipeline UI"],
            ["Week 7–8", "Twilio SMS integration"],
          ],
        },
        {
          title: "Growth owner (pat)",
          sub: "Manual onboarding",
          rows: [["Week 5–8", "Onboard 1 real business"]],
        },
      ],
    },
    {
      title: "Ship",
      milestone:
        "End of Day 90: 3 paying customers. Automated DM replies working in production.",
      blocks: [
        {
          title: "Backend (monty)",
          sub: "Stability + roles",
          rows: [
            ["Week 9–10", "RBAC + bug fixes"],
            ["Week 11–12", "Onboard 2 more businesses"],
          ],
        },
        {
          title: "Automation engineer (ty)",
          sub: "Workflow engine",
          rows: [
            ["Week 9–10", "trigger → condition → action chains"],
            ["Week 11–12", "full automation templates"],
          ],
        },
        {
          title: "Frontend + integrations (cam)",
          sub: "Automation builder",
          rows: [
            ["Week 9–10", "rule builder UI"],
            ["Week 11–12", "settings + polish"],
          ],
        },
        {
          title: "Growth owner (pat)",
          sub: "Revenue",
          rows: [["Week 9–12", "3 paying customers ($50/mo+)"]],
        },
      ],
    },
  ];

  const phase = phases[active];
  const tabLabels = ["Days 1-30", "Days 31-60", "Days 61-90"];
  const chipTone = (title) => {
    if (title.includes("Backend")) return "chip-backend";
    if (title.includes("Automation")) return "chip-automation";
    if (title.includes("Frontend")) return "chip-frontend";
    return "chip-growth";
  };

  return (
    <div className="roadmap-page">
      <div className="roadmap-shell">
        <div className="tabs-row">
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`phase-tab ${active === i ? "phase-tab-active" : ""}`}
            >
              Phase {i + 1} - {tabLabels[i]}
            </button>
          ))}
        </div>

        {phase.warning && <div className="warning-banner">{`△ ${phase.warning}`}</div>}
        <p className="phase-kicker">{phase.title}</p>

        {phase.blocks.map((block, i) => (
          <div key={i} className="role-card">
            <h2 className="role-title">{block.title}</h2>
            <p className="role-subtitle">{block.sub}</p>
            {block.rows.map((r, idx) => (
              <div key={idx} className="row-item">
                <span className={`week-chip ${chipTone(block.title)}`}>{r[0]}</span>
                <span className="row-copy">{r[1]}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="milestone-pill">{phase.milestone}</div>
      </div>
    </div>
  );
}