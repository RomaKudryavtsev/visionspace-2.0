"use client";

import { usePathname } from "next/navigation";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/icons/arrow-icon";
import { $t } from "@/utils/lang.utils";

export default function I18nNotFound() {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'en';
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-center">{ $t('not_found.title', lang) }</h3>
            <p className="text-center">{ $t('not_found.message', lang) }</p>
            <LinkButton href={ `/${lang}` }>
                <div className="flex items-center gap-2.5">
                    <span className="text-white">{ $t('not_found.home_button', lang) }</span>
                    <ArrowIcon />
                </div>
            </LinkButton>
        </div>
    );
}