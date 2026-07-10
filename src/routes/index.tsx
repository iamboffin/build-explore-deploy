import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Cpu,
  Zap,
  Radio,
  Ruler,
  Rocket,
  Accessibility,
} from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9z" />
  </svg>
);
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11 11 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharani Barathi C D — Power Electronics & Avionics Engineer" },
      {
        name: "description",
        content:
          "Selected work of Dharani Barathi C D — 2 Indian patents in high-gain DC-DC converters, an IEEE paper on gesture-controlled mobility, rocket avionics, and a new ToF measurement instrument.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

const PROJECTS = [
  {
    id: "converters",
    tag: "Power Electronics · Research",
    year: "2025 – 2026",
    title: "High-Gain DC-DC Converters",
    subtitle: "Two topologies, two Indian patents.",
    icon: Zap,
    blurb:
      "Under Dr. Prabhakar M we picked research over a written assignment. Skimmed the literature around DC microgrid converters, drafted five novel topologies, and carried two forward — full design, magnetics, PCB, hardware validation.",
    specs: [
      ["Topology A", "Cascaded L-C-D, single switch"],
      ["Gain A", "30 V → 400 V @ D ≈ 0.52"],
      ["Topology B", "Synchronized dual-switch, cubic gain"],
      ["Gain B", "24 V → 400 V @ D ≈ 0.61, 93% eff."],
      ["Stack", "Simulink · PSIM · Altium · hand-wound ETD44/54/59"],
    ],
    links: [
      {
        label: "Patent 1 · 202641032862",
        note: "Cascaded energy-transfer path",
      },
      {
        label: "Patent 2 · 202641037148",
        note: "Synchronized dual-switch",
      },
    ],
    footer:
      "With Chada Sai Sravan, Balaji S, under Dr. M. Prabhakar. Two-year arc from research-gap hunt to bench-validated hardware.",
  },
  {
    id: "lotus",
    tag: "Instrumentation · Invention",
    year: "2025",
    title: "LOTUS",
    subtitle: "A new class of low-cost dimensional measurement device.",
    icon: Ruler,
    blurb:
      "Dual VL53L0X time-of-flight sensors on a servo-driven rotating baseline, aligned by a 650 nm laser. Three geometric cases resolved via Law of Cosines depending on gear angle. The patent's novelty sits in a slip-ring-free concentric-ring power/signal path — the ToF triangulation is the first application on top.",
    specs: [
      ["Reliable envelope", "20 – 40 cm  ·  ± 40°"],
      ["Accuracy (MAE)", "≈ 0.79 cm in envelope"],
      ["BOM", "< ₹1,000 vs. ₹3k – ₹28k commercial"],
      ["TRL", "4 · Patent filed via Khurana & Khurana"],
    ],
    links: [
      { label: "IEEE draft — written", note: "not yet submitted" },
      { label: "Indian patent — under examination", note: "" },
    ],
    footer:
      "First author on the paper draft. Co-inventors: Balaji S, Chada Sai Sravan, Haseeb Ahsan N and two faculty.",
  },
  {
    id: "ignition",
    tag: "Rocket Avionics · Team Ignition",
    year: "2024 – 2026",
    title: "Rocket EPS + Flight Computer",
    subtitle: "First full-SMD boards. Three PCBs. Team of two.",
    icon: Rocket,
    blurb:
      "Sai and I designed the EPS and FC together — three boards total. Sai owned the avionics FC PCB; I owned the payload's 8.5 × 8.5 cm combined EPS + FC board, drawn in Altium in a single all-nighter. First time on Altium, first time on SMD.",
    specs: [
      ["Rails", "3.3 V (AMS1117) · 5 V (TPS54528) · 7.2 V (XL4005)"],
      ["Packs", "3S Li-ion (avionics) · 2S Li-ion (payload)"],
      ["Payload PCB", "8.5 × 8.5 cm, 2-layer, mixed EPS + FC"],
      ["Debug arc", "Datasheet misread on 7.2 V rail → traced in 2 days"],
    ],
    links: [
      { label: "Team Ignition · VIT Chennai", note: "Payload + Avionics sub-teams" },
    ],
    footer:
      "Field-swappable buck module bolted over the dead rail. Original NRF/ESP32 co-location bug resolved with a proper power module and decoupling.",
  },
  {
    id: "wheelchair",
    tag: "Embedded · IEEE Published",
    year: "2024",
    title: "Gesture-Controlled Wheelchair",
    subtitle: "ESP-NOW, MPU6050, and a Kalman filter that behaves.",
    icon: Accessibility,
    blurb:
      "Curiosity project on ESP-NOW turned into a published paper. Two ESP32s, one MPU6050 on the user (hand tilt or head pose), L298N to the motors, HC-SR04 for obstacle backoff. Kalman filter to keep the IMU honest.",
    specs: [
      ["Response", "50 – 100 ms end-to-end"],
      ["BOM", "< $40 vs. $200+ camera-based alternatives"],
      ["Modes", "Hand-tilt · head pitch/roll/yaw"],
    ],
    links: [
      {
        label: "IEEE ICICNIS 2024 · DOI 10.1109/ICICNIS64247.2024.10823349",
        note: "First author (updated post-publication)",
      },
    ],
    footer:
      "With Jayasuriya S, Balaji S, under Prof. Sriramalakshmi P.",
  },
  {
    id: "pocketalt",
    tag: "Embedded System Design",
    year: "2026",
    title: "Pocket Alt",
    subtitle: "A pocket, toss-and-play altimeter for model rocketry.",
    icon: Cpu,
    blurb:
      "STM32F401 + BMP280 + SSD1306, with on-chip Flash logging and a single-button 5-state FSM (calibrate → track → apogee → save → clear). Benchmarked against StratoLoggerCF, AltimeterTwo and Raven4 — none of which ship to India.",
    specs: [
      ["Sample rate", "10 Hz"],
      ["Apogee latency", "< 100 ms"],
      ["Accuracy (MAE)", "0.176 m across 5-floor elevator test"],
      ["Battery life", "~ 5.5 hr"],
      ["BOM", "< ₹800"],
    ],
    links: [{ label: "IEEE draft — written", note: "not yet submitted" }],
    footer: "With Chada Sai Sravan and Aryaman Agrawal.",
  },
] as const;

const SKILLS = [
  ["Power Electronics", "DC-DC boost & high-gain topologies · volt-second analysis · magnetic design (ETD44/54/59) · 50 kHz switching · high-voltage layout · thermal debugging"],
  ["Simulation", "MATLAB / Simulink · PSIM"],
  ["PCB & Hardware", "Altium Designer · EasyEDA · KiCad · SMD rework · Altium library authoring"],
  ["Instruments", "MDO / DSO · differential & current probes · multimeter"],
  ["Microcontrollers", "STM32 · ESP32 · RP2040 (PWM · ADC · UART · SPI · I²C)"],
  ["Protocols", "ESP-NOW · NRF24L01 · I²C sensor stacks"],
];

/* ---------- Component ---------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <ProjectsSection />
      <Experience />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono-tech text-xs">
          <span className="inline-block h-2 w-2 rounded-full bg-copper shadow-[0_0_12px_var(--copper-glow)]" />
          <span className="tracking-widest uppercase">DBCD / portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <motion.div
        style={{ y }}
        aria-hidden
        className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,var(--copper),transparent_60%)]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-32 md:pb-40">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="spec-label"
        >
          Chennai · India — Electrical & Electronics Engineering, VIT Chennai (2023 – 2027)
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display mt-6 text-5xl leading-[1.02] md:text-7xl lg:text-8xl"
        >
          Dharani Barathi
          <span className="block text-muted-foreground">C&nbsp;D.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          I design <span className="text-foreground">power electronics</span>, <span className="text-foreground">rocket avionics</span>, and the occasional <span className="text-foreground">new class of measurement instrument</span>. Two Indian patents, one IEEE paper, and a stack of PCBs that mostly work on the first power-up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-copper)] hover:brightness-110 transition"
          >
            Selected work
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface transition"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 md:max-w-3xl"
        >
          {[
            ["02", "Indian patents"],
            ["01", "IEEE publication"],
            ["1.5 yr", "Rocket avionics"],
            ["400 V", "Peak converter output"],
          ].map(([k, v]) => (
            <div key={v} className="border-t border-border pt-4">
              <dt className="font-display text-3xl md:text-4xl copper-text">{k}</dt>
              <dd className="mt-1 spec-label">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="spec-label">§ 01 — About</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">
            Curiosity first, datasheets second.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a fourth-year EEE student at VIT Chennai. Most of my work starts the same way: a subject
            gets interesting, a professor mentions a research gap, or a friend and I get curious about a
            protocol — and it turns into a paper, a patent, or a board on the bench.
          </p>
          <p>
            Along the way I've hand-wound ETD-core inductors, spent a week hunting a rail failure caused
            by a badly labelled datasheet pin, laid out my first SMD PCB in one all-nighter, and shipped
            firmware for a wheelchair that a person can steer with a nod.
          </p>
          <p>
            I like problems where the electrons, the geometry, and the story all have to line up.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-8 mb-14">
          <div>
            <p className="spec-label">§ 02 — Selected work</p>
            <h2 className="font-display text-3xl md:text-5xl mt-3 max-w-2xl">
              Five projects. Two patents. One that shouldn't exist yet.
            </h2>
          </div>
          <span className="hidden md:block font-mono-tech text-xs text-muted-foreground">
            2024 — 2026
          </span>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 hover:border-border-strong transition-all hover:bg-surface"
      style={{ boxShadow: "var(--shadow-panel)" }}
    >
      <div className="grid md:grid-cols-12 gap-6 p-6 md:p-10">
        {/* Left rail */}
        <div className="md:col-span-4 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-copper/10 text-copper ring-1 ring-copper/30">
                <Icon className="h-5 w-5" />
              </span>
              <span className="spec-label">{project.tag}</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl mt-6 leading-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-muted-foreground italic">{project.subtitle}</p>
          </div>
          <div className="font-mono-tech text-xs text-muted-foreground flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Right content */}
        <div className="md:col-span-8 md:border-l md:border-border md:pl-10">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            {project.blurb}
          </p>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {project.specs.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5 border-t border-border pt-2">
                <dt className="spec-label">{k}</dt>
                <dd className="text-sm text-foreground/90">{v}</dd>
              </div>
            ))}
          </dl>

          {project.links.length > 0 && (
            <ul className="mt-6 space-y-2">
              {project.links.map((l) => (
                <li key={l.label} className="flex items-baseline gap-3 text-sm">
                  <span className="text-copper">◆</span>
                  <span className="font-mono-tech">{l.label}</span>
                  {l.note && <span className="text-muted-foreground">— {l.note}</span>}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">{project.footer}</p>
        </div>
      </div>
    </motion.article>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="spec-label">§ 03 — Experience</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Where the ideas got tested.</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          {[
            {
              role: "Avionics Engineer",
              org: "Team Ignition — VIT Chennai (Student Rocketry Team)",
              when: "Oct 2024 – Apr 2026",
              icon: Rocket,
              points: [
                "Payload & avionics sub-teams; owned the payload's combined EPS + FC PCB (8.5 × 8.5 cm) end-to-end.",
                "Co-designed the avionics EPS with Sai; three PCBs total across the two stacks.",
                "First team-level move to full-SMD in Altium; authored components, laid out boards, hand-soldered and bench-debugged.",
              ],
            },
            {
              role: "Intern — Power Systems",
              org: "Nuclear Desalination Demonstration Plant, BARC · Kalpakkam",
              when: "May 2025 – Jun 2025",
              icon: Zap,
              points: [
                "Studied substation SLDs, industrial motor load distribution, cable sizing and DC motor protection schemes.",
                "Designed a single-phase VFD schematic in EasyEDA; studied SPWM modulation and inverter switching.",
              ],
            },
            {
              role: "Undergraduate Researcher",
              org: "Power Electronics Lab — under Dr. M. Prabhakar, VIT Chennai",
              when: "2024 – 2026",
              icon: Radio,
              points: [
                "High-gain DC-DC converter research track — 5 topologies drafted, 2 carried through to patented hardware.",
                "Owned magnetics design (ETD44 / 54 / 59), PCB layout, and bench validation with differential + current probes.",
              ],
            },
          ].map((e) => {
            const I = e.icon;
            return (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l border-border"
              >
                <span className="absolute -left-[9px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-background ring-1 ring-copper">
                  <I className="h-2.5 w-2.5 text-copper" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{e.role}</h3>
                  <span className="font-mono-tech text-xs text-muted-foreground">{e.when}</span>
                </div>
                <p className="text-sm text-copper mt-1">{e.org}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-copper/70 mt-1.5 shrink-0 h-1 w-1 rounded-full bg-copper/60" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="spec-label">§ 04 — Toolbox</p>
            <h2 className="font-display text-3xl md:text-4xl mt-3">
              Instruments, silicon, software.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {SKILLS.map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <p className="spec-label">{k}</p>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    {
      icon: Mail,
      label: "dharanibarathicd@gmail.com",
      href: "mailto:dharanibarathicd@gmail.com",
    },
    { icon: Phone, label: "+91 88259 27230", href: "tel:+918825927230" },
    {
      icon: Linkedin,
      label: "linkedin.com/in/dharanibarathicd",
      href: "https://linkedin.com/in/dharanibarathicd",
    },
    { icon: Github, label: "github.com/iamboffin", href: "https://github.com/iamboffin" },
  ];
  return (
    <section id="contact" className="border-t border-border bg-surface/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="spec-label">§ 05 — Contact</p>
        <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
          Building something that needs <span className="copper-text italic">watts, wires, or wonder?</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          I'm open to internships and research collaborations in power electronics, embedded systems, and aerospace avionics.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {items.map((it) => {
            const I = it.icon;
            return (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left hover:border-copper transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-copper/10 text-copper ring-1 ring-copper/30">
                  <I className="h-4 w-4" />
                </span>
                <span className="font-mono-tech text-sm truncate">{it.label}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-copper transition" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono-tech text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Dharani Barathi C D.</span>
        <span className="uppercase tracking-widest">Chennai · India — designed & built by DBCD</span>
      </div>
    </footer>
  );
}
