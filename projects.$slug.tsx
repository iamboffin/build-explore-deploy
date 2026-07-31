import { useState, useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Dharani Barathi C D" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Dharani Barathi C D` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Dharani Barathi C D` },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <p className="spec-label">Not found</p>
        <h1 className="font-display mt-3 text-3xl">That project doesn't exist.</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 pb-24 pt-14 md:pt-20">
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="spec-label">{project.tag}</span>
            <span className="font-mono-tech text-xs text-muted-foreground">· {project.year}</span>
          </div>
          <h1 className="font-display mt-4 text-4xl md:text-6xl leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
            {project.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.status.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
              >
                <CheckCircle2 className="h-3 w-3 brand-text" /> {s}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Gallery / Slideshow section */}
        <ProjectGallery project={project} />

        <Section label="Problem">
          <p className="text-lg leading-relaxed text-foreground/90">{project.problem}</p>
        </Section>

        <Section label="Approach">
          <ol className="space-y-3">
            {project.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono-tech text-xs text-muted-foreground pt-1.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section label="Results">
          <ul className="space-y-3">
            {project.results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="brand-text mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                <span className="text-base md:text-lg leading-relaxed text-foreground/90">{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Specs">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {project.specs.map(([k, v]) => (
              <div key={k} className="border-t border-border pt-3">
                <dt className="spec-label">{k}</dt>
                <dd className="mt-1 text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-surface px-3 py-1 font-mono-tech text-xs text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section label="Patents & papers">
          <ul className="space-y-3">
            {project.links.map((l) => {
              const inner = (
                <>
                  <span className="brand-text mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                  <div className="flex-1">
                    <p className="font-mono-tech text-sm text-foreground">{l.label}</p>
                    {l.note && <p className="text-sm text-muted-foreground mt-0.5">{l.note}</p>}
                  </div>
                  {l.href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
                </>
              );
              return (
                <li key={l.label}>
                  {l.href ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 hover:border-border-strong transition"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section label="Role & team">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{project.role}</p>
          <p className="mt-2 text-sm text-muted-foreground">{project.collaborators}</p>
        </Section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="mt-14"
    >
      <p className="spec-label">{label}</p>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const gallery =
    project.images && project.images.length > 0
      ? project.images
      : project.coverImage
      ? [{ src: project.coverImage, caption: project.title }]
      : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (gallery.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [gallery.length, isPaused]);

  if (gallery.length === 0) {
    return (
      <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface hairline-grid">
        <div className="flex h-full items-center justify-center text-center">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground px-6">
            Photo slot — upload a hero image for “{project.title}”
          </p>
        </div>
      </div>
    );
  }

  const activeItem = gallery[currentIndex] || gallery[0];

  return (
    <div className="mt-10 space-y-4">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-black group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={activeItem.src}
          alt={activeItem.caption || project.title}
          className="h-full w-full object-cover transition duration-500"
        />
        {activeItem.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
            <p className="font-mono-tech text-xs text-white/90">{activeItem.caption}</p>
          </div>
        )}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-80 hover:opacity-100 backdrop-blur transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-80 hover:opacity-100 backdrop-blur transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gallery.map((item, idx) => (
            <button
              type="button"
              key={item.src}
              onClick={() => setCurrentIndex(idx)}
              className={`group flex flex-col overflow-hidden rounded-xl border text-left transition ${
                idx === currentIndex
                  ? "border-[color:var(--brand)] ring-1 ring-[color:var(--brand)]"
                  : "border-border hover:border-border-strong opacity-70 hover:opacity-100"
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
              </div>
              <p className="p-2 font-mono-tech text-[10px] text-muted-foreground truncate">
                {item.caption}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
