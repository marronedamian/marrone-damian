"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data/cv";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .6 }}>
          <div className="text-sm uppercase tracking-widest text-primary">Portfolio</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight neon">{profile.name}</h1>
          <p className="mt-2 text-lg text-white/80">{profile.role}</p>
          <p className="mt-6 text-white/80">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} className="rounded-full px-4 py-2 text-sm bg-primary text-white hover:opacity-90 transition">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6, delay: .1 }} className="justify-self-end w-full">
          <div style={{ backgroundImage: "url('marrone_damian.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary/30 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}