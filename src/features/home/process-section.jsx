import { Fragment } from "react";
import ProcessCard from "@/features/home/process-card";
import { $t } from "@/utils/lang.utils";

function ProcessConnector() {
    return (
        <div className="flex grow shrink-0 basis-14 items-center">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
            <span className="h-px flex-1 bg-white" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
        </div>
    );
}

export default function ProcessSection({ lang }) {
    const steps = ['analysis', 'strategy', 'implementation', 'optimization'];
    return (
        <div className="bg-primary w-full">
            <section className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-3.5 max-w-128.5">
                    <h2 className="text-white text-5xl font-semibold">{ $t('process.title', lang) }</h2>
                    <p className="text-white text-lg">{ $t('process.subtitle', lang) }</p>
                </div>
                <div className="flex w-full items-center">
                    {
                        steps.map((step, index) => (
                            <Fragment key={ step }>
                                <ProcessCard
                                    title={ $t(`process.steps.${step}.title`, lang) }
                                    description={ $t(`process.steps.${step}.description`, lang) }
                                    icon={ `/${step}.svg` }
                                    index={ index }
                                />
                                { index < steps.length - 1 && <ProcessConnector /> }
                            </Fragment>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}