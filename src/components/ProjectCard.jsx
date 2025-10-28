import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({title, desc, img, url, tags}){
  return (
    <motion.a whileHover={{ y:-6 }} href={url} target="_blank" rel="noreferrer"
      className="block bg-[color:var(--card)] p-4 rounded-2xl border border-slate-800 shadow-sm">
      <div className="h-48 mb-3 rounded overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover"/>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-300 mt-2">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5">{t}</span>)}
      </div>
    </motion.a>
  )
}
