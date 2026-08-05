import DiscussSection from "@/features/common/discuss-section";
import HeroSection from '@/features/lead-generation/hero-section';
import SubheroSection from '@/features/lead-generation/subhero-section';
import ProcessSection from "@/features/common/process-section";

export default function LeadGenerationPage({ lang }) {
    return (
        <div>
            <HeroSection lang={ lang } />
            <SubheroSection lang={ lang } />
            <ProcessSection lang={ lang } />
            <DiscussSection lang={ lang } />
        </div>
    );
}