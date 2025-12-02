export default function Hero(){
return (
<section id="home" className="hero">
<div className="container hero-inner">
<div>
<h1>Hi, I'm <span className="accent">Syed</span></h1>
<p className="lead">Engineering student building neat web apps — React, JavaScript & UI.</p>
<div className="hero-cta">
<a className="btn" id="ViewProjects" href="#projects">View Projects</a>
<a className="btn btn-outline" href="#contact">Contact Me</a>
</div>
</div>
<div className="hero-card">
<div className="card-inner">
<p className="muted">Available for internships · Open to collaborations</p>
<ul className="skill-list">
<li>React</li>
<li>JavaScript</li>
<li>HTML/CSS</li>
</ul>
</div>
</div>
</div>
</section>
)
}