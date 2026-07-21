import DiscussSection from "@/features/home/discuss-section";
import HeroSection from "@/features/home/hero-section";
import ProcessSection from "@/features/home/process-section";
import ResultSection from "@/features/home/result-section";
import ServicesSection from "@/features/home/services-section";
import WhyUsSection from "@/features/home/why-us-section";

export default function HomePage({ lang }) {
    return (
        <div>
            <HeroSection lang={ lang } />
            <ServicesSection lang={ lang } />
            <ProcessSection lang={ lang } />
            <ResultSection lang={ lang } />
            <WhyUsSection lang={ lang } />
            <DiscussSection lang={ lang } />
        </div>
    );
}