import Image from "next/image";
import ServiceCard from "./service-card";
import { $t } from "@/utils/lang.utils";

function InnerServiceTile({ title, icon, isLast }) {
    return (
        <div className="flex gap-2.5 pb-2.5" style={ { borderBottom: !isLast ? '1px solid #F6F8FA' : 'none' } }>
            <div className="p-1.5 rounded-md self-start" style={ { border: '1px solid #E3E7EC' } }>
                <Image
                    src={ icon }
                    alt={ title }
                    width={ 20 }
                    height={ 20 }
                />
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
            />
            <div className="flex justify-between w-full items-center">
                <p className="text-primary font-medium">{ title }</p>
                <span className={ `text-xs ${percent > 0 ? '' : 'text-gray'}`}>{ percent !== null ? `${percent}%` : '' }</span>
        </div>
        </div >
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
                            <span className="text-primary text-2xl font-semibold">1 248</span>
                            <div className="flex items-center">
                                <Image
                                    src="/percent-up.svg"
                                    alt="percent up"
                                    width={ 16 }
                                    height={ 16 }
                                />
                                <span className="text-p-green font-medium">32%</span>
                            </div>
                        </div>
                        <span className="text-graphite text-xs">{ $t('services.lead_generation.to_prev_month', lang) }</span>
                    </div>
                    <Image
                        src='/graph-1.svg'
                        alt='lead_generation graph'
                        width={ 181 }
                        height={ 71 }
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    {
                        ['targeting', 'seo', 'analytics'].map((item, index) => (
                            <InnerServiceTile
                                key={ index }
                                title={ $t(`services.lead_generation.${item}`, lang) }
                                icon={ `/${item}.svg` }
                                isLast={ index === 2 }
                            />
                        ))
                    }
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
                {
                    [['analytics', null], ['ui', null], ['develop', 60], ['tests', 0]].map((item, index) => (
                        <TodoServiceTile
                            key={ index }
                            title={ $t(`services.development.${item[0]}`, lang) }
                            checked={ index < 3 }
                            percent={ item[1] }
                            isLast={ index === 3 }
                        />
                    ))
                }
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
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <Image
                                            key={ index }
                                            src="/star.svg"
                                            alt="star"
                                            width={ 14 }
                                            height={ 14 }
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <span className="text-graphite text-xs">{ $t('services.reputation.based_on', lang) }</span>
                    </div>
                    <Image
                        src='/graph-2.svg'
                        alt='reputation graph'
                        width={ 181 }
                        height={ 71 }
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    {
                        ['reviews', 'pr', 'soc_media'].map((item, index) => (
                            <InnerServiceTile
                                key={ index }
                                title={ $t(`services.reputation.${item}`, lang) }
                                icon={ `/${item}.svg` }
                                isLast={ index === 2 }
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
    return null;
}

export default function ServicesSection({ lang }) {
    const services_codes = ['lead_generation', 'development', 'reputation'];

    const cards = services_codes.map(code => ({
        title: $t(`services.${code}.title`, lang),
        description: $t(`services.${code}.description`, lang),
        icon: `/${code}.svg`,
        link: `/${lang}/`,
        content: (<ServiceContent code={ code } lang={ lang } />),
        items: (<InnerServiceTile code={ code } lang={ lang } />)
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

