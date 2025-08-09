export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
      {children}
    </span>
  );
}