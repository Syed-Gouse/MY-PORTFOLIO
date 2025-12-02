import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


// sample projects data (you can edit src/data/projects.js instead)
const projects = [
{
id: 1,
title: 'Portfolio Website',
description: 'Personal portfolio built with React and Vite. Shows projects and contact.',
tech: ['React', 'Vite', 'CSS'],
url: 'https://www.youtube.com/',
demo: 'https://www.youtube.com/'
},
{
id: 2,
title: 'Todo App',
description: 'A simple todo app with localStorage persistence.',
tech: ['React'],
url: '#',
demo: '#'
},
{
id: 3,
title: 'Todo App',
description: 'A simple todo app with localStorage persistence.',
tech: ['React'],
url: '#',
demo: '#'
},
{
id: 4,
title: 'Todo App',
description: 'A simple todo app with localStorage persistence.',
tech: ['React'],
url: '#',
demo: '#'
},
{
id: 2,
title: 'Todo App',
description: 'A simple todo app with localStorage persistence.',
tech: ['React'],
url: '#',
demo: '#'
}
]


export default function App(){
return (
<div className="app-root">
<Header />
<main>
<Hero />
<Projects projects={projects} />
<About />
<Contact />
</main>
<Footer />
</div>
)
}