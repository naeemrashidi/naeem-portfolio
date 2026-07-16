import {
  CallToAction,
  FadeInUp,
  HeroSection,
  Projects,
  TechnicalSkills,
  WorkExperience,
} from "@/components";

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-8 bg-background text-foreground">
      <FadeInUp delay={0.2}>
        <HeroSection />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <WorkExperience />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <TechnicalSkills />
      </FadeInUp>

      <FadeInUp delay={0.5}>
        <Projects />
      </FadeInUp>

      <FadeInUp delay={1.4}>
        <CallToAction />
      </FadeInUp>
    </main>
  );
}
