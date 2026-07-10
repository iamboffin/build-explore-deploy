import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  Rocket,
  Zap,
  Radio,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { PROJECTS, PUBLICATIONS } from "@/lib/projects";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

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

const RESUME_URL = "/Dharani-Barathi-CD-Resume.pdf";

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

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <About />
      <ProjectsSection />
      <PublicationsSection />
      <Experience />
      <SkillsSection />
      <Contact />
      <SiteFooter />
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-60"
      >
        <div className="mx-auto h-full max-w-6xl hairline-grid opacity-40" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-36 md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="spec-label"
        >
          Chennai · India — EEE @ VIT Chennai · 2023 – 2027
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display mt-6 text-5xl leading-[1.02] md:text-7xl lg:text-8xl"
        >
          Dharani Barathi
          <span className="block text-muted-foreground">C&nbsp;D.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground leading-relaxed"
        >
          I design <span className="text-foreground">power electronics</span>,{" "}
          <span className="text-foreground">rocket avionics</span>, and the occasional{" "}
          <span className="text-foreground">new class of measurement instrument</span>. Two Indian
          patents, one IEEE paper, and a stack of PCBs that mostly work on the first power-up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/"
            hash="work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Selected work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-5 py-3 text-sm font-medium hover:bg-surface transition"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Get in touch
          </Link>
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
              <dt className="font-display text-3xl md:text-4xl text-foreground">{k}</dt>
              <dd className="mt-1 spec-label">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section className="border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="spec-label">§ 01 — About</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">
            Curiosity first, datasheets second.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a fourth-year EEE student at VIT Chennai. Most of my work starts the same way: a
            subject gets interesting, a professor mentions a research gap, or a friend and I get
            curious about a protocol — and it turns into a paper, a patent, or a board on the bench.
          </p>
          <p>
            Along the way I've hand-wound ETD-core inductors, spent a week hunting a rail failure
            caused by a badly labelled datasheet pin, laid out my first SMD PCB in one all-nighter,
            and shipped firmware for a wheelchair that a person can steer with a nod.
          </p>
          <p>I like problems where the electrons, the geometry, and the story all have to line up.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function ProjectsSection() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="spec-label">§ 02 — Selected work</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl max-w-2xl">
              Five projects. Two patents. One that shouldn't exist yet.
            </h2>
          </div>
          <span className="hidden font-mono-tech text-xs text-muted-foreground md:block">
            2024 — 2026
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-border-strong hover:shadow-[var(--shadow-lift)]"
              >
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface hairline-grid">
                  <div className="flex h-full items-center justify-center text-center">
                    <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground px-4">
                      Photo slot
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="spec-label">{p.tag}</span>
                    <span className="font-mono-tech text-[10px] text-muted-foreground">
                      {p.year}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl md:text-3xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.status.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium brand-text">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Publications ---------- */

function PublicationsSection() {
  return (
    <section id="publications" className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="spec-label">§ 03 — Publications & Patents</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              The paper trail, honest and up-to-date.
            </h2>
          </div>
          <p className="md:col-span-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            Two Indian patents filed on high-gain DC-DC converter topologies, one under-examination
            patent on the LOTUS concentric-ring bus, one published IEEE paper, and two IEEE drafts
            written but not yet submitted. Status is labeled honestly on every entry.
          </p>
        </div>

        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {PUBLICATIONS.map((pub) => {
            const statusStyle =
              pub.status === "Published"
                ? "bg-[color:var(--brand)]/10 brand-text border-[color:var(--brand)]/30"
                : pub.status === "Filed"
                  ? "bg-surface-2 text-foreground border-border-strong"
                  : "bg-surface text-muted-foreground border-border";
            return (
              <li key={pub.title}>
                <div className="grid gap-3 p-5 md:grid-cols-12 md:items-center md:gap-6 md:p-6">
                  <div className="md:col-span-2">
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                      {pub.kind}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-medium text-foreground">{pub.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.detail}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyle}`}
                    >
                      {pub.status === "Published" && <CheckCircle2 className="h-3 w-3" />}
                      {pub.status}
                    </span>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <p className="font-mono-tech text-xs text-muted-foreground">{pub.venue}</p>
                    <div className="mt-2 flex gap-3 md:justify-end">
                      {pub.href && (
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium brand-text hover:underline"
                        >
                          DOI <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      <Link
                        to="/projects/$slug"
                        params={{ slug: pub.projectSlug }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-[color:var(--brand)]"
                      >
                        Project <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

function Experience() {
  const items = [
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
  ];

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="spec-label">§ 04 — Experience</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">Where the ideas got tested.</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          {items.map((e) => {
            const I = e.icon;
            return (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative border-l border-border pl-8"
              >
                <span className="absolute -left-[9px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-background ring-1 ring-[color:var(--brand)]">
                  <I className="h-2.5 w-2.5 brand-text" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{e.role}</h3>
                  <span className="font-mono-tech text-xs text-muted-foreground">{e.when}</span>
                </div>
                <p className="mt-1 text-sm brand-text">{e.org}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--brand)]/60" />
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

/* ---------- Skills ---------- */

const SKILLS: [string, string][] = [
  [
    "Power Electronics",
    "DC-DC boost & high-gain topologies · volt-second analysis · magnetic design (ETD44/54/59) · 50 kHz switching · high-voltage layout · thermal debugging",
  ],
  ["Simulation", "MATLAB / Simulink · PSIM"],
  [
    "PCB & Hardware",
    "Altium Designer · EasyEDA · KiCad · SMD rework · Altium library authoring",
  ],
  ["Instruments", "MDO / DSO · differential & current probes · multimeter"],
  ["Microcontrollers", "STM32 · ESP32 · RP2040 (PWM · ADC · UART · SPI · I²C)"],
  ["Protocols", "ESP-NOW · NRF24L01 · I²C sensor stacks"],
];

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="spec-label">§ 05 — Toolbox</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              Instruments, silicon, software.
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
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

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="spec-label">§ 06 — Contact</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl leading-tight">
            Building something that needs{" "}
            <span className="brand-text">watts, wires, or wonder?</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Open to internships and research collaborations in power electronics, embedded systems,
            and aerospace avionics.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Download resume (PDF)
            </a>
          </div>

          <div className="mt-8 space-y-3">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="dharanibarathicd@gmail.com"
              href="mailto:dharanibarathicd@gmail.com"
            />
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="+91 88259 27230"
              href="tel:+918825927230"
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="linkedin.com/in/dharanibarathicd"
              href="https://linkedin.com/in/dharanibarathicd"
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="github.com/iamboffin"
              href="https://github.com/iamboffin"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition hover:border-border-strong hover:bg-surface"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-foreground">
        {icon}
      </span>
      <span className="font-mono-tech text-sm truncate">{label}</span>
      <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
    </a>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setState("submitting");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setState("success");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand)]/10">
          <CheckCircle2 className="h-7 w-7 brand-text" />
        </span>
        <h3 className="font-display mt-6 text-2xl md:text-3xl">Message received.</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thanks for reaching out — I've got your note and will reply to you at the email you provided
          within a few days.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div>
        <p className="spec-label">Send a message</p>
        <h3 className="font-display mt-2 text-2xl">Let's talk.</h3>
      </div>

      <Field
        label="Name"
        id="name"
        value={values.name}
        onChange={(v) => setValues((s) => ({ ...s, name: v }))}
        required
        maxLength={200}
      />
      <Field
        label="Email"
        id="email"
        type="email"
        value={values.email}
        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        required
        maxLength={320}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="spec-label">
          Message
        </label>
        <textarea
          id="message"
          required
          maxLength={5000}
          rows={6}
          value={values.message}
          onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]/20 transition"
          placeholder="Tell me about the role, project, or collaboration…"
        />
      </div>

      {error && (
        <p className="text-sm text-[color:var(--destructive)]">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            Send message <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground">
        Your message is delivered to my inbox. I typically reply within a few days.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  maxLength,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="spec-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]/20 transition"
      />
    </div>
  );
}
