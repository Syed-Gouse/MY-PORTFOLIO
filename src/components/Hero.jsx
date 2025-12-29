export default function Hero(){
return (
<section id="home" className="hero">
<div className="container hero-inner">
<div>
<h1>Hi, I'm <span className="accent">Syed</span></h1>
<p className="lead">Engineering student building neat web apps (React, JavaScript & UI). Backend Services (APIs and Microservices). </p>
<div className="hero-cta">
<a className="btn" id="ViewProjects" href="#projects">View Projects</a>
<a className="btn btn-outline" href="#contact">Contact Me</a>
</div>
</div>
<div className="hero-card">
<div className="card-inner">
<p className="muted">Available for internships · Open to collaborations or Freelance Works  </p>
<ul className="skill-list">
<li>Java</li>
<li>JavaScript</li>
<li>HTML/CSS</li>
<li>c#</li>
</ul>
<ul className="skill-list">
<li>Spring-boot</li>
<li>.Net</li>
<li>React</li>
</ul>
</div>
</div>
</div>
</section>
)
}