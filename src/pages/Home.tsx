import MusicButton from "@/components/MusicButton";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import StorySection from "@/components/StorySection";
import CountdownSection from "@/components/CountdownSection";
import InfoSection from "@/components/InfoSection";
import LocationSection from "@/components/LocationSection";
import CalendarSection from "@/components/CalendarSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-300">
      <MusicButton />
      <HeroSection />
      <InvitationSection />
      <StorySection />
      <CountdownSection />
      <InfoSection />
      <LocationSection />
      <CalendarSection />
      <FooterSection />
    </div>
  );
}
