import Image from 'next/image';
import { $t } from '@/utils/lang.utils';
import { GrowthGraphIcon } from '@/components/icons/growth-graph-icon';
import { CoinIcon } from '@/components/icons/coin-icon';
import { FunnelIcon } from '@/components/icons/funnel-icon';
import { ChartIcon } from '@/components/icons/chart-icon';
import { PieIcon } from "@/components/icons/pie-icon";
import { PeopleIcon } from "@/components/icons/people-icon";
import GrowthMetrics from '@/components/growth-metrics';

export default function WhatYouGetSection({ lang }) {
    return (
        <div
            className="w-full"
            style={ {
                background: 'linear-gradient(232.23deg, #FAFBFD 53.98%, #EBF0FC 109.67%)'
            } }
        >
            <section className="flex flex-col gap-7.5">
                { /* Header */ }
                <div className="flex flex-col gap-3.5 lg:items-center lg:max-w-2/3 lg:mx-auto">
                    <div className="bg-soft-surface px-2.5 py-3 rounded-sm self-start lg:self-auto">
                        <span className="text-graphite font-medium">{ $t('lead_generation.what_you_get.badge', lang) }</span>
                    </div>
                    <h2 className="text-primary font-semibold text-3xl lg:text-5xl lg:text-center">{ $t('lead_generation.what_you_get.title', lang) }</h2>
                    <p className="text-graphite font-medium lg:font-normal lg:text-lg">{ $t('lead_generation.what_you_get.description', lang) }</p>
                </div>
                {/* 
                    Grid 
                    - Mobile - 1 col
                    - Desktop - 4 cols, 3 rows
                        - 1 (top left) cell - 2 rows / 2 cols
                        - 2 cell - 2 rows / 1 col
                        - 3 cell - 3 rows / 1 col
                        - 4 cell - 1 row / 3 cols
                */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:grid-rows-3">
                    {/* Leads flow */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-2 lg:row-span-2 flex flex-col gap-3.5"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>
                        <div className="flex flex-col gap-3.5">
                            <div className="rounded-xl p-3 self-start" style={ { background: '#3158E80D' } }>
                                <GrowthGraphIcon size={ 30 } className="text-p-blue" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-primary text-xl lg:text-2xl font-normal lg:font-semibold">{ $t('lead_generation.what_you_get.leads_flow.title', lang) }</span>
                                <span className="text-gray text-sm font-medium">{ $t('lead_generation.what_you_get.leads_flow.subtitle', lang) }</span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="flex flex-col">
                                <span className="font-medium text-primary">{ $t('lead_generation.what_you_get.leads_flow.metrics', lang) }</span>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-primary text-2xl font-semibold">2 450</span>
                                    <GrowthMetrics title="38%" />
                                </div>
                            </div>
                            <Image
                                src="/leads_flow.svg"
                                alt="Leads flow"
                                width={ 363 }
                                height={ 163 }
                                style={ { width: 'auto', height: 'auto' } }
                                className="hidden lg:block"
                            />
                        </div>
                    </div>
                    {/* Lead price control */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-1 lg:row-span-2 flex flex-col gap-3.5"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>
                        <div className="flex flex-col gap-3.5">
                            <div className="rounded-xl p-3 self-start" style={ { background: '#3158E80D' } }>
                                <CoinIcon size={ 30 } className="text-p-blue" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-primary text-xl lg:text-2xl font-normal lg:font-semibold">{ $t('lead_generation.what_you_get.lead_price_control.title', lang) }</span>
                                <span className="text-gray text-sm font-medium">{ $t('lead_generation.what_you_get.lead_price_control.subtitle', lang) }</span>
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-xl p-3.5 gap-1 justify-between border border-border-gray flex flex-col grow"
                            style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }
                        >
                            <div className="flex flex-col grow">
                                <span className="font-medium text-primary">{ $t('lead_generation.what_you_get.lead_price_control.metrics', lang) }</span>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-primary text-2xl font-semibold">$ 854</span>
                                    <GrowthMetrics title="12%" dir="down" />
                                </div>
                            </div>
                            <Image
                                src="/cpl_graph.svg"
                                alt="CPL graph"
                                width={ 240 }
                                height={ 21 }
                                style={ { width: 'auto', height: 'auto' } }
                                className="self-end"
                            />
                        </div>
                    </div>
                    {/* Working funnel */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-1 lg:row-span-3 flex flex-col gap-3.5"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>
                        <div className="flex flex-col gap-3.5">
                            <div className="rounded-xl p-3 self-start" style={ { background: '#3158E80D' } }>
                                <FunnelIcon size={ 30 } className="text-p-blue" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-primary text-xl lg:text-2xl font-normal lg:font-semibold">{ $t('lead_generation.what_you_get.working_funnel.title', lang) }</span>
                                <span className="text-gray text-sm font-medium">{ $t('lead_generation.what_you_get.working_funnel.subtitle', lang) }</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-between grow"
                        >
                            <div className="hidden lg:flex flex-col gap-3.5">
                                {
                                    [
                                        { code: 'shows', val: '152 450' },
                                        { code: 'clicks', val: '8 124' },
                                        { code: 'leads', val: '2 450' },
                                        { code: 'applications', val: '2 450' }
                                    ].map((item) => (
                                        <div
                                            key={ item.code }
                                            className="flex gap-2.5 pb-3.5 items-center border-b border-b-border-gray"
                                        >
                                            <Image
                                                src="/checked.svg"
                                                alt="checked"
                                                width={ 18 }
                                                height={ 18 }
                                                style={ { width: 'auto', height: 'auto' } }
                                            />
                                            <div className="flex justify-between items-center grow">
                                                <span className="font-medium">{ $t(`lead_generation.what_you_get.working_funnel.items.${item.code}`, lang) }</span>
                                                <span className="text-sm font-medium">{ item.val }</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="rounded-sm border border-border-gray p-3.5" style={ { background: '#F6F8FD' } }>
                                <div className="flex flex-col">
                                    <span className="text-primary text-lg">{ $t('lead_generation.what_you_get.working_funnel.metrics', lang) }</span>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-primary text-2xl font-semibold">30.1%</span>
                                        <GrowthMetrics title="18%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Transparent analytics */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-3 lg:row-span-1 flex justify-between items-center"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-primary text-xl lg:text-2xl font-normal lg:font-semibold">{ $t('lead_generation.what_you_get.transparent_analytics.title', lang) }</span>
                                <span className="text-gray text-sm font-medium">{ $t('lead_generation.what_you_get.transparent_analytics.subtitle', lang) }</span>
                            </div>
                            <div className="flex gap-5 w-full">
                                {
                                    [
                                        { code: 'roi', val: '315%', growth: '24%', icon: (<ChartIcon size={ 24 } className="text-p-blue" />) },
                                        { code: 'conversions', val: '8.7%', growth: '1.3 p.p', icon: (<PieIcon size={ 24 } className="text-p-blue" />) },
                                        { code: 'new_clients', val: '156', growth: '22%', icon: (<PeopleIcon size={ 24 } className="text-p-blue" />) }
                                    ].map((item) => (
                                        <div className={ `${item.code !== 'conversions' ? 'hidden lg:flex' : 'flex'} items-center gap-3.5 min-w-1/3` } key={ item.code }>
                                            <div className="rounded-md p-1 bg-soft-surface">
                                                { item.icon }
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-sm text-primary font-medium">{ $t(`lead_generation.what_you_get.transparent_analytics.${item.code}`, lang) }</span>
                                                <div className="flex items-center gap-2.5">
                                                    <span className="text-lg text-primary">{ item.val }</span>
                                                    <GrowthMetrics title={ item.growth } />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <Image
                            src="/systematic_chart.svg"
                            alt="Systematic"
                            width={ 93 }
                            height={ 93 }
                            style={ { width: 'auto', height: 'auto' } }
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}