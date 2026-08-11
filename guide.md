react native


Here's the full document:

# Fuel4Exam — React Native Implementation Prompt

## Brief

Build a React Native mobile app for **Fuel4Exam**, an AI-powered exam preparation platform. The app includes a home/dashboard screen, an AI chatbot screen, a study materials browser, and a subjects screen. Use static content throughout — no backend required.

---

## Design System

### Colors
```ts
export const colors = {
  bg: "#F4F4EF",         // warm off-white — app background
  ink: "#111118",        // primary text
  panel: "#111118",      // dark section backgrounds
  panelFg: "#F4F4EF",   // text on dark panels
  teal: "#00C9A7",       // primary accent
  tealDim: "#00A88B",    // pressed/hover teal
  muted: "#6B6B7B",      // secondary text, captions
  border: "#DDDDD8",     // hairline rules, card borders
  card: "#FFFFFF",       // card surfaces
  dark2: "#1A1A2A",      // dark card surface
  dark3: "#2A2A38",      // dark input / bar
}
```

### Typography
Use `expo-google-fonts` to load **Fraunces** (display/headings) and **Outfit** (body). Fall back to `serif` and `sans-serif` respectively.

```ts
export const fonts = {
  display: "Fraunces_400Regular",
  displayLight: "Fraunces_300Light",
  displaySemiBold: "Fraunces_600SemiBold",
  body: "Outfit_400Regular",
  bodyMedium: "Outfit_500Medium",
  bodySemiBold: "Outfit_600SemiBold",
  mono: "JetBrainsMono_400Regular", // for labels/tags
}
```

### Spacing scale
```ts
export const space = {
  xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48
}
```

### Border radius
```ts
export const radius = {
  sm: 8, md: 12, lg: 16, xl: 20, full: 999
}
```

---

## Static Content

### Subjects
```ts
export const SUBJECTS = [
  { code: "SAT",   label: "SAT / ACT",         count: "4,200+ questions", color: "#00C9A7" },
  { code: "USMLE", label: "USMLE Step 1–3",    count: "8,800+ questions", color: "#7C6EFA" },
  { code: "BAR",   label: "Bar Exam",           count: "3,600+ questions", color: "#F97316" },
  { code: "CPA",   label: "CPA Exam",           count: "5,100+ questions", color: "#EC4899" },
  { code: "GRE",   label: "GRE / GMAT",         count: "2,900+ questions", color: "#14B8A6" },
  { code: "AWS",   label: "AWS / Azure Certs",  count: "1,700+ questions", color: "#F59E0B" },
]
```

### Features
```ts
export const FEATURES = [
  {
    icon: "✦",
    title: "AI Chatbot Tutor",
    body: "Ask anything, anytime. Explains concepts, walks through worked examples, and adapts to gaps in your answers.",
  },
  {
    icon: "◈",
    title: "Curated Study Materials",
    body: "Condensed outlines, annotated practice sets, and high-yield summaries written by subject-matter experts.",
  },
  {
    icon: "⬡",
    title: "Adaptive Practice Engine",
    body: "Spaced repetition and item-response theory surface the questions most likely to move your score.",
  },
  {
    icon: "◎",
    title: "Performance Analytics",
    body: "Track accuracy, timing, and confidence across every topic. Identify blind spots before exam day.",
  },
]
```

### Study materials
```ts
export const MATERIALS = [
  { type: "PDF Guide",      title: "SAT Math — No-Calculator Strategies",       updated: "Aug 2026", count: "48 pages" },
  { type: "Flashcard Deck", title: "USMLE Step 1 Pharmacology High-Yield",      updated: "Jul 2026", count: "320 cards" },
  { type: "Video Series",   title: "GRE Verbal Reasoning Masterclass",           updated: "Jun 2026", count: "22 videos" },
  { type: "Practice Test",  title: "CPA FAR Full-Length Simulation",             updated: "Aug 2026", count: "4 tests" },
  { type: "Cheat Sheet",    title: "AWS SAA-C03 Services Reference",             updated: "Jul 2026", count: "12 pages" },
]
```

### Chat messages (seed data for chatbot screen)
```ts
export const CHAT_SEED = [
  {
    role: "user",
    text: "I keep getting confused between osmosis and diffusion. Can you explain the difference?",
  },
  {
    role: "ai",
    text: "Diffusion is the movement of any substance from high to low concentration. Osmosis is a specific type of diffusion: only water molecules, only across a semipermeable membrane. Think of osmosis as diffusion with a bouncer at the door — only water gets through.",
  },
  {
    role: "user",
    text: "So in a hypertonic solution, water moves out of the cell?",
  },
  {
    role: "ai",
    text: "Exactly right. In a hypertonic environment, solute concentration is higher outside the cell. Water exits — this is called crenation in red blood cells. Want a practice question to lock it in?",
  },
]
```

### Stats (hero bar)
```ts
export const STATS = [
  { value: "140k+",  label: "Students enrolled" },
  { value: "26,000+", label: "Practice questions" },
  { value: "94%",    label: "Pass rate" },
]
```

### Pricing plans
```ts
export const PLANS = [
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
    features: ["Unlimited AI questions", "All subjects", "Full materials library", "Advanced analytics", "Priority support"],
    cta: "Start 7-day trial",
    highlight: true,
  },
  {
    name: "Cohort",
    price: "$49",
    period: "per month",
    features: ["Everything in Scholar", "Up to 10 seats", "Instructor dashboard", "Custom question banks", "Dedicated support"],
    cta: "Contact sales",
    highlight: false,
  },
]
```

---

## Screen Architecture

Use **React Navigation** with a bottom tab navigator containing four tabs:

| Tab | Icon | Screen |
|-----|------|--------|
| Home | house | `HomeScreen` |
| Chat | message-circle | `ChatScreen` |
| Materials | book-open | `MaterialsScreen` |
| Profile | user | `ProfileScreen` |

---

## Screen Specs

### HomeScreen

**Layout** — `ScrollView`, `#F4F4EF` background.

**Header strip** — Full-width dark panel (`#111118`), padding 24px horizontal, 48px vertical top. Contains:
  - Logo row: teal `◈` glyph (mono font) + "Fuel4Exam" in Fraunces, white
- Tagline: `"Study smarter. Score higher."` — Fraunces Light, 28px, white, line height 1.1
- Subtext: 14px Outfit, `#9CA3AF`
- CTA button: `"Start studying free"` — teal background, ink text, pill shape, 16px font, full width, margin top 20

**Stats row** — Horizontal `View` with three `StatTile` components separated by thin vertical dividers. Each tile: large number in Fraunces 24px ink, label in 12px Outfit muted. Background white, padding 16, border bottom `#DDDDD8`.

**Session card** (if a subject is selected) — Rounded card (`#111118`), 20px radius, margin 16px, padding 20px. Shows subject name, topic, three progress bars (questions answered, accuracy, streak) with teal fill, and a "Continue session" teal button.

**Section: Features** — `"How it works"` label (teal mono, 10px caps) above a 2-column grid of `FeatureCard`. Each card: white background, 16px radius, 1px `#DDDDD8` border, icon (24px teal), title (14px semibold), body (13px muted), 16px padding.

**Section: Subjects** — `"Every major exam"` heading. Scrollable horizontal `FlatList` of `SubjectChip` components. Each chip: 140×90 card, white background, bordered. Tapping sets the active subject and updates the session card. Active chip uses `#111118` background and white text.

---

### ChatScreen

**Layout** — `KeyboardAvoidingView` wrapping a `FlatList` of messages + a sticky input bar at the bottom.

**Header** — Dark bar (`#111118`) with a green pulse dot + `"Fuel4Exam — Biology · USMLE Step 1"` in mono 12px, white.

**Message bubbles:**
- User: right-aligned, teal background (`#00C9A7`), ink text, `border-bottom-right-radius: 4`
- AI: left-aligned, `#2A2A38` background, `#D1D5DB` text, `border-bottom-left-radius: 4`. Preceded by a small round teal avatar showing `◈`.

**Input bar** — `#1A1A2A` background, horizontal padding 16. Contains a `TextInput` (dark bg `#2A2A38`, white text, placeholder `"Ask anything about the exam…"`) and a send button (teal, 34×34, rounded, right arrow icon).

Seed the `FlatList` with `CHAT_SEED`. New messages typed and sent append to the list and auto-scroll to bottom.

---

### MaterialsScreen

**Layout** — `ScrollView`, `#F4F4EF` background.

**Page header** — `"Study Materials"` in Fraunces 28px + `"High-yield resources. Expert-reviewed."` in 14px muted.

**Filter row** — Horizontal scroll of pill buttons for material types: All, PDF Guide, Flashcard Deck, Video Series, Practice Test, Cheat Sheet. Active pill: `#111118` background, white text. Inactive: white, bordered.

**Material rows** — One `MaterialRow` per item in `MATERIALS`, filtered by active type. Each row: white card, 16px radius, 1px border, 16px padding. Left: emoji icon in a 40×40 `#F4F4EF` rounded square. Center: type label (10px teal mono caps), title (14px semibold), updated + count (12px muted). Right: `→` chevron in muted, turns teal on press.

---

### ProfileScreen

**Layout** — `ScrollView`, `#F4F4EF` background.

**Profile header** — Large dark panel. Avatar placeholder (56×56 circle, teal background, white initials "JS"). Name "Jordan Silva", role "USMLE Step 1 Candidate". Streak badge: `"🔥 9-day streak"` in a small teal pill.

**Stats grid** — 2×2 grid of stat tiles: Total questions (1,284), Accuracy (88%), Study hours (47), Topics mastered (23). Each tile: white card, Fraunces number, Outfit label.

**Pricing section** — `"Upgrade your plan"` heading. Vertical list of `PricingCard` from `PLANS`. Highlight the Scholar card with a teal background.

**Settings list** — Simple list rows (chevron right): Notifications, Study reminders, Download materials offline, Privacy policy, Sign out.

---

## Component Inventory

| Component | Props | Notes |
|-----------|-------|-------|
| `StatTile` | `value`, `label` | Used in home stats row |
| `FeatureCard` | `icon`, `title`, `body` | 2-col grid in home |
| `SubjectChip` | `code`, `label`, `count`, `color`, `active`, `onPress` | Horizontal scroll |
| `MessageBubble` | `role`, `text` | Chat list item |
| `MaterialRow` | `type`, `title`, `updated`, `count`, `onPress` | Materials list item |
| `PricingCard` | `name`, `price`, `period`, `features`, `cta`, `highlight` | Profile pricing |
| `SectionLabel` | `text` | Teal mono 10px uppercase tag |
| `ProgressBar` | `value` (0–1), `color?` | Thin bar with teal fill |
| `PillButton` | `label`, `active`, `onPress` | Filter chips |

---

## Styling rules

- Use `StyleSheet.create` throughout — no inline style objects except for dynamic values (e.g. progress bar width from `value * totalWidth`).
- Use `Platform.OS === "ios"` to set `KeyboardAvoidingView` behavior to `"padding"` on iOS and `"height"` on Android.
- Wrap all screens in a `SafeAreaView` from `react-native-safe-area-context`.
- Use `Pressable` instead of `TouchableOpacity` for all tap targets. Apply a subtle `opacity: 0.8` on `pressed` state.
- No shadow on Android — use `elevation` instead.
- All `FlatList` and `ScrollView` components should have `showsVerticalScrollIndicator={false}` and `showsHorizontalScrollIndicator={false}`.

---

## Dependencies

```json
{
  "react-navigation/native": "^6",
  "react-navigation/bottom-tabs": "^6",
  "react-native-screens": "latest",
  "react-native-safe-area-context": "latest",
  "expo-google-fonts/fraunces": "latest",
  "expo-google-fonts/outfit": "latest",
  "expo-google-fonts/jetbrains-mono": "latest",
  "@expo/vector-icons": "latest"
}
```

---

## Acceptance criteria

- [ ] All four tabs navigate correctly with no blank screens
- [ ] Chat input appends new messages and scrolls to bottom
- [ ] Subject chips update the active state and session card on HomeScreen
- [ ] Material filter pills correctly filter the list
- [ ] Fonts load via `useFonts` before the app renders (use `SplashScreen.preventAutoHideAsync`)
- [ ] No TypeScript errors (`strict: true`)
- [ ] Runs on both iOS simulator and Android emulator without warnings