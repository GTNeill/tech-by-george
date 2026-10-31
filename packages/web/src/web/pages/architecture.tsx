import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Layers3, Search, SlidersHorizontal } from "lucide-react";
import { Wordmark } from "../components/kit/primitives";
import { ThemeToggle } from "../components/theme-toggle";
import { useProjects } from "../queries/projects";
import { architectureProjects, layerNames, REVIEWED_DATE, tools, type ArchitectureProject } from "../data/architecture";
import "../architecture.css";

const toolMap = new Map(tools.map((tool) => [tool.id, tool]));
const categories = ["All projects", "Community", "Civic", "Personal", "Operations"];
const overview = [
  { description: "The part you see and use: pages, forms, maps and controls.", tools: ["react", "tailwind", "leaflet"] },
  { description: "The rules: validate a request, check permissions and decide what happens next.", tools: ["hono", "orpc", "zod"] },
  { description: "Supporting connections: sign-in, messages, civic sources and calendars.", tools: ["betterauth", "resend", "ical"] },
  { description: "The memory: structured records in SQL; photos and attachments in file storage.", tools: ["drizzle", "turso", "s3"] },
  { description: "The running service: a server process, hosting, DNS and encrypted connections.", tools: ["bun", "railway", "browser"] },
  { description: "The physical foundation: your device and providers’ processors, memory, disks and networks. Server models are not documented.", tools: [] },
];

function projectTools(project: ArchitectureProject) {
  return [...new Set([...project.layers.flatMap((layer) => layer.tools), ...project.build, ...project.analytics])];
}

function ToolLinks({ ids }: { ids: string[] }) {
  return <div className="arch-tools">{ids.map((id) => {
    const tool = toolMap.get(id);
    if (!tool) return null;
    return <a key={id} href={tool.url} target="_blank" rel="noopener noreferrer" title={tool.description}>{tool.name}<ArrowUpRight size={11} aria-hidden="true" /></a>;
  })}</div>;
}

function ProjectEntry({ project, index, open, onToggle }: { project: ArchitectureProject; index: number; open: boolean; onToggle: (open: boolean) => void }) {
  return <details id={project.slug} className="arch-project" open={open} onToggle={(event) => onToggle(event.currentTarget.open)}>
    <summary>
      <span className="arch-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="arch-project-heading"><span className="arch-eyebrow">{project.category}</span><h3>{project.name}</h3><span className="arch-project-purpose">{project.purpose}</span></span>
      <span className="arch-disclosure"><span>{open ? "Close" : "Explore stack"}</span><ChevronDown size={20} aria-hidden="true" /></span>
    </summary>
    <div className="arch-project-body">
      <div className="arch-project-toolbar"><a href={project.url} target="_blank" rel="noopener noreferrer">Open the project <ArrowUpRight size={14} /></a><a href={`#${project.slug}`}>Link to this stack <span aria-hidden="true">#</span></a><span>{projectTools(project).length} tools & connections</span></div>
      <div className="arch-detail-grid">
        <div>
          <p className="arch-eyebrow arch-subheading">The project stack · top to bottom</p>
          <ol className="arch-stack arch-project-stack">{project.layers.map((layer, i) => <li key={layerNames[i]}><span className="arch-layer-index">{String(i + 1).padStart(2, "0")}</span><div><h4>{layerNames[i]}</h4><p>{layer.text}</p><ToolLinks ids={layer.tools} /></div></li>)}</ol>
        </div>
        <aside className="arch-explainer">
          <section><p className="arch-eyebrow">Follow one action</p><ol className="arch-flow">{project.flow.map((step, i) => <li key={step}><span>{i + 1}</span><p>{step}</p></li>)}</ol></section>
          <section><p className="arch-eyebrow">Important distinctions</p><ul className="arch-notes">{project.notes.map((note) => <li key={note}>{note}</li>)}</ul></section>
          {project.build.length > 0 && <section><p className="arch-eyebrow">Workbench · development, not request flow</p><ToolLinks ids={project.build} /></section>}
          {project.analytics.length > 0 && <section><p className="arch-eyebrow">Measurement · public scripts observed</p><ToolLinks ids={project.analytics} /><p className="arch-small">Script presence confirms an integration, not that every visit is successfully measured.</p></section>}
          <details className="arch-evidence"><summary>Source & review notes <ChevronDown size={14} /></summary><p>Reviewed {REVIEWED_DATE}. Feature source, deployment files and public page responses were checked; private accounts and authenticated production workflows were not.</p>{project.repo && <p>{project.private ? `Private repository: GTNeill/${project.repo}. Evidence is summarized; source is not publicly accessible.` : <a href={`https://github.com/GTNeill/${project.repo}`} target="_blank" rel="noopener noreferrer">Public repository: GTNeill/{project.repo} ↗</a>}</p>}<ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>{project.sha && <p className="arch-commit">Source tree snapshot <code>{project.sha.slice(0, 12)}</code><br />A repository snapshot, not a verified deployed commit.</p>}{!project.repo && <p>Evidence comes from the published embedded map, not a repository.</p>}</details>
        </aside>
      </div>
    </div>
  </details>;
}

export default function Architecture() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All projects");
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const liveProjects = useProjects();
  const query = search.trim().toLowerCase();
  const visible = useMemo(() => architectureProjects.filter((project) => {
    const text = [project.name, project.purpose, project.category, project.repo, ...project.layers.map((layer) => layer.text), ...projectTools(project).map((id) => toolMap.get(id)?.name)].join(" ").toLowerCase();
    return (category === "All projects" || project.category === category) && (!query || text.includes(query));
  }), [query, category]);
  const matchingTools = tools.filter((tool) => !query || `${tool.name} ${tool.description} ${tool.group}`.toLowerCase().includes(query));
  const unreviewed = liveProjects.data?.filter((project) => !architectureProjects.some((reviewed) => reviewed.id === project.id)) ?? [];
  const setOpen = (slug: string, open: boolean) => setExpanded((current) => {
    if (current.has(slug) === open) return current;
    const next = new Set(current);
    if (open) next.add(slug); else next.delete(slug);
    return next;
  });

  useEffect(() => {
    const title = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = description?.content;
    document.title = "Architecture — how the projects work | tech by George";
    if (description) description.content = "Explore 14 projects from interface to hardware: plain-language stacks, technical details, data flows and linked tools, reviewed against current source.";
    if (!window.location.hash) window.scrollTo(0, 0);
    const openAnchor = () => {
      const slug = window.location.hash.slice(1);
      if (architectureProjects.some((project) => project.slug === slug)) {
        setSearch(""); setCategory("All projects");
        setExpanded((current) => new Set([...current, slug]));
        requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ block: "start" }));
      }
    };
    openAnchor();
    window.addEventListener("hashchange", openAnchor);
    return () => { document.title = title; if (description && previous !== undefined) description.content = previous; window.removeEventListener("hashchange", openAnchor); };
  }, []);

  return <div className="architecture-page">
    <header className="arch-header"><div className="arch-container arch-header-inner"><Link href="/" aria-label="Tech by George home"><Wordmark size="1.25rem" /></Link><nav aria-label="Site navigation"><Link href="/">All projects</Link><Link href="/how-i-can-help">How I can help you</Link><ThemeToggle /></nav></div></header>
    <main>
      <section className="arch-container arch-hero" aria-labelledby="architecture-title">
        <div className="arch-hero-copy"><p className="arch-eyebrow"><Layers3 size={15} /> Field guide / Architecture</p><h1 id="architecture-title">What’s behind<br />the <em>interface.</em></h1><p className="arch-intro">The tools, the connections, and the decisions that make these projects work. From the screen in your hand to the servers underneath.</p><div className="arch-hero-actions"><a href="#project-stacks" className="arch-button arch-button-primary">Explore {architectureProjects.length} project stacks <ArrowDown size={16} /></a><a href="#tool-directory" className="arch-text-link">Tool directory <ArrowRight size={15} /></a></div><div className="arch-review"><span className="arch-review-dot" /> Source-reviewed snapshot <span>· {REVIEWED_DATE}</span></div></div>
        <div className="arch-diagram"><div className="arch-diagram-label"><span>A system, in six layers</span><span>UI ↓ HARDWARE</span></div><ol>{layerNames.map((name, i) => <li key={name}><span>{String(i + 1).padStart(2, "0")}</span><strong>{name}</strong><span className="arch-diagram-mark" aria-hidden="true">{i === 5 ? "▪" : "↓"}</span></li>)}</ol><p>The layers explain responsibilities. They are not six sequential network hops.</p></div>
      </section>

      <section className="arch-overview"><div className="arch-container arch-overview-grid"><div><p className="arch-eyebrow">01 / The shared pattern</p><h2>Different purposes.<br />Familiar building blocks.</h2><p className="arch-section-intro">Most projects share a modern web foundation. The map and Help Desk are deliberate exceptions. Expand a project below to see what actually differs.</p><div className="arch-workbench"><p className="arch-eyebrow">Beside the stack, not beneath it</p><h3>The workbench</h3><p>GitHub keeps source history. TypeScript checks code. Vite builds the browser bundle. Runable provides the development workspace for the modern app projects. These are build tools, not services a visitor’s request must pass through.</p><ToolLinks ids={["github", "typescript", "vite", "runable"]} /></div><p className="arch-small">A package appearing in a manifest is not proof of an active feature. Expo and Electron scaffolding are not counted as deployed mobile or desktop apps.</p></div><ol className="arch-stack arch-shared-stack">{overview.map((layer, i) => <li key={layerNames[i]}><span className="arch-layer-index">{String(i + 1).padStart(2, "0")}</span><div><h3>{layerNames[i]}</h3><p>{layer.description}</p><ToolLinks ids={layer.tools} /></div></li>)}</ol></div></section>

      <section id="project-stacks" className="arch-container arch-project-section" aria-labelledby="projects-heading"><div className="arch-section-heading"><div><p className="arch-eyebrow">02 / Under the hood</p><h2 id="projects-heading">Explore a project.</h2></div><p>Open a stack for the plain-language story,<br className="arch-desktop-break" /> technical details and source notes.</p></div>
        <div className="arch-filter"><label className="arch-search"><Search size={19} /><span className="sr-only">Search projects or tools</span><input aria-label="Search projects or tools" type="search" placeholder="Search a project or tool — Leaflet, email, voting…" value={search} onChange={(event) => setSearch(event.target.value)} /></label><div className="arch-filter-bottom"><div className="arch-categories" aria-label="Filter by project category"><SlidersHorizontal size={14} aria-hidden="true" />{categories.map((name) => <button type="button" key={name} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}</div><div className="arch-bulk"><button type="button" onClick={() => setExpanded((current) => new Set([...current, ...visible.map((project) => project.slug)]))}>Expand all</button><span>/</span><button type="button" onClick={() => setExpanded(new Set())}>Collapse all</button></div></div></div>
        <div className="arch-results-line"><output>{visible.length} of {architectureProjects.length} reviewed projects{query && ` matching “${search.trim()}”`}</output><span>UI FIRST. HARDWARE LAST.</span></div>
        <div className="arch-project-list">{visible.map((project) => <ProjectEntry key={project.slug} project={project} index={architectureProjects.indexOf(project)} open={expanded.has(project.slug)} onToggle={(open) => setOpen(project.slug, open)} />)}</div>
        {visible.length === 0 && <div className="arch-empty"><h3>No matching projects.</h3><p>Try another tool or clear the filters.</p><button type="button" className="arch-button" onClick={() => { setSearch(""); setCategory("All projects"); }}>Clear filters</button></div>}
        {liveProjects.isLoading && <output className="arch-small block">Checking the live catalog for projects awaiting review…</output>}
        {liveProjects.isError && <p className="arch-small">The live catalog comparison is unavailable. The reviewed stacks above are still available.</p>}
        {unreviewed.length > 0 && <aside className="arch-pending"><h3>New in the catalog · architecture review pending</h3><p>These entries do not inherit a guessed stack.</p>{unreviewed.map((project) => <a href={project.url} key={project.id} target="_blank" rel="noopener noreferrer">{project.title} ↗</a>)}</aside>}
      </section>

      <section id="tool-directory" className="arch-directory"><div className="arch-container"><div className="arch-section-heading"><div><p className="arch-eyebrow">03 / Tools, translated</p><h2>A name. A job. A link.</h2></div><p>Official documentation, plain-English roles,<br className="arch-desktop-break" /> and the projects where each tool appears.</p></div><details className="arch-glossary" open={query.length > 0 ? true : undefined}><summary><span>Browse the tool directory <span className="arch-muted">({matchingTools.length} tools{query && " matching your search"})</span></span><ChevronDown size={20} /></summary><div className="arch-tool-grid">{matchingTools.map((tool) => {
          const usedBy = architectureProjects.filter((project) => projectTools(project).includes(tool.id));
          return <article key={tool.id} id={`tool-${tool.id}`}><p className="arch-eyebrow">{tool.group}</p><h3><a href={tool.url} target="_blank" rel="noopener noreferrer">{tool.name}<ArrowUpRight size={15} /></a></h3><p>{tool.description}</p><div className="arch-used-by">{usedBy.map((project) => <a key={project.slug} href={`#${project.slug}`}>{project.name}</a>)}</div></article>;
        })}</div>{matchingTools.length === 0 && <p className="arch-empty">No tools match the search.</p>}</details><p className="arch-small arch-directory-note">“Used in a project” includes documented conditional connections and observed measurement scripts. Check that project’s notes before assuming a provider is active.</p></div></section>
      <section className="arch-container arch-method"><p className="arch-eyebrow">About this guide</p><h2>Evidence over assumptions.</h2><div><p>Project purpose was checked against the live catalog and development history. Tooling was checked against feature code, database clients and deployment files in the current repositories. All 14 public URLs responded successfully during review; the photo portfolio and embedded tour map received additional published-code checks.</p><p>This is a manually curated snapshot, not an automatic monitor or security certification. Repository code can be ahead of production. Private secrets, provider dashboards, hardware models and authenticated production actions were not inspected. Optional integrations are called out rather than presented as guaranteed live features.</p></div></section>
    </main>
    <footer className="arch-footer"><div className="arch-container"><Wordmark size="1.2rem" /><p>Small tools. Understandable systems.</p><nav aria-label="Footer navigation"><Link href="/">All projects <ArrowRight size={14} /></Link><Link href="/how-i-can-help">How I can help you <ArrowRight size={14} /></Link><a href="#architecture-title">Back to top ↑</a></nav></div></footer>
  </div>;
}
