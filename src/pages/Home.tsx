import MusicButton from "@/components/MusicButton";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EnvelopeSection from "@/components/EnvelopeSection";
import InfoSection from "@/components/InfoSection";
import TimelineSection from "@/components/TimelineSection";
import LocationSection from "@/components/LocationSection";
import StorySection from "@/components/StorySection";
import TipsSection from "@/components/TipsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal-300">
      <MusicButton />
      <main className="max-w-md mx-auto bg-cream shadow-sm">
        <HeroSection />
        <InvitationSection />
        <EnvelopeSection />
        <InfoSection />
        <TimelineSection />
        <LocationSection />
        <StorySection />
        <TipsSection />
        <FooterSection />
      </main>
    </div>
  );
}
