import Image from 'next/image';
import { $t } from '@/utils/lang.utils';

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
                        className="bg-white rounded-lg p-5 lg:col-span-2 lg:row-span-2"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>

                    </div>
                    {/* Lead price control */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-1 lg:row-span-2"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>

                    </div>
                    {/* Working funnel */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-1 lg:row-span-3"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>

                    </div>
                    {/* Transparent analytics */ }
                    <div
                        className="bg-white rounded-lg p-5 lg:col-span-3 lg:row-span-1"
                        style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>

                    </div>
                </div>
            </section>
        </div>
    );
}