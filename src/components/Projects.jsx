export default function Projects({projects}){
return (
<section id="projects" className="section">
<div className="container">
<h2>Projects</h2>
<div className="grid">
{projects.map(p => (
<article key={p.id} className="card project-card">
<h3>{p.title}</h3>
<p>{p.description}</p>
<p className="tech">{(p.tech || []).join(' · ')}</p>
<div className="card-actions">
  {p.demo && p.demo !== '#' ? (
    <a
      className="project-btn"
      href={p.demo} 
      aria-label={`Live demo of ${p.title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live
    </a>
  ) : (
    <span className="link-disabled">Live</span>
  )}

  {p.url && p.url !== '#' ? (
    <a
      className="project-btn"
      href={p.url}
      aria-label={`Source code of ${p.title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Code
    </a>
  ) : (
    <span className="link-disabled">Code</span>
  )}
</div>

</article>
))}
</div>
</div>
</section>
)
}