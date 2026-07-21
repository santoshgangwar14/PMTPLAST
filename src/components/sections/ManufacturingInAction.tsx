import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface ClipItem {
  id: string;
  src: string;
  poster: string;
  label: string;
}

const featuredVideos = [
  { id: "plant", src: "/videos/plant-overview.mp4", poster: "/videos/posters/plant-overview.jpg", label: "Plant Overview" },
  { id: "prodline", src: "/videos/production-line.mp4", poster: "/videos/posters/production-line.jpg", label: "Production Line" },
  { id: "extrusion", src: "/videos/extrusion-process.mp4", poster: "/videos/posters/extrusion-process.jpg", label: "Extrusion Process" },
];

const clips: ClipItem[] = [
  { id: "bend", src: "/videos/pipe-bend-test.mp4", poster: "/videos/posters/pipe-bend-test.jpg", label: "Pipe Bend Strength Test" },
  { id: "c1", src: "/videos/factory-clip-1.mp4", poster: "/videos/posters/factory-clip-1.jpg", label: "Shop Floor" },
  { id: "c2", src: "/videos/factory-clip-2.mp4", poster: "/videos/posters/factory-clip-2.jpg", label: "Extrusion Line" },
  { id: "c3", src: "/videos/factory-clip-3.mp4", poster: "/videos/posters/factory-clip-3.jpg", label: "Batch Testing" },
  { id: "c4", src: "/videos/factory-clip-4.mp4", poster: "/videos/posters/factory-clip-4.jpg", label: "Material Handling" },
  { id: "c5", src: "/videos/factory-clip-5.mp4", poster: "/videos/posters/factory-clip-5.jpg", label: "Quality Inspection" },
  { id: "c6", src: "/videos/factory-clip-6.mp4", poster: "/videos/posters/factory-clip-6.jpg", label: "Finished Goods" },
];

const FeaturedPlayer = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video overflow-hidden rounded-[28px] border border-line bg-primary shadow-industrial-lg">
        <video
          ref={videoRef}
          key={featuredVideos[active].id}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
          poster={featuredVideos[active].poster}
        >
          <source src={featuredVideos[active].src} type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-5">
          <span className="text-sm font-semibold text-white">{featuredVideos[active].label}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {featuredVideos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => {
              setActive(index);
              setPlaying(true);
            }}
            className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
              active === index ? "border-accent" : "border-line"
            }`}
          >
            <img src={video.poster} alt={video.label} className="aspect-video w-full object-cover" />
            <span className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">{video.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ClipCard = ({ clip, index }: { clip: ClipItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative aspect-[9/16] w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-line bg-primary shadow-industrial sm:w-48"
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={clip.poster}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <span className="text-xs font-semibold leading-tight text-white">{clip.label}</span>
      </div>
    </motion.div>
  );
};

const ManufacturingInAction = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Manufacturing In Action"
          title="Real Footage From Our Production Floor"
          description="From resin extrusion to pipe bend-strength testing, watch how PMT Plast conduit systems are engineered — straight from our manufacturing plants."
        />

        <FeaturedPlayer />

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            More From the Shop Floor
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {clips.map((clip, index) => (
              <ClipCard key={clip.id} clip={clip} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManufacturingInAction;
