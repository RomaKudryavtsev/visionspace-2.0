import Image from "next/image";
import Link from "next/link";
import { $t } from '@/utils/lang.utils';

export default function AppFooter({ lang = 'ru' }) {
    return (
        <footer className="bg-soft-surface pt-12.5 pb-10">
            <div className="container mx-auto flex flex-col gap-10">
                {/* Info row */ }
                <div className="flex justify-between">
                    <div className="w-66">
                        <span>{ $t('footer.description', lang) }</span>
                    </div>
                    <div className="flex gap-5">
                        {/* Services */ }
                        <div className="flex flex-col gap-5">
                            <span className="text-gray text-lg">{ $t('footer.services', lang) }</span>
                            <div className="flex flex-col gap-3.5">
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('menu.lead_generation', lang) }</span>
                                </Link>
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('menu.development', lang) }</span>
                                </Link>
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('menu.reputation', lang) }</span>
                                </Link>
                            </div>
                        </div>
                        {/* Information */ }
                        <div className="flex flex-col gap-5">
                            <span className="text-gray text-lg">{ $t('footer.info', lang) }</span>
                            <div className="flex flex-col gap-3.5">
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('footer.about_company', lang) }</span>
                                </Link>
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('footer.privacy_policy', lang) }</span>
                                </Link>
                                <Link
                                    href={ `/${lang}/` }
                                    className="text-graphite"
                                >
                                    <span>{ $t('menu.faq', lang) }</span>
                                </Link>
                            </div>
                        </div>
                        {/* Contacts */ }
                        <div className="flex flex-col gap-5 w-80">
                            <span className="text-gray text-lg">{ $t('footer.contacts', lang) }</span>
                            <div className="flex flex-col gap-3.5">
                                <span className="text-graphite">+971 52 220 8707</span>
                                <Link
                                    href="mailto:info@visionspace.io"
                                    className="text-graphite"
                                >
                                    <span>info@visionspace.io</span>
                                </Link>
                                <span className="text-graphite">Sobha Sapphire Bldg. OFFICE 501 - 502, Business Bay, Dubai, UAE</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Logo row */ }
                <div className="flex justify-between items-center">
                    <Image
                        src="/logo-default.svg"
                        alt="VisionSpace Logo"
                        width={ 300 }
                        height={ 58 }
                    />
                    <span className="text-graphite">{ $t('footer.copyright', lang) }</span>

                </div>
            </div>
        </footer>
    );
}