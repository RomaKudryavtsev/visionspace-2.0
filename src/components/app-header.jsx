import Link from 'next/link';
import Image from 'next/image';
import LangSwitcher from './lang-switcher';
import ArrowIcon from './arrow-icon';
import LinkButton from './link-button';
import { $t } from '@/utils/lang.utils';

export default function AppHeader({ lang = 'ru' }) {
    return (
        <header className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center gap-20">
                <Image
                    src="/logo-default.svg"
                    alt="VisionSpace Logo"
                    width={ 161 }
                    height={ 31 }
                    loading="eager"
                />
                <nav className="flex gap-9 items-center" style={ { listStyleType: 'none' } }>
                    <li>
                        <Link
                            href={ `/${lang}/` }
                            className="text-graphite hover:underline"
                        >
                            <span>{ $t('menu.about_us', lang) }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ `/${lang}/` }
                            className="text-graphite hover:underline"
                        >
                            <span>{ $t('menu.lead_generation', lang) }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ `/${lang}/` }
                            className="text-graphite hover:underline"
                        >
                            <span>{ $t('menu.development', lang) }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ `/${lang}/` }
                            className="text-graphite hover:underline"
                        >
                            <span>{ $t('menu.reputation', lang) }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ `/${lang}/` }
                            className="text-graphite hover:underline"
                        >
                            <span>{ $t('menu.faq', lang) }</span>
                        </Link>
                    </li>
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <LangSwitcher lang={ lang } />
                <LinkButton href={ `/${lang}/` }>
                    <div className="flex items-center gap-2.5">
                        <span className="text-white">{ $t('common.discuss_project', lang) }</span>
                        <ArrowIcon />
                    </div>
                </LinkButton>
            </div>
        </header>
    );
}