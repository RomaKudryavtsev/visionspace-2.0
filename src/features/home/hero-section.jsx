import Image from "next/image";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/icons/arrow-icon";
import { $t } from "@/utils/lang.utils";

const WA_LINK = process.env.NEXT_PUBLIC_WA_LINK;
const TG_LINK = process.env.NEXT_PUBLIC_TG_LINK;

export default function HeroSection({ lang = 'ru' }) {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
            {/* Text content */ }
            <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-8 max-w-xl min-w-0 shrink-0">
                <h1 className="text-primary text-4xl lg:text-6xl font-semibold leading-tight">
                    { $t('hero.title', lang) }
                </h1>
                <p className="text-graphite text-lg lg:text-2xl">
                    { $t('hero.subtitle', lang) }
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
            {/* Image */ }
            <div className="order-1 lg:order-2 w-full lg:flex-1 min-w-0 flex justify-center lg:block">
                <Image
                    src="/image-hero.png"
                    alt="Hero Image"
                    width={ 925 }
                    height={ 776 }
                    loading="eager"
                    priority
                    className="w-83.75 h-70 object-cover lg:w-full lg:h-auto lg:max-w-231.25 lg:object-fill"
                />
            </div>
        </section>
    );
}