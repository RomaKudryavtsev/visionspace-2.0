"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function LangSwitcher({ lang = "ru", className = "" }) {
    const [selectedLang, setSelectedLang] = useState(lang);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();

    const languages = useMemo(() => ([
        { code: 'ru', label: 'Русский', shortLabel: 'RU' },
        { code: 'en', label: 'English', shortLabel: 'EN' },
    ]), []);

    useEffect(() => {
        setSelectedLang(lang);
    }, [lang]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!menuRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const switchLanguage = (newLang) => {
        if (newLang === selectedLang) {
            setIsOpen(false);
            return;
        }

        setSelectedLang(newLang);
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        pathParts[1] = newLang;
        const newPath = pathParts.join('/');
        router.push(newPath);
        setIsOpen(false);
    };

    const selectedLanguage = languages.find((language) => language.code === selectedLang) ?? languages[0];

    return (
        <div ref={ menuRef } className={ `relative inline-flex ${className}`.trim() }>
            <button
                type="button"
                onClick={ () => setIsOpen((prev) => !prev) }
                aria-label="Select language"
                aria-haspopup="listbox"
                aria-expanded={ isOpen }
                className="inline-flex h-9 min-w-18 items-center justify-between gap-2 rounded-full border border-gray/25 bg-white px-3 text-xs font-semibold tracking-wide text-primary transition-colors duration-200 hover:bg-gray/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
            >
                <span>{ selectedLanguage.shortLabel }</span>
                <span
                    aria-hidden="true"
                    className={ `block h-2 w-2 border-b-2 border-r-2 border-primary transition-transform duration-200 ${isOpen ? 'translate-y-px rotate-[-135deg]' : '-translate-y-px rotate-45'}` }
                />
            </button>

            { isOpen && (
                <ul
                    role="listbox"
                    aria-label="Languages"
                    className="absolute right-0 top-11 z-50 min-w-44 overflow-hidden rounded-2xl border border-gray/25 bg-white py-1 shadow-[0_10px_25px_rgba(32,32,40,0.12)]"
                >
                    { languages.map((language) => {
                        const isActive = language.code === selectedLang;

                        return (
                            <li key={ language.code } role="option" aria-selected={ isActive }>
                                <button
                                    type="button"
                                    onClick={ () => switchLanguage(language.code) }
                                    className={ `flex w-full items-center justify-between gap-4 px-3 py-2 text-left text-xs font-semibold tracking-wide transition-colors duration-150 ${isActive ? 'bg-primary/10 text-primary' : 'text-primary hover:bg-gray/10'}` }
                                >
                                    <span className="flex-1 whitespace-nowrap">{ language.label }</span>
                                    <span className="shrink-0 whitespace-nowrap opacity-80">{ language.shortLabel }</span>
                                </button>
                            </li>
                        );
                    }) }
                </ul>
            ) }
        </div>
    );
}