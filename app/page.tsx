import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import SkillsCloud from "@/components/SkillsCloud";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { experience, projects, skills, education } from "@/lib/data/cv";

export default function Page() {
  return (
    <main className="min-h-dvh text-white font-inter antialiased">
      <Navbar />
      <Hero />
      <Section id="skills" title="Habilidades" subtitle="Tecnologías con las que trabajo a diario">
        <SkillsCloud items={skills} />
      </Section>
      <Section id="experience" title="Experiencia" subtitle="Trayectoria y responsabilidades clave">
        <Timeline items={experience} />
      </Section>
      <Section id="projects" title="Proyectos" subtitle="Selección de trabajos y side projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.name} title={p.name} description={p.description} stack={p.stack} link={p.link} />
          ))}
        </div>
      </Section>
      <Section id="education" title="Educación" subtitle="Formación académica y cursos relevantes">
        <ul className="grid md:grid-cols-2 gap-4">
          {education.map((e, i) => (
            <li key={i} className="rounded-xl glass p-4">
              <div className="font-medium">{e.title}</div>
              <div className="text-sm text-white/70">{e.period}</div>
            </li>
          ))}
        </ul>
      </Section>
      {/*<Section id="contacto" title="Contacto" subtitle="Hablemos de tu proyecto">
        <Contact />
      </Section>*/}
      <footer className="w-full max-w-6xl mx-auto px-6 py-16 text-sm text-white/60">
        © {new Date().getFullYear()} Damian Marrone
      </footer>
    </main>
  );
}