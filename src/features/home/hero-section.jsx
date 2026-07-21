import Image from "next/image";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/arrow-icon";
import { $t } from "@/utils/lang.utils";

export default function HeroSection({ lang = 'ru' }) {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-16">
            {/* Left: text content */ }
            <div className="flex flex-col gap-6 lg:gap-8 max-w-xl min-w-0 shrink-0">
                <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                    { $t('hero.title', lang) }
                </h1>
                <p className="text-graphite text-lg sm:text-xl lg:text-2xl">
                    { $t('hero.subtitle', lang) }
                </p>
                <div className="flex flex-wrap items-center gap-5">
                    <LinkButton href="#contact">
                        <div className="flex items-center gap-2.5">
                            <span className="text-white">{ $t('common.discuss_project', lang) }</span>
                            <ArrowIcon />
                        </div>
                    </LinkButton>
                    <LinkButton href="https://wa.me/YOUR_NUMBER" external>
                        WhatsApp
                    </LinkButton>
                    <LinkButton href="https://t.me/YOUR_HANDLE" external>
                        Telegram
                    </LinkButton>
                </div>
            </div>
            {/* Right: image */ }
            <div className="w-full lg:flex-1 min-w-0">
                <Image
                    src="/image-hero.png"
                    alt="Hero Image"
                    width={ 925 }
                    height={ 776 }
                    loading="eager"
                    priority
                    className="w-full h-auto max-w-231.25"
                />
            </div>
        </section>
    );
}