import I18nNotFound from "@/features/not-found/i18n-not-found";

export default function NotFoundPage() {
    return (
        <>
            <div className="container mx-auto p-6 lg:p-12 xl:p-16">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-center text-primary font-black text-6xl">404</h1>
                    <I18nNotFound />
                </div>
            </div>
        </>
    );
}