import { $t } from "@/utils/lang.utils";
import ServiceCard from "./service-card";

export default function ServicesSection({ lang }) {

    function getContent(code, lang) {
        if (code === 'lead_generation') {
            return (
                <></>
            );
        } else if (code === 'development') {
            return (
                <></>
            );
        } else if (code === 'reputation') {
            return (
                <></>
            );
        }
        return null;
    }

    const services_codes = ['lead_generation', 'development', 'reputation'];

    const cards = services_codes.map(code => ({
        title: $t(`services.${code}.title`, lang),
        description: $t(`services.${code}.description`, lang),
        icon: `/${code}.svg`,
        link: `/${lang}/`,
        content: getContent(code, lang)
    }));

    return (
        <div className="bg-soft-surface w-full">
            <section className="flex flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-3.5 items-center max-w-3xl">
                    <h2 className="text-primary text-5xl font-semibold text-center">{ $t('services.title', lang) }</h2>
                    <p className="text-graphite text-lg text-center">{ $t('services.subtitle', lang) }</p>
                </div>
                <div className="flex items-center gap-5">
                    { cards.map((card, index) => (
                        <ServiceCard key={ index } { ...card } lang={ lang } />
                    )) }
                </div>
            </section>
        </div>
    );
}