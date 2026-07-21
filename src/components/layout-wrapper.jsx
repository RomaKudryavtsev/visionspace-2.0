"use client";

import AppHeader from "./app-header";
import AppFooter from "./app-footer";
import TanstackProvider from "@/providers/query-provider";

export default function LayoutWrapper({ lang, children }) {
    return (
        <>
            <AppHeader lang={ lang } />
            <main className="grow">
                <TanstackProvider>
                    { children }
                </TanstackProvider>
            </main>
            <AppFooter lang={ lang } />
        </>
    );
}