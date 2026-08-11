import { useState } from "react"

const NAV_LINKS = ["Features", "Subjects", "Materials", "Pricing"]

const SUBJECTS = [
  { code: "SAT", label: "SAT / ACT", count: "4,200+ questions", color: "#00C9A7" },
  { code: "USMLE", label: "USMLE Step 1–3", count: "8,800+ questions", color: "#7C6EFA" },
  { code: "BAR", label: "Bar Exam", count: "3,600+ questions", color: "#F97316" },
  { code: "CPA", label: "CPA Exam", count: "5,100+ questions", color: "#EC4899" },
  { code: "GRE", label: "GRE / GMAT", count: "2,900+ questions", color: "#14B8A6" },
  { code: "AWS", label: "AWS / Azure Certs", count: "1,700+ questions", color: "#F59E0B" },
]

const FEATURES = [
  {
    icon: "✦",
    title: "AI Chatbot Tutor",
    body:
      "Ask anything, anytime. Our AI explains concepts, walks through worked examples, and adapts to the gaps it detects in your answers — no question too basic or too advanced.",
  },
  {
    icon: "◈",
    title: "Curated Study Materials",
    body:
      "Every subject comes with condensed outlines, annotated practice sets, and high-yield summaries written by subject-matter experts and refined by thousands of student sessions.",
  },
  {
    icon: "⬡",
    title: "Adaptive Practice Engine",
    body:
      "Spaced repetition and item-response theory combine to surface the questions most likely to move your score. Time spent studying maps directly to percentile gain.",
  },
  {
    icon: "◎",
    title: "Performance Analytics",
    body:
      "Track accuracy, timing, and confidence across every topic. Identify blind spots before they cost you on exam day with detailed breakdowns down to the sub-category level.",
  },
]

const MATERIALS = [
  { type: "PDF Guide", title: "SAT Math — No-Calculator Strategies", updated: "Updated Aug 2026", pages: 48 },
  { type: "Flashcard Deck", title: "USMLE Step 1 Pharmacology High-Yield", updated: "Updated Jul 2026", pages: 320 },
  { type: "Video Series", title: "GRE Verbal Reasoning Masterclass", updated: "Updated Jun 2026", pages: 22 },
  { type: "Practice Test", title: "CPA FAR Full-Length Simulation", updated: "Updated Aug 2026", pages: 4 },
  { type: "Cheat Sheet", title: "AWS SAA-C03 Services Reference", updated: "Updated Jul 2026", pages: 12 },
]

const CHAT_MESSAGES = [
  {
    role: "user",
    text: "I keep getting confused between osmosis and diffusion. Can you explain the difference?",
  },
  {
    role: "ai",
    text: "Great question — they're easy to conflate. Diffusion is the movement of any substance from high to low concentration. Osmosis is a specific type of diffusion: only water molecules, only across a semipermeable membrane. Think of osmosis as diffusion with a bouncer at the door — only water gets through.",
  },
  {
    role: "user",
    text: "So in a hypertonic solution, water moves out of the cell?",
  },
  {
    role: "ai",
    text: "Exactly right. In a hypertonic environment, solute concentration is higher outside the cell. Water follows its gradient and exits the cell — this is called crenation in red blood cells. You're tracking this perfectly. Want a practice question to lock it in?",
  },
]

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: ["5 AI questions / day", "1 subject access", "Community forums", "Basic analytics"],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Scholar",
    price: "$19",
    period: "per month",
    features: [
      "Unlimited AI questions",
      "All subjects",
      "Full materials library",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start 7-day trial",
    highlight: true,
  },
  {
    name: "Cohort",
    price: "$49",
    period: "per month",
    features: [
      "Everything in Scholar",
      "Up to 10 seats",
      "Instructor dashboard",
      "Custom question banks",
      "Dedicated support",
    ],
    cta: "Contact sales",
    highlight: false,
  },
]

export default function App() {
  const [chatInput, setChatInput] = useState("")
  const [activeSubject, setActiveSubject] = useState("SAT")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: "var(--font-body)" }} className="min-h-screen bg-[#F4F4EF] text-[#111118]">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#DDDDD8] bg-[#F4F4EF]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span
              className="text-[#00C9A7] text-xl font-bold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ◈
            </span>
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Fuel4Exam
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B6B7B]">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:text-[#111118] transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm font-medium text-[#6B6B7B] hover:text-[#111118] transition-colors">
              Sign in
            </button>
            <button className="bg-[#111118] text-[#F4F4EF] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2A2A38] transition-colors">
              Get started
            </button>
            <button
              className="md:hidden p-1 text-[#6B6B7B]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                {mobileMenuOpen ? (
                  <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
                ) : (
                  <>
                    <rect y="4" width="20" height="1.5" rx="1" />
                    <rect y="9.25" width="20" height="1.5" rx="1" />
                    <rect y="14.5" width="20" height="1.5" rx="1" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#DDDDD8] bg-[#F4F4EF] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[#6B6B7B] hover:text-[#111118]">
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-end">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-6 h-px bg-[#00C9A7]" />
            AI-Powered Exam Prep
          </div>

          <h1
            className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Study smarter.
            <br />
            <em className="not-italic text-[#00C9A7]">Score higher.</em>
            <br />
            Pass with confidence.
          </h1>

            <p className="text-lg text-[#6B6B7B] leading-relaxed mb-10 max-w-xl">
            Fuel4AI combines an adaptive AI tutor with expert-curated study materials across every major professional
            and academic exam. Fuel your preparation, Fuel your future. Personalized, precise, and available at 3 a.m. when you need it most.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#00C9A7] hover:bg-[#00A88B] text-[#111118] font-semibold px-8 py-3.5 rounded-full transition-colors text-sm">
              Start studying free
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-[#6B6B7B] hover:text-[#111118] transition-colors">
              <span className="w-9 h-9 rounded-full border border-[#DDDDD8] flex items-center justify-center text-xs">
                ▶
              </span>
              Watch 2-min demo
            </button>
          </div>

          <div className="mt-12 flex gap-8 text-sm text-[#6B6B7B]">
            <div>
              <div className="text-2xl font-semibold text-[#111118]" style={{ fontFamily: "var(--font-display)" }}>
                140k+
              </div>
              Students enrolled
            </div>
            <div className="w-px bg-[#DDDDD8]" />
            <div>
              <div className="text-2xl font-semibold text-[#111118]" style={{ fontFamily: "var(--font-display)" }}>
                26,000+
              </div>
              Practice questions
            </div>
            <div className="w-px bg-[#DDDDD8]" />
            <div>
              <div className="text-2xl font-semibold text-[#111118]" style={{ fontFamily: "var(--font-display)" }}>
                94%
              </div>
              Pass rate
            </div>
          </div>
        </div>

        {/* Hero card */}
        <div className="hidden md:block">
          <div className="w-72 bg-[#111118] rounded-3xl p-6 text-[#F4F4EF] shadow-2xl">
            <div
              className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Today's session
            </div>
            <div className="text-xl font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              SAT Math
            </div>
            <div className="text-sm text-[#6B6B7B] mb-6">Linear equations & systems</div>

            <div className="space-y-3 mb-6">
              {[
                { label: "Questions answered", val: "42", pct: 70 },
                { label: "Accuracy", val: "88%", pct: 88 },
                { label: "Streak", val: "9 days", pct: 60 },
              ].map(({ label, val, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1 text-[#9CA3AF]">
                    <span>{label}</span>
                    <span className="text-[#F4F4EF]">{val}</span>
                  </div>
                  <div className="h-1.5 bg-[#2A2A38] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00C9A7] rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#00C9A7] hover:bg-[#00A88B] text-[#111118] font-semibold text-sm py-3 rounded-xl transition-colors">
              Continue session
            </button>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section id="features" className="border-t border-[#DDDDD8] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div
                className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                How it works
              </div>
              <h2
                className="text-4xl font-light leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything you need to pass — and nothing you don't.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 border border-[#DDDDD8] hover:border-[#00C9A7]/40 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="text-2xl text-[#00C9A7] mb-4 group-hover:scale-110 transition-transform inline-block">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-[#111118] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#6B6B7B] leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Chatbot Demo ────────────────────────────────────── */}
      <section className="bg-[#111118] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              AI Chatbot
            </div>
            <h2
              className="text-4xl font-light leading-tight text-[#F4F4EF] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your tutor is always available. No scheduling required.
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              Unlike static flashcards or video lectures, Fuel4AI understands your specific confusion and responds
              directly. Ask follow-up questions, request worked examples, or simply say "I don't understand" — and
              get a real explanation, not a canned response.
            </p>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              {[
                "Concept explanations with analogies",
                "Worked problems step-by-step",
                "Common mistake identification",
                "Mnemonics and memory techniques",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Chat window */}
          <div className="bg-[#1A1A2A] rounded-3xl border border-[#2A2A38] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#2A2A38]">
              <div className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
              <span
                className="text-xs text-[#6B6B7B] font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Fuel4AI — Biology · USMLE Step 1
              </span>
            </div>

            <div className="p-5 space-y-4 max-h-72 overflow-y-auto">
              {CHAT_MESSAGES.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-[#00C9A7]/20 border border-[#00C9A7]/30 flex items-center justify-center text-[10px] text-[#00C9A7] mr-2 mt-1 flex-shrink-0">
                      ◈
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#00C9A7] text-[#111118] font-medium rounded-br-sm"
                        : "bg-[#2A2A38] text-[#D1D5DB] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-[#2A2A38]">
              <div className="flex items-center gap-3 bg-[#2A2A38] rounded-xl px-4 py-3">
                <input
                  type="text"
                  placeholder="Ask anything about the exam…"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#F4F4EF] placeholder-[#4B5563] outline-none"
                />
                <button
                  className="w-8 h-8 rounded-lg bg-[#00C9A7] hover:bg-[#00A88B] flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Send"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="#111118" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subjects ────────────────────────────────────────── */}
      <section id="subjects" className="py-24 border-b border-[#DDDDD8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div
                className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Subjects
              </div>
              <h2
                className="text-4xl font-light leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every major exam, fully covered.
              </h2>
            </div>
            <p className="text-[#6B6B7B] text-sm max-w-xs leading-relaxed">
              New question banks added monthly. Content reviewed by licensed professionals in each domain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SUBJECTS.map((s) => (
              <button
                key={s.code}
                onClick={() => setActiveSubject(s.code)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 ${
                  activeSubject === s.code
                    ? "bg-[#111118] border-[#111118] text-[#F4F4EF]"
                    : "bg-white border-[#DDDDD8] hover:border-[#AAAAAA] text-[#111118]"
                }`}
              >
                <div
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: activeSubject === s.code ? s.color : s.color,
                  }}
                >
                  {s.code}
                </div>
                <div className="font-semibold text-sm mb-1">{s.label}</div>
                <div
                  className={`text-xs ${activeSubject === s.code ? "text-[#9CA3AF]" : "text-[#6B6B7B]"}`}
                >
                  {s.count}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials ───────────────────────────────────────── */}
      <section id="materials" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="md:sticky md:top-24">
              <div
                className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Study materials
              </div>
              <h2
                className="text-4xl font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                High-yield resources. Expert-reviewed.
              </h2>
              <p className="text-[#6B6B7B] text-sm leading-relaxed mb-8">
                PDFs, flashcard decks, video series, and full-length simulations — all updated to match the latest
                exam blueprints and available the moment you enroll.
              </p>
              <button className="bg-[#111118] text-[#F4F4EF] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2A2A38] transition-colors">
                Browse all materials
              </button>
            </div>

            <div className="space-y-3">
              {MATERIALS.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white border border-[#DDDDD8] rounded-2xl px-6 py-5 hover:border-[#00C9A7]/40 hover:shadow-sm transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-[#F4F4EF] flex items-center justify-center text-lg flex-shrink-0"
                    >
                      {m.type === "PDF Guide"
                        ? "📄"
                        : m.type === "Flashcard Deck"
                        ? "🃏"
                        : m.type === "Video Series"
                        ? "▶"
                        : m.type === "Cheat Sheet"
                        ? "📋"
                        : "📝"}
                    </div>
                    <div>
                      <div
                        className="text-[10px] font-medium tracking-widest uppercase text-[#00C9A7] mb-0.5"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {m.type}
                      </div>
                      <div className="font-medium text-sm text-[#111118]">{m.title}</div>
                      <div className="text-xs text-[#6B6B7B] mt-0.5">
                        {m.updated} · {m.pages} {m.type === "Video Series" ? "videos" : m.type === "Practice Test" ? "full tests" : "pages"}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#DDDDD8] group-hover:text-[#00C9A7] transition-colors text-lg">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#111118] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium tracking-widest uppercase text-[#00C9A7] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Pricing
            </div>
            <h2
              className="text-4xl font-light leading-tight text-[#F4F4EF]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Simple pricing. No surprises.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#00C9A7] text-[#111118]"
                    : "bg-[#1A1A2A] border border-[#2A2A38] text-[#F4F4EF]"
                }`}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: plan.highlight ? "#111118" : "#00C9A7",
                  }}
                >
                  {plan.name}
                </div>
                <div className="mb-8">
                  <span
                    className="text-5xl font-light"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.highlight ? "text-[#111118]/70" : "text-[#6B6B7B]"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 text-sm mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
                          plan.highlight ? "bg-[#111118]/20" : "bg-[#00C9A7]/20"
                        }`}
                        style={{ color: plan.highlight ? "#111118" : "#00C9A7" }}
                      >
                        ✓
                      </span>
                      <span className={plan.highlight ? "text-[#111118]" : "text-[#9CA3AF]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3.5 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[#111118] text-[#F4F4EF] hover:bg-[#2A2A38]"
                      : "bg-[#2A2A38] text-[#F4F4EF] hover:bg-[#3A3A48] border border-[#3A3A48]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────── */}
      <section className="py-24 border-t border-[#DDDDD8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your exam date is set.
              <br />
              <em className="not-italic text-[#00C9A7]">Your score is not.</em>
            </h2>
              <p className="text-[#6B6B7B] leading-relaxed max-w-lg">
              Join 140,000 students who used Fuel4Exam to close the gap between where they are and where they need to
              be. Free to start, no credit card required.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-[#00C9A7] hover:bg-[#00A88B] text-[#111118] font-semibold px-10 py-4 rounded-full transition-colors text-sm whitespace-nowrap">
              Start studying free
            </button>
            <button className="text-sm text-center text-[#6B6B7B] hover:text-[#111118] transition-colors">
              View all subjects →
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-[#DDDDD8] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#6B6B7B]">
          <div className="flex items-center gap-2">
            <span className="text-[#00C9A7]" style={{ fontFamily: "var(--font-mono)" }}>◈</span>
            <span className="font-semibold text-[#111118]" style={{ fontFamily: "var(--font-display)" }}>Fuel4Exam</span>
            <span className="mx-3">·</span>
            <span>© 2026 Fuel4Exam Inc.</span>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-[#111118] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
