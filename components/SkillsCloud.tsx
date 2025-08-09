import Badge from "./Badge";

export default function SkillsCloud({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => <Badge key={s}>{s}</Badge>)}
    </div>
  );
}