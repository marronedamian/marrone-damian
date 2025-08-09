export default function Contact() {
  return (
    <form action="#" className="grid gap-4 md:grid-cols-2">
      <input required placeholder="Nombre" className="glass rounded-xl px-4 py-3 outline-none" />
      <input required type="email" placeholder="Email" className="glass rounded-xl px-4 py-3 outline-none" />
      <input placeholder="Asunto" className="glass rounded-xl px-4 py-3 outline-none md:col-span-2" />
      <textarea placeholder="Mensaje" rows={5} className="glass rounded-xl px-4 py-3 outline-none md:col-span-2"></textarea>
      <button className="rounded-xl bg-primary text-white px-5 py-3 md:col-span-2 hover:opacity-90 transition">Enviar</button>
    </form>
  );
}