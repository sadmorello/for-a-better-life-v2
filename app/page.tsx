
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bem vindo ao App quem busca&nbsp;</span>
        <br />
        <span className={title({ color: "violet" })}>Uma vida melhor</span>

      </div>
    </section>
  );
}
