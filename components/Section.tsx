import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative w-full max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="text-white/70 mt-1">{subtitle}</p> : null}
        </div>
        <div className="h-px flex-1 ml-6 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <div className="rounded-2xl glass p-6 shadow-soft">{children}</div>
    </section>
  );
}