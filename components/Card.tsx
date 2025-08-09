export default function Card({ title, description, stack, link }: { title: string; description: string; stack: string[]; link?: string }) {
  return (
    <a href={link || "#"} className="block group rounded-2xl glass p-6 hover:border-primary/50 transition">
      <div className="text-lg font-medium group-hover:text-primary transition">{title}</div>
      <p className="mt-2 text-white/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-2.5 py-1">{t}</span>
        ))}
      </div>
    </a>
  );
}