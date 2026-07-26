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
    <section className="relative isolate overflow-hidden border-y border-slate-100 bg-[radial-gradient(circle_at_8%_14%,rgba(124,198,240,0.18),transparent_25%),radial-gradient(circle_at_92%_82%,rgba(11,79,158,0.12),transparent_28%),linear-gradient(135deg,#FFFFFF_0%,#F4FBFF_48%,#EEF7FF_100%)] py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-24 -top-28 h-[440px] w-[440px] rounded-full bg-[#BEE6FB]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 right-0 h-[460px] w-[460px] rounded-full bg-[#CFEAFF]/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(112deg,rgba(255,255,255,0.94),rgba(255,255,255,0.35)_40%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#A8D9F3]/75 to-transparent" />

      <Container className="relative flex flex-col gap-14 max-w-7xl mx-auto [&_h2]:text-slate-950">
        <SectionHeading
          eyebrow="Quality In Motion"
          eyebrowColorClass="text-[#0B4F9E]"
          descriptionColorClass="text-slate-600"
          title="Watch Our Testing Process In Action"
          description="Every batch is verified through dimensional, impact, and bend-strength testing before dispatch. These are real clips from our in-house quality lab."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative rounded-[32px] border border-white/90 bg-white/65 p-2 shadow-[0_24px_60px_rgba(11,79,158,0.13),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-[#A8DDF8]/25 blur-2xl" />
            <div className="relative aspect-video overflow-hidden rounded-[23px] border border-white/20 bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
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
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(112deg,rgba(255,255,255,0.20),transparent_58%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/28 to-transparent p-5 sm:p-6">
                <span className="text-sm font-bold tracking-[0.01em] text-white sm:text-base">{qualityClips[active].label}</span>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={toggleMute}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/16 text-white shadow-[0_6px_16px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.36)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/92 text-[#0B4F9E] shadow-[0_7px_18px_rgba(0,0,0,0.26),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 lg:gap-4">
            {qualityClips.map((clip, index) => (
              <motion.button
                key={clip.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.015 }}
                onClick={() => {
                  setActive(index);
                  setPlaying(true);
                }}
                className={`group/thumb relative aspect-video overflow-hidden rounded-[20px] border bg-white/65 p-1 shadow-[0_10px_22px_rgba(11,79,158,0.12),inset_0_1px_0_rgba(255,255,255,0.75)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F9E] ${
                  active === index
                    ? "scale-[1.015] border-[#7AC7F0] shadow-[0_0_0_1px_rgba(122,199,240,0.38),0_16px_30px_rgba(11,79,158,0.20),0_0_24px_rgba(122,199,240,0.24)]"
                    : "border-white/85 hover:border-[#A8DDF8] hover:shadow-[0_14px_28px_rgba(11,79,158,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]"
                }`}
              >
                <div className="relative h-full overflow-hidden rounded-[13px]">
                  <img src={clip.poster} alt={clip.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.74))]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-[linear-gradient(110deg,rgba(255,255,255,0.24),transparent_66%)]" />
                </div>
                <span className="absolute bottom-3 left-3 right-3 text-left text-[10px] font-bold leading-tight tracking-[0.01em] text-white sm:text-[11px]">
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
