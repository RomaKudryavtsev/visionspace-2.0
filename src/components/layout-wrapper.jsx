"use client";

import AppHeader from "./app-header";
import AppFooter from "./app-footer";
import AppMenu from "./app-menu";
import TanstackProvider from "@/providers/query-provider";
import { Toaster } from 'sonner';
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
            <AppMenu lang={ lang } />
            <Toaster />
        </>
    );
}