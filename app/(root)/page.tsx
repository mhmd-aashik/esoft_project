import Review from "@/components/shared/home/Review";
import ShuffleHero from "@/components/shared/home/ShuffleHero";
import VideoSction from "@/components/shared/home/VideoSction";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <ShuffleHero />
      <VideoSction />
      <Review />
    </main>
  );
}
