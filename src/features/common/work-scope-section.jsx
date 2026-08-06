import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/icons/arrow-icon";
import { VisionSpaceIcon } from "@/components/icons/visionspace-icon";
import { AdsIcon } from "@/components/icons/ads-icon";
import { ChartIcon } from "@/components/icons/chart-icon";
import { GraphSettingsIcon } from "@/components/icons/graph-settings-icon";
import { TabIcon } from "@/components/icons/tab-icon";
import WorkScopeCard from "./work-scope-card";
import { $t } from "@/utils/lang.utils";

export default function WorkScopeSection({ lang }) {
    const items = [
        { code: 'ads', icon: <AdsIcon className="text-primary" size={ 30 } /> },
        { code: 'funnels', icon: <TabIcon className="text-primary" size={ 30 } /> },
        { code: 'analytics', icon: <ChartIcon className="text-primary" size={ 30 } /> },
        { code: 'testing', icon: <GraphSettingsIcon className="text-primary" size={ 30 } /> }
    ];

    return (
        <div className="w-full bg-primary relative overflow-hidden">
            <VisionSpaceIcon
                className="hidden lg:block absolute bottom-16 left-0 text-graphite z-0"
                size={ 149 }
            />
            <VisionSpaceIcon
                className="block lg:hidden absolute top-0 right-0 text-graphite z-0"
                size={ 90 }
            />
            <section className="flex flex-col lg:flex-row gap-5 relative z-10 items-center">
                <div className="flex flex-col gap-5 lg:gap-7.5 w-full lg:w-122.5">
                    <div className="flex flex-col gap-5 lg:gap-3.5">
                        <h2 className="text-white font-semibold text-3xl lg:text-5xl">{ $t('lead_generation.work_scope.title', lang) }</h2>
                        <p className="text-soft-surface text-base lg:text-lg">{ $t('lead_generation.work_scope.description', lang) }</p>
                    </div>
                    <LinkButton
                        href={ `/${lang}/discuss` }
                        dark={ false }
                    >
                        <div className="flex items-center justify-center gap-2.5">
                            <span className="text-primary">{ $t('common.discuss_project', lang) }</span>
                            <ArrowIcon dark />
                        </div>
                    </LinkButton>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 grow">
                    {
                        items.map((item, index) => (
                            <WorkScopeCard
                                key={ index }
                                title={ $t(`lead_generation.work_scope.items.${item.code}.title`, lang) }
                                description={ $t(`lead_generation.work_scope.items.${item.code}.description`, lang) }
                                icon={ item.icon }
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}