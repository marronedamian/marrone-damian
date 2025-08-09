export default function Navbar() {
  const items = [
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#education", label: "Educación" },
    //{ href: "#contacto", label: "Contacto" }
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl">
        <div className="m-4 glass rounded-full px-5 py-3 flex items-center gap-6">
          <div className="text-sm font-medium">DM</div>
          <ul className="hidden md:flex gap-4 text-sm text-white/80">
            {items.map(i => (
              <li key={i.href}><a className="hover:text-primary transition" href={i.href}>{i.label}</a></li>
            ))}
          </ul>
          {/* <a href="#contacto" className="ml-auto rounded-full bg-primary text-white px-4 py-2 text-sm hover:opacity-90 transition">Contacto</a> */}
        </div>
      </nav>
    </header>
  );
}