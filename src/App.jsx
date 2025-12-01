import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Big Burgers',
    desc: 'Responsive restaurant UI — menu browsing, add-to-cart mockup. Built with HTML/CSS/JS, focus on responsive UX and playful visuals.',
    img: '/bigburgers.png',
    url: 'https://spillproof98.github.io/BigBurgers/',
    tags: ['HTML','CSS','JS']
  },
  {
    title: 'ReaL-IMDB',
    desc: 'React-based movie browser using TMDB APIs: search, pagination, and dark UI. Demonstrates API integration and client-side routing.',
    img: '/reaL-imdb.png',
    url: 'https://spillproof98.github.io/ReaL-IMDB/#/',
    tags: ['React','APIs','TMDB']
  },
  {
    title: 'Dataking — Drone Analytics',
    desc: 'Dashboard to upload and analyze drone violation reports. Shows charts, maps, and filters for operational analytics.',
    img: '/dataking.png',
    url: 'https://spillproof98.github.io/dataking-drone-analytics/',
    tags: ['Dashboard','Data Viz']
  },
  {
    title: 'Simp Task Manager',
    desc: 'Kanban-style task board with CRUD and local persistence. Useful demo for state management and UX on task flows.',
    img: '/simp-task.png',
    url: 'https://simp-task-manager.netlify.app/',
    tags: ['React','LocalStorage','Kanban']
  },
  {
    title: 'Break Seekers — Job Listing Platform',
    desc: 'A clean job-listing platform with filtering, save-for-later, and detailed job preview. Built with React, Node.js backend, and responsive UI.',
    img: '/Break-seeker.png',
    url: 'https://break-seeker.netlify.app/jobs',
    tags: ['React', 'Node.js', 'Job Board', 'UI/UX']
  },

  {
    title: 'SubsBoard — Subscription Analytics Dashboard',
    desc: 'Subscription management dashboard with charts, metrics, dark mode, plan insights, and monthly revenue analytics.',
    img: '/subs-board.png',
    url: 'https://subsboard.netlify.app/app',
    tags: ['React', 'Dashboard', 'Analytics', 'Charts']
  }
]

export default function App(){
  return (
    <div className="min-h-screen p-6 md:p-12">
      <header className="max-w-5xl mx-auto flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{color:'white'}}>Adithya R</h1>
          <p className="text-slate-300 mt-1">Full-Stack Developer • React · TypeScript · Next.js · Node.js · MongoDB · PostgreSQL </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/AdithyaR_FSD2025.pdf" download className="px-4 py-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-600)] shadow">Resume</a>
          <a href="https://github.com/spillproof98" target="_blank" rel="noreferrer" className="text-slate-300">GitHub</a>
          <a href="https://www.linkedin.com/in/adithya-r-" target="_blank" rel="noreferrer" className="text-slate-300">LinkedIn</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="mb-8">
          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} className="bg-[color:var(--card)] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-semibold" style={{color:'white'}}>About</h2>
            <p className="text-slate-300 mt-3">Dedicated Full-Stack Developer with nearly 4 years building web apps. I convert product ideas into production-ready interfaces using React, Node.js and modern cloud tooling. Open to Senior Full-Stack roles.</p>
            <div className="mt-4">
              <strong className="text-slate-200">Key skills:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {['React','JavaScript','Node.js','MongoDB','Postgres','Tailwind','Redux','AWS','Git','REST APIs'].map(s => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-white/5">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <Work role="Frontend Developer" company="Slooh" date="Jan 2025 – May 2025">
              Implemented satellite data integration, redesigned telescope selection UI and added Redux-based state management.
            </Work>
            <Work role="Junior Full-Stack Developer" company="Agraga" date="Aug 2024 – Dec 2024">
              Built logistics platform features, integrated REST APIs, and deployed services using Git + AWS.
            </Work>
            <Work role="Associate Developer" company="Blue Moon Fibre Tech" date="Aug 2021 – Jul 2024">
              Developed full-stack applications for tank design calculations and handled monitoring and issue tracking.
            </Work>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
          <div className="bg-[color:var(--card)] p-4 rounded-2xl border border-slate-800">
            <p className="font-semibold">B.Tech — Electronics & Communication Engineering</p>
            <p className="text-sm text-slate-300">PRIST University, Chennai — Aug 2017 to Aug 2021 (CGPA: 7.8)</p>
            <div className="mt-2 text-sm text-slate-300">Certifications: Full-Stack Web Development (Crampete), Applied Business Analytics (ISB Executive).</div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="bg-[color:var(--card)] p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-200">Email</p>
              <a className="text-slate-300" href="mailto:tilakadithya@hotmail.com">tilakadithya@hotmail.com</a>
              <p className="mt-2 font-medium text-slate-200">Phone</p>
              <p className="text-slate-300">+91 75400 09450</p>
            </div>
            <div>
              <a href="mailto:tilakadithya@hotmail.com" className="px-4 py-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-600)] shadow">Hire / Contact</a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-400 py-6">© {new Date().getFullYear()} Adithya R — Built with React, Vite & Tailwind</footer>
      </main>
    </div>
  )
}

function Work({role, company, date, children}){
  return (
    <div className="bg-[color:var(--card)] p-4 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300">{company} · <span className="font-medium">{role}</span></div>
          <div className="text-xs text-slate-500">{date}</div>
        </div>
      </div>
      <p className="mt-3 text-slate-300 text-sm">{children}</p>
    </div>
  )
}
