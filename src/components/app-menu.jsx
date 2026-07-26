"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { useMenu } from "@/store/global.store";

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
                "fixed inset-0 z-50 flex flex-col bg-white text-graphite " +
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
            <div className="flex items-center justify-between p-4">
                <Image
                    src="/logo-default.svg"
                    alt="VisionSpace Logo"
                    width={ 161 }
                    height={ 31 }
                    loading="eager"
                />
                <button
                    onClick={ closeMenu }
                    className="p-2"
                    aria-label="Close menu"
                >
                    <Image
                        src="/close.svg"
                        alt="Close"
                        width={ 24 }
                        height={ 24 }
                    />
                </button>
            </div>

            {/* Content slot — fill this with nav links, buttons, etc. */ }
            <nav className="flex-1 overflow-y-auto px-4 py-6">
                {/* TODO: Add menu items here */ }
            </nav>

            {/* Footer slot */ }
            <div className="p-4 border-t border-border-gray">
                {/* TODO: Add footer actions here (LangSwitcher, CTA, etc.) */ }
            </div>
        </div>
    );
}