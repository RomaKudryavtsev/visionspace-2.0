import WorkScopeSection from "@/features/common/work-scope-section";
import ProcessSection from "@/features/common/process-section";
import ApproachSection from "@/features/common/approach-section";
import DiscussSection from "@/features/common/discuss-section";
import { $t } from "@/utils/lang.utils";

export default function SoftwarePage({ lang }) {
    return (
        <div>
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