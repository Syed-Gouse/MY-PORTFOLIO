export default function Contact(){
const handleSubmit = (e) => {
e.preventDefault()
const form = e.target
const data = new FormData(form)
const name = data.get('name')?.toString()?.trim()
const email = data.get('email')?.toString()?.trim()
const message = data.get('message')?.toString()?.trim()


if(!name || !email || !message){
alert('Please fill all fields before submitting.')
return
}


alert('Thanks ' + name + '! Your message has been received (local demo).')
form.reset()
}


return (
<section id="contact" className="section">
<div className="container">
<h2>Contact</h2>
<p>You can reach me at <a href="mailto:syedgouse2256@gmail.com"><svg width="24" height="24" viewBox="0 -6 24 24" fill="none">
  <path fill="#EA4335" d="M2 6.32v11.36c0 .76.62 1.32 1.38 1.32H6V9.38L2 6.32z"/>
  <path fill="#34A853" d="M22 6.32v11.36c0 .76-.62 1.32-1.38 1.32H18V9.38l4-3.06z"/>
  <path fill="#FBBC04" d="M6 9.38v9.62h12V9.38l-6 4.63-6-4.63z"/>
  <path fill="#4285F4" d="M2 6.32 12 13l10-6.68v-.82c0-.76-.62-1.5-1.38-1.5H3.38C2.62 4 2 4.74 2 5.5v.82z"/>
</svg>

 syedgouse2256@gmail.com</a></p>

<div className="social-links" style={{margin:'1rem 0'}}>
<a href="https://www.linkedin.com/in/syed-gouse-mohiuddin-quadri-0353941b1" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 -10 24 30" fill="blue">
  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2V22h3V10ZM14.5 10c-2.06 0-3.5 1.34-3.5 3.82V22h3v-7.5c0-1.18.55-2.5 2-2.5s1.78 1.32 1.78 2.46V22H21v-7.93C21 11.57 19.33 10 17 10c-1.35 0-2.43.5-3 1.5V10h-.5Z" />
</svg>
 LinkedIn</a>
<span style={{margin:'0 .5rem'}}>|</span>
<a href="https://github.com/Syed-Gouse" target="_blank" rel="noopener noreferrer"><svg width="24" height="15" viewBox="0 0 30 20" fill="black">
  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.55v-1.93c-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.21 1.79 1.21 1.04 1.8 2.73 1.28 3.4.98.1-.76.41-1.28.74-1.58-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.1 0 4.43-2.69 5.4-5.25 5.68.42.37.8 1.1.8 2.22v3.29c0 .31.2.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
</svg>
GitHub</a>
</div>

<form className="contact-form" onSubmit={handleSubmit}>
<label>
Name
<input name="name" required />
</label>
<label>
Email
<input name="email" type="email" required />
</label>
<label>
Message
<textarea name="message" rows={4} required />
</label>
<button className="btn" type="submit">Send</button>
</form>
</div>
</section>
)
}