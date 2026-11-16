import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowDown, ArrowUpRight, MessagesSquare, Network, Users } from "lucide-react";
import { Wordmark } from "../components/kit/primitives";
import { ThemeToggle } from "../components/theme-toggle";
import { connections, relatedConnections, CONNECTIONS_REVIEWED } from "../data/connections";
import "../connections.css";

const threads = [
  { title: "Connection", description: "Relationships, trust and places to belong.", icon: Users },
  { title: "Technology", description: "Tools shaped by the people who use them.", icon: Network },
  { title: "Participation", description: "Dialogue, public choices and shared action.", icon: MessagesSquare },
];

export default function Connections() {
  useEffect(() => {
    const title = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = description?.content;
    document.title = "Community Connections | tech by George";
    if (description) description.content = "Five community connections and four research discoveries exploring social trust, community technology, public deliberation and civic participation.";
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => { document.title = title; if (description && previous !== undefined) description.content = previous; };
  }, []);

  return <div className="connections-page">
    <header className="connections-header"><div className="connections-container connections-header-inner">
      <Link href="/" aria-label="Tech by George home"><Wordmark size="1.25rem" /></Link>
      <nav aria-label="Site navigation"><Link href="/">All projects</Link><Link href="/stack">My Toolkit</Link><Link href="/how-i-can-help">How I can help you</Link><ThemeToggle /></nav>
    </div></header>
    <main>
      <section className="connections-container connections-hero" aria-labelledby="connections-title">
        <div className="connections-hero-copy">
          <p className="connections-label">Community Connections / Field notes</p>
          <h1 id="connections-title">Community starts<br />with <em>connection.</em></h1>
          <p className="connections-intro">A few organizations and projects I’ve connected with recently. Different approaches to a shared concern: helping people build relationships, participate in civic life and shape the tools their communities need.</p>
          <a href="#organizations" className="connections-button">Meet the five <ArrowDown size={18} aria-hidden="true" /></a>
          <p className="connections-review">Website summaries reviewed {CONNECTIONS_REVIEWED}.</p>
        </div>
        <aside className="connections-threads" aria-label="Three connected themes">
          <p className="connections-label">Three threads, one community</p>
          {threads.map(({ title, description, icon: Icon }, index) => <div className="connections-thread" key={title}><span className="connections-thread-icon"><Icon size={24} aria-hidden="true" /></span><div><span className="connections-thread-index">0{index + 1}</span><h2>{title}</h2><p>{description}</p></div></div>)}
          <p className="connections-thread-note">Not one network or one method. Different ways to help people show up for one another.</p>
        </aside>
      </section>

      <div className="connections-index-band"><nav className="connections-container connections-index" aria-label="Jump to an organization">
        <p className="connections-label">In this guide</p>
        {connections.map((organization, index) => <a key={organization.id} href={`#${organization.id}`}><span>0{index + 1}</span>{index === 0 ? "Chamber of Connection" : index === 1 ? "Weave" : index === 2 ? "Relational Tech" : index === 3 ? "National Issues Forums" : organization.name}</a>)}
        <a href="#more-to-explore">More to explore <ArrowDown size={15} aria-hidden="true" /></a>
      </nav></div>

      <section id="organizations" className="connections-container connections-organizations" aria-labelledby="organizations-title">
        <div className="connections-section-heading"><div><p className="connections-label">The organizations & projects</p><h2 id="organizations-title">Five approaches.<br />A closer look.</h2></div><p>Plain-language overviews based on their own websites. The links below let you explore each approach directly.</p></div>
        {connections.map((organization, index) => <article id={organization.id} className="connections-profile" key={organization.id} aria-labelledby={`${organization.id}-title`}>
          <div className="connections-profile-heading"><span className="connections-number">0{index + 1}</span><p className="connections-label">{organization.focus}</p><h3 id={`${organization.id}-title`}>{organization.name}</h3><p className="connections-kind">{organization.kind}</p><a className="connections-visit" href={organization.url} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="connections-profile-content"><p className="connections-summary">{organization.summary}</p><p>{organization.overview}</p>
            <h4>What they do</h4><ul>{organization.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
            <div className="connections-start"><p className="connections-label">A practical starting point</p><p>{organization.startingPoint}</p></div>
            <div className="connections-sources"><p className="connections-label">Read the sources</p><div>{organization.resources.map((resource) => <a href={resource.url} key={resource.url} target="_blank" rel="noopener noreferrer">{resource.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></div>
          </div>
        </article>)}
      </section>

      <section id="more-to-explore" className="connections-container connections-discoveries" aria-labelledby="discoveries-title">
        <div className="connections-section-heading"><div><p className="connections-label">Research discoveries</p><h2 id="discoveries-title">More to explore</h2></div><p>Four related organizations found while researching this guide—not part of my five recent connections. Each offers another route into community participation or people-centered technology.</p></div>
        {relatedConnections.map((organization) => <article id={organization.id} className="connections-discovery" key={organization.id} aria-labelledby={`${organization.id}-title`}>
          <div><p className="connections-label">{organization.focus}</p><h3 id={`${organization.id}-title`}>{organization.name}</h3><p className="connections-discovery-fit">{organization.fit}</p></div>
          <div className="connections-discovery-content"><p>{organization.overview}</p><div className="connections-start"><p className="connections-label">A practical starting point</p><p>{organization.startingPoint}</p></div><div className="connections-sources"><p className="connections-label">Explore the sources</p><div>{organization.resources.map((resource) => <a href={resource.url} key={resource.url} target="_blank" rel="noopener noreferrer">{resource.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></div></div>
        </article>)}
      </section>

      <section className="connections-method"><div className="connections-container connections-method-inner"><div><p className="connections-label">About these notes</p><h2>A starting point,<br />not a partnership list.</h2></div><div><p>The first five profiles describe organizations and projects I’ve connected with. “More to explore” contains separate research discoveries. Neither list announces formal partnerships or endorsements. Overviews paraphrase the organizations’ own descriptions, while the practical starting points are suggestions for exploring their work.</p><p>Reviewed {CONNECTIONS_REVIEWED}. Programs, access requirements and priorities can change. Consult the linked websites for current details. Describing an organization’s goals is not a claim that every stated outcome has been independently verified.</p></div></div></section>
    </main>
    <footer className="connections-footer"><div className="connections-container"><Wordmark size="1.2rem" /><p>People first. Tools in service of community.</p><nav aria-label="Footer navigation"><Link href="/">All projects</Link><Link href="/stack">My Toolkit</Link><Link href="/how-i-can-help">How I can help you</Link><a href="#connections-title">Back to top ↑</a></nav></div></footer>
  </div>;
}