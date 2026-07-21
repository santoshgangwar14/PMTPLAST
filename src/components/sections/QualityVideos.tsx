import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface QualityClip {
  id: string;
  src: string;
  poster: string;
  label: string;
}

// All clips reference real files already present in /public/videos and the
// posters generated from those same videos in /public/posters/generated —
// no invented filenames, no stock/placeholder media.
const qualityClips: QualityClip[] = [
  { id: "qc1", src: "/videos/QC1.mp4", poster: "/posters/generated/QC1.jpg", label: "Dimensional Inspection" },
  { id: "qc2", src: "/videos/QC2.mp4", poster: "/posters/generated/QC2.jpg", label: "Impact Resistance Test" },
  { id: "qc3", src: "/videos/QC3.mp4", poster: "/posters/generated/QC3.jpg", label: "Wall Thickness Check" },
  { id: "qc4", src: "/videos/QC4.mp4", poster: "/posters/generated/QC4.jpg", label: "Surface Finish Audit" },
  { id: "qc5", src: "/videos/QC5.mp4", poster: "/posters/generated/QC5.jpg", label: "Batch Sampling" },
  { id: "bend", src: "/videos/pipe-bend-test.mp4", poster: "/posters/pipe-bend-test.jpg", label: "Pipe Bend Strength Test" },
];

const QualityVideos = () => {
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
    <section className="relative overflow-hidden py-28 lg:py-40" style={{ background: "linear-gradient(135deg,#C1495B 0%,#A5313F 48%,#7E1F2B 100%)" }}>
      {/* Glossy highlight sweep — soft light pooling top-left like a lacquered surface */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 gloss-edge pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.06] pointer-events-none" />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Quality In Motion"
          light
          eyebrowColorClass="text-[#FBD9B0]"
          descriptionColorClass="text-white/85"
          title="Watch Our Testing Process In Action"
          description="Every batch is verified through dimensional, impact, and bend-strength testing before dispatch. These are real clips from our in-house quality lab."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          {/* Main player */}
          <div className="relative aspect-video overflow-hidden rounded-[28px] border border-white/15 bg-slate-900 shadow-2xl shadow-black/30">
            <video
              ref={videoRef}
              key={qualityClips[active].id}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted={muted}
              playsInline
              poster={qualityClips[active].poster}
            >
              <source src={qualityClips[active].src} type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent p-5">
              <span className="text-sm font-semibold text-white">{qualityClips[active].label}</span>
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#A5313F] transition-colors hover:bg-rose-50"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
                </button>
              </div>
            </div>
          </div>

          {/* Clip list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {qualityClips.map((clip, index) => (
              <motion.button
                key={clip.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => {
                  setActive(index);
                  setPlaying(true);
                }}
                className={`relative aspect-video overflow-hidden rounded-xl border transition-colors duration-300 ${
                  active === index ? "border-white" : "border-white/15"
                }`}
              >
                <img src={clip.poster} alt={clip.label} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-1.5 left-2 right-2 text-[10px] sm:text-[11px] font-semibold text-white leading-tight text-left">
                  {clip.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QualityVideos;
