import Image from "next/image";
import { $t } from "@/utils/lang.utils";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/arrow-icon";
import WhyUsCard from "./why-us-card";

export default function WhyUsSection({ lang }) {
    const cards = ['systematic', 'client_growth', 'production', 'partners'];

    return (
        <section className="flex flex-col gap-7.5 items-center justify-center">
            <div className="flex flex-col gap-3.5 items-center">
                <div className="bg-soft-surface rounded-sm py-2.5 px-3 text-graphite">
                    { $t('why_us.badge', lang) }
                </div>
                <h2 className="text-3xl lg:text-5xl font-semibold lg:text-center text-primary">
                    { $t('why_us.title', lang) }
                </h2>
                <p className="text-graphite text-base lg:text-lg">{ $t('why_us.description', lang) }</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-stretch gap-5">
                {/* 2x2 grid */ }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        cards.map((card) => (
                            <WhyUsCard
                                key={ card }
                                title={ $t(`why_us.reasons.${card}.title`, lang) }
                                description={ $t(`why_us.reasons.${card}.description`, lang) }
                                icon={ `/${card}` + '.svg' }
                            />
                        ))
                    }
                </div>
                {/* Banner */ }
                <div className="relative w-full lg:w-105 h-99.5 lg:h-auto overflow-hidden rounded-xl">
                    <Image
                        src="/why_us_banner.png"
                        alt="Why Us Banner"
                        fill
                        style={ { objectFit: 'cover' } }
                        className="z-0"
                    />
                    <div className="relative z-10 h-full flex flex-col p-7.5">
                        <div className="mt-auto flex flex-col gap-5">
                            <span className="text-xl lg:text-2xl font-normal lg:font-semibold text-white">{ $t('why_us.banner', lang) }</span>
                            <LinkButton href={ `/${lang}/discuss` } dark={ false } className="self-start">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-primary">{ $t('common.discuss_project', lang) }</span>
                                    <ArrowIcon dark />
                                </div>
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}