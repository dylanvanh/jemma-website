import Particles from "@/components/particles";

export default function Gallery() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        GALLERY
      </h1>
      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
    </div>
  );
}
