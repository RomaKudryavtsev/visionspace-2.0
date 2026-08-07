"use client";

import { useState } from "react";
import Image from "next/image";
import ServiceCard from "./service-card";
import GrowthMetrics from "@/components/growth-metrics";
import { $t } from "@/utils/lang.utils";

function InnerServiceTile({ title, icon, isLast }) {
    return (
        <div className="flex gap-2.5 pb-2.5" style={ { borderBottom: !isLast ? '1px solid #F6F8FA' : 'none' } }>
            <div className="p-1.5 rounded-md self-start" style={ { border: '1px solid #E3E7EC' } }>
                <Image src={ icon } alt={ title } width={ 20 } height={ 20 } style={ { width: 'auto', height: 'auto' } } />
            </div>
            <p className="text-primary font-medium">{ title }</p>
        </div>
    );
}

function TodoServiceTile({ title, checked, percent, isLast }) {
    return (
        <div className="flex pb-2.5 gap-2.5" style={ { borderBottom: !isLast ? '1px solid #F6F8FA' : 'none' } }>
            <Image
                src={ checked ? "/checked.svg" : "/unchecked.svg" }
                alt={ checked ? "checked" : "unchecked" }
                width={ 18 }
                height={ 18 }
                style={ { width: 'auto', height: 'auto' } }
            />
            <div className="flex justify-between w-full items-center">
                <p className="text-primary font-medium">{ title }</p>
                <span className={ `text-xs ${percent > 0 ? '' : 'text-gray'}` }>{ percent !== null ? `${percent}%` : '' }</span>
            </div>
        </div>
    );
}

function ServiceContent({ code, lang }) {
    if (code === 'lead_generation') {
        return (
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-primary font-medium">{ $t('services.lead_generation.requests', lang) }</span>
                        <div className="flex gap-2.5 items-center">
                            <span className="text-primary text-xl lg:text-2xl font-normal lg:font-semibold">1 248</span>
                            <GrowthMetrics title="32%" />
                        </div>
                        <span className="text-graphite text-xs">{ $t('services.lead_generation.to_prev_month', lang) }</span>
                    </div>
                    <Image
                        src='/graph-1.svg'
                        alt='lead_generation graph'
                        width={ 181 }
                        height={ 71 }
                        className="w-27.5 lg:w-45.25"
                        style={ { height: 'auto' } }
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    { ['targeting', 'seo', 'analytics'].map((item, index) => (
                        <InnerServiceTile key={ index } title={ $t(`services.lead_generation.${item}`, lang) } icon={ `/${item}` + '.svg' } isLast={ index === 2 } />
                    )) }
                </div>
            </div>
        );
    } else if (code === 'development') {
        return (
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <span className="text-primary font-medium">{ $t('services.development.current_project', lang) }</span>
                    <div className="flex items-center gap-1.5">
                        <div className="rounded-full w-1 h-1 bg-p-green" />
                        <span className="text-p-green text-xs">{ $t('services.development.wip', lang) }</span>
                    </div>
                </div>
                { [['analytics', null], ['ui', null], ['develop', 60], ['tests', 0]].map((item, index) => (
                    <TodoServiceTile
                        key={ index }
                        title={ $t(`services.development.${item[0]}`, lang) }
                        checked={ index < 3 }
                        percent={ item[1] }
                        isLast={ index === 3 }
                    />
                )) }
            </div>
        );
    } else if (code === 'reputation') {
        return (
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-primary font-medium">{ $t('services.reputation.brand_rating', lang) }</span>
                        <div className="flex gap-2.5 items-center">
                            <span className="text-primary text-2xl font-semibold">4.8</span>
                            <div className="flex items-center">
                                { Array.from({ length: 5 }).map((_, index) => (
                                    <Image key={ index } src="/star.svg" alt="star" width={ 14 } height={ 14 } style={ { width: 'auto', height: 'auto' } } />
                                )) }
                            </div>
                        </div>
                        <span className="text-graphite text-xs">{ $t('services.reputation.based_on', lang) }</span>
                    </div>
                    <Image
                        src='/graph-2.svg'
                        alt='reputation graph'
                        width={ 181 }
                        height={ 71 }
                        className="w-27.5 lg:w-45.25"
                        style={ { height: 'auto' } }
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    { ['reviews', 'pr', 'soc_media'].map((item, index) => (
                        <InnerServiceTile key={ index } title={ $t(`services.reputation.${item}`, lang) } icon={ `/${item}` + '.svg' } isLast={ index === 2 } />
                    )) }
                </div>
            </div>
        );
    }
    return null;
}
export default function ServicesSection({ lang }) {
    const services_codes = [
        { code: 'lead_generation', href: `/${lang}/lead-generation` }, 
        { code: 'development', href: `/${lang}/development` }, 
        { code: 'reputation', href: `/${lang}/reputation` }
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = services_codes.map(({ code, href }) => ({
        title: $t(`services.${code}.title`, lang),
        description: $t(`services.${code}.description`, lang),
        icon: `/${code}` + '.svg',
        link: href,
        content: (<ServiceContent code={ code } lang={ lang } />),
    }));

    const goPrev = () => setActiveIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
    const goNext = () => setActiveIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));

    return (
        <div className="bg-soft-surface w-full">
            <section className="flex flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-3.5 items-center max-w-3xl">
                    <h2 className="text-primary text-3xl lg:text-5xl font-semibold text-center">
                        { $t('services.title', lang) }
                    </h2>
                    <p className="text-graphite text-base lg:text-lg text-center">
                        { $t('services.subtitle', lang) }
                    </p>
                </div>

                {/* Desktop: static row, all cards visible */ }
                <div className="hidden lg:flex items-center gap-5">
                    { cards.map((card, index) => (
                        <ServiceCard key={ index } { ...card } lang={ lang } />
                    )) }
                </div>

                {/* Mobile: carousel — arrows float on top of the card edges, not beside it */ }
                <div className="relative flex lg:hidden items-center w-full">
                    <button
                        type="button"
                        onClick={ goPrev }
                        aria-label="Previous"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-13.75 h-13.75 rounded-full flex items-center justify-center"
                        style={ { background: '#E3E7EC1A', border: '1px solid #E3E7EC80' } }
                    >
                        <Image
                            src="/chevron-left.svg"
                            alt="Previous"
                            width={ 32 }
                            height={ 32 }
                        />
                    </button>

                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-300 ease-out"
                            style={ {
                                width: `${cards.length * 100}%`,
                                transform: `translateX(-${(100 / cards.length) * activeIndex}%)`
                            } }
                        >
                            { cards.map((card, index) => (
                                <div
                                    key={ index }
                                    className="shrink-0 flex justify-center"
                                    style={ { width: `${100 / cards.length}%` } }
                                >
                                    <ServiceCard { ...card } lang={ lang } />
                                </div>
                            )) }
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={ goNext }
                        aria-label="Next"
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-13.75 h-13.75 rounded-full flex items-center justify-center"
                        style={ { background: '#E3E7EC1A', border: '1px solid #E3E7EC80' } }
                    >
                        <Image
                            src="/chevron-right.svg"
                            alt="Next"
                            width={ 32 }
                            height={ 32 }
                        />
                    </button>
                </div>
            </section>
        </div>
    );
}