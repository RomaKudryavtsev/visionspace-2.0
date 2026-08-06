import HeroSection from '@/features/lead-generation/hero-section';
import SubheroSection from '@/features/lead-generation/subhero-section';
import WorkScopeSection from "@/features/common/work-scope-section";
import ProcessSection from "@/features/common/process-section";
import ApproachSection from "@/features/common/approach-section";
import DiscussSection from "@/features/common/discuss-section";
import { $t } from "@/utils/lang.utils";

export default function LeadGenerationPage({ lang }) {
    return (
        <div>
            <HeroSection lang={ lang } />
            <SubheroSection lang={ lang } />
            <WorkScopeSection lang={ lang } />
            <ProcessSection
                lang={ lang }
                isDark={ false }
                title={ $t('lead_generation.process.title', lang) }
                subtitle={ $t('lead_generation.process.subtitle', lang) }
                page="lead_generation"
            />
            <ApproachSection lang={ lang } />
            <DiscussSection lang={ lang } />
        </div>
    );
}