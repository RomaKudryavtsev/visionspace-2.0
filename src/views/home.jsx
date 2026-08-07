import DiscussSection from "@/features/common/discuss-section";
import HeroSection from "@/features/home/hero-section";
import ProcessSection from "@/features/common/process-section";
import ResultSection from "@/features/home/result-section";
import ServicesSection from "@/features/home/services-section";
import WhyUsSection from "@/features/home/why-us-section";
import { $t } from "@/utils/lang.utils";

export default function HomePage({ lang }) {
    return (
        <div>
            <HeroSection lang={ lang } />
            <ServicesSection lang={ lang } />
            <ProcessSection
                lang={ lang }
                title={ $t('process.title', lang) }
                subtitle={ $t('process.subtitle', lang) }
                page="home"
            />
            <ResultSection lang={ lang } />
            <WhyUsSection lang={ lang } />
            <DiscussSection lang={ lang } />
        </div>
    );
}