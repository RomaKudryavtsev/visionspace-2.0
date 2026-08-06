import { Fragment } from "react";
import ProcessCard from "@/features/common/process-card";
import { $t } from "@/utils/lang.utils";

function ProcessConnector({ orientation = "horizontal", isDark = true }) {
    if (orientation === "vertical") {
        return (
            <div className="relative w-full flex justify-center" style={ { height: '1.5rem' } } aria-hidden="true">
                <span className={ `absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px ${isDark ? 'bg-white' : 'bg-primary'}` } />
                <span className={ `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${isDark ? 'bg-white' : 'bg-primary'}` } />
                <span className={ `absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full ${isDark ? 'bg-white' : 'bg-primary'}` } />
            </div>
        );
    }
    return (
        <div className="relative grow shrink-0 basis-14 h-2" aria-hidden="true">
            <span className={ `absolute inset-x-0 top-1/2 -translate-y-1/2 h-px ${isDark ? 'bg-white' : 'bg-primary'}` } />
            <span className={ `absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${isDark ? 'bg-white' : 'bg-primary'}` } />
            <span className={ `absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${isDark ? 'bg-white' : 'bg-primary'}` } />
        </div>
    );
}

export default function ProcessSection({
    lang,
    title,
    subtitle,
    isDark = true,
    page,
}) {
    const steps = ['analysis', 'strategy', 'implementation', 'optimization'];
    const prefix = page === 'home' ? '' : `${page}.`;

    return (
        <div className={ `w-full ${isDark ? 'bg-primary' : 'bg-soft-surface'}` }>
            <section className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-3.5 max-w-full lg:max-w-128.5">
                    <h2 className={ `${isDark ? 'text-white' : 'text-primary'} text-3xl lg:text-5xl font-semibold` }>
                        { title }
                    </h2>
                    <p className={ `${isDark ? 'text-white' : 'text-primary'} text-base lg:text-lg` }>
                        { subtitle }
                    </p>
                </div>
                {/* Desktop: horizontal row with horizontal connectors */ }
                <div className="hidden lg:flex w-full items-center">
                    { steps.map((step, index) => (
                        <Fragment key={ step }>
                            <ProcessCard
                                title={ $t(`${prefix}process.steps.${step}.title`, lang) }
                                description={ $t(`${prefix}process.steps.${step}.description`, lang) }
                                icon={ `/${step}` + '.svg' }
                                index={ index }
                                isDark={ isDark }
                            />
                            { index < steps.length - 1 && <ProcessConnector orientation="horizontal" isDark={ isDark } /> }
                        </Fragment>
                    )) }
                </div>
                {/* Mobile: vertical stack with vertical connectors */ }
                <div className="flex lg:hidden flex-col w-full">
                    { steps.map((step, index) => (
                        <Fragment key={ step }>
                            <ProcessCard
                                title={ $t(`${prefix}process.steps.${step}.title`, lang) }
                                description={ $t(`${prefix}process.steps.${step}.description`, lang) }
                                icon={ `/${step}` + '.svg' }
                                index={ index }
                                isDark={ isDark }
                            />
                            { index < steps.length - 1 && <ProcessConnector orientation="vertical" isDark={ isDark } /> }
                        </Fragment>
                    )) }
                </div>
            </section>
        </div>
    );
}