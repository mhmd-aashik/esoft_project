import Accordion from "@/components/shared/home/Accordion";
import LogoSlider from "@/components/shared/home/LogoSlider";
import Review from "@/components/shared/home/Review";
import ShuffleHero from "@/components/shared/home/ShuffleHero";
import VideoSction from "@/components/shared/home/VideoSction";
import { questAnsw } from "@/constants";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <ShuffleHero />
      <LogoSlider />
      <VideoSction />
      <Review />
      <Accordion />
    </main>
  );
}
