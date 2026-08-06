import Image from "next/image";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/icons/arrow-icon";
import { PeopleIcon } from "@/components/icons/people-icon";
import { TargetIcon } from "@/components/icons/target-icon";
import { $t } from "@/utils/lang.utils";

const WA_LINK = process.env.NEXT_PUBLIC_WA_LINK;
const TG_LINK = process.env.NEXT_PUBLIC_TG_LINK;

export default function HeroSection({ lang = 'ru' }) {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
            {/* Text content */ }
            <div className="order-2 lg:order-1 max-w-xl min-w-0 shrink-0 flex flex-col gap-3.5 lg:gap-15">
                <div className="flex flex-col gap-6 lg:gap-7.5">
                    <div className="bg-soft-surface px-2.5 py-3 rounded-sm self-start">
                        <span className="text-graphite font-medium">{ $t('menu.lead_generation', lang) }</span>
                    </div>
                    <h1 className="text-primary text-4xl lg:text-6xl font-semibold leading-tight">
                        { $t('lead_generation.hero.title', lang) }
                    </h1>
                    <p className="text-graphite text-lg lg:text-2xl">
                        { $t('lead_generation.hero.subtitle', lang) }
                    </p>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center gap-4 lg:gap-5 w-full">
                        <LinkButton href={ `/${lang}/discuss` } className="w-full lg:w-auto">
                            <div className="flex items-center justify-center gap-2.5">
                                <span className="text-white">{ $t('common.discuss_project', lang) }</span>
                                <ArrowIcon />
                            </div>
                        </LinkButton>
                        <div className="grid grid-cols-2 gap-4 lg:contents">
                            { WA_LINK && (
                                <LinkButton href={ WA_LINK } dark={ false } className="w-full lg:w-auto text-center">
                                    WhatsApp
                                </LinkButton>
                            ) }
                            { TG_LINK && (
                                <LinkButton href={ TG_LINK } dark={ false } className="w-full lg:w-auto text-center">
                                    Telegram
                                </LinkButton>
                            ) }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-7.5 lg:items-center">
                    <div className="flex items-center gap-2.5">
                        <div className="rounded-md p-2.5 border border-border-gray">
                            <PeopleIcon size={ 16 } className="text-gray" />
                        </div>
                        <span className="text-sm text-gray font-medium">{ $t('lead_generation.hero.niche', lang) }</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="rounded-md p-2.5 border border-border-gray">
                            <TargetIcon size={ 16 } className="text-gray" />
                        </div>
                        <span className="text-sm text-gray font-medium">{ $t('lead_generation.hero.focus', lang) }</span>
                    </div>
                </div>
            </div>
            { /* Image */ }
            <div className="order-1 lg:order-2 w-full lg:flex-1 min-w-0 flex justify-center lg:block relative">
                <div
                    className="absolute rounded-xl lg:rounded-4xl top-0 left-0 w-83.75 h-60 lg:w-full lg:h-105 lg:max-w-231.25"
                    style={ {
                        opacity: 1,
                        transform: 'rotate(5deg)',
                        transformOrigin: 'center center',
                        background:
                            'linear-gradient(188.21deg, rgba(232, 233, 237, 0) -4.14%, rgba(200, 201, 205, 0.5) 103.47%)',
                        boxShadow:
                            'var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100), var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-200)',
                        zIndex: 0,
                    } }
                />
                <Image
                    src="/leads_hero.png"
                    alt="Hero Image"
                    width={ 753 }
                    height={ 541 }
                    loading="eager"
                    priority
                    className="relative z-10 w-83.75 h-65 object-cover lg:w-full lg:h-auto lg:max-w-231.25 lg:object-fill"
                />
            </div>
        </section>
    );
}