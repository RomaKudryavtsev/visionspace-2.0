import DiscussSection from "@/features/common/discuss-section";
import HeroSection from '@/features/lead-generation/hero-section';

export default function LeadGenerationPage({ lang }) {
    return (
        <div>
            <HeroSection lang={ lang } />
            <DiscussSection lang={ lang } />
        </div>
    );
}