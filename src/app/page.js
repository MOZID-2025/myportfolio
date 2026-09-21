import Academic from "@/components/Academic";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <WhoAmI />
      <Experience />
      <Academic />
      <Skills />
    </div>
  );
}
