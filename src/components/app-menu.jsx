"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMenu } from "@/store/global.store";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/icons/arrow-icon";
import { $t } from "@/utils/lang.utils";

const NAV_ITEMS = [
    { key: "about", href: "/", label: 'menu.about_us' }, // "О нас" — new translation key, no existing source
    { key: "lead_generation", href: "lead-generation", label: "menu.lead_generation" },
    { key: "development", href: "software", label: "menu.development" },
    { key: "reputation", href: "/", label: "menu.reputation" },
    { key: "faq", href: "/", label: 'menu.faq' }, // "FAQ" — new translation key, no existing source
];

const WA_LINK = process.env.NEXT_PUBLIC_WA_LINK;
const TG_LINK = process.env.NEXT_PUBLIC_TG_LINK;

export default function AppMenu({ lang }) {
    const { isOpen, closeMenu } = useMenu();

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") closeMenu();
        },
        [closeMenu]
    );

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    return (
        <div
            className={
                "fixed inset-0 z-50 flex flex-col bg-soft-surface text-graphite " +
                "max-w-md mx-auto " +
                "transition-all duration-300 ease-in-out " +
                "lg:hidden " +
                (isOpen
                    ? "pointer-events-auto opacity-100 visible"
                    : "pointer-events-none opacity-0 invisible")
            }
            aria-hidden={ !isOpen }
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
        >
            {/* Header row */ }
            <div className="flex items-center justify-between p-4 bg-white">
                <Image
                    src="/logo-default.svg"
                    alt="VisionSpace Logo"
                    width={ 161 }
                    height={ 31 }
                    loading="eager"
                />
                <button
                    onClick={ closeMenu }
                    aria-label="Close menu"
                >
                    <Image
                        src="/close.svg"
                        alt="Close"
                        width={ 20 }
                        height={ 20 }
                    />
                </button>
            </div>
            {/* Nav links */ }
            <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="flex flex-col">
                    { NAV_ITEMS.map((item, index) => (
                        <li
                            key={ item.key }
                            className={ index < NAV_ITEMS.length - 1 ? "border-b border-border-gray" : "" }
                        >
                            <Link
                                href={ `/${lang}/${item.href}` }
                                onClick={ closeMenu }
                                className="block py-4 text-2xl font-semibold text-primary"
                            >
                                { item.label ? $t(item.label, lang) : $t(`nav.${item.key}`, lang) }
                            </Link>
                        </li>
                    )) }
                </ul>
            </nav>
            {/* Footer actions */ }
            <div className="p-4 flex flex-col gap-3">
                <LinkButton href={ `/${lang}/discuss` } onClick={ closeMenu } className="w-full">
                    <div className="flex items-center justify-center gap-2.5">
                        <span className="text-white">{ $t('common.discuss_project', lang) }</span>
                        <ArrowIcon />
                    </div>
                </LinkButton>
                <div className="grid grid-cols-2 gap-3">
                    { WA_LINK && (
                        <LinkButton href={ WA_LINK } dark={ false } onClick={ closeMenu } className="w-full text-center bg-border-gray!">
                            WhatsApp
                        </LinkButton>
                    ) }
                    { TG_LINK && (
                        <LinkButton href={ TG_LINK } dark={ false } onClick={ closeMenu } className="w-full text-center bg-border-gray!">
                            Telegram
                        </LinkButton>
                    ) }
                </div>
            </div>
        </div>
    );
}