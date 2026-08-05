import SubheroCard from "./subhero-card";
import { $t } from "@/utils/lang.utils";

export default function SubheroSection({ lang = 'ru' }) {
    const cards = ['price', 'lack_system', 'weak_conversion', 'no_analytics']
        .map((key, index) => (
            <SubheroCard
                key={ key }
                index={ index }
                title={ $t(`lead_generation.subhero.problems.${key}_title`, lang) }
                description={ $t(`lead_generation.subhero.problems.${key}_desc`, lang) }
            />
        ));

    return (
        <div className="bg-soft-surface w-full">
            <section className="flex flex-col gap-5 items-center justify-center">
                <h2 className="text-start lg:text-center w-full font-semibold text-primary text-3xl lg:text-5xl">{ $t('lead_generation.subhero.title', lang) }</h2>
                <p className="text-graphite text-base lg:text-lg font-medium lg:font-normal">{ $t('lead_generation.subhero.subtitle', lang) }</p>
                <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-5">
                    { cards }
                </div>
            </section>
        </div>
    );
}