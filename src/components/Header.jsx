import React from 'react'


export default function Header(){
return (
<header className="site-header">
<div className="container header-inner">
<div className="brand" id='brand'>Syed Gouse</div>
<nav className="nav">
<a href="#home">Home</a>
<a href="#projects">Projects</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</nav>
</div>
</header>
)
}