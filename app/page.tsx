import { SectionProgress } from "@/components/section-progress";
import { Benefits } from "@/sections/benefits";
import { BusinessUnderstanding } from "@/sections/business-understanding";
import { ContinuityPlan } from "@/sections/continuity-plan";
import { DecisionReflection } from "@/sections/decision-reflection";
import { FinalCTA } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";
import { FutureExperience } from "@/sections/future-experience";
import { Hero } from "@/sections/hero";
import { ImplementationStages } from "@/sections/implementation-stages";
import { PersonalLetter } from "@/sections/personal-letter";
import { ProposalFeatures } from "@/sections/proposal-features";
import { Timeline } from "@/sections/timeline";

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="fixed top-4 left-4 z-50 -translate-y-24 rounded-lg bg-olive px-4 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <SectionProgress />
      <main id="contenido-principal">
        <Hero />
        <PersonalLetter />
        <BusinessUnderstanding />
        <ProposalFeatures />
        <FutureExperience />
        <Benefits />
        <Timeline />
        <ImplementationStages />
        <DecisionReflection />
        <ContinuityPlan />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
