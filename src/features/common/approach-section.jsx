import ApproachCard from './approach-card';
import { VisionSpaceIcon } from '@/components/icons/visionspace-icon';
import { TargetIcon } from '@/components/icons/target-icon';
import { GrowthIcon } from '@/components/icons/growth-icon';
import { ShieldIcon } from '@/components/icons/shield-icon';
import { PeopleIcon } from "@/components/icons/people-icon";
import { $t } from '@/utils/lang.utils';

export default function ApproachSection({ lang }) {
    const items = [
        { code: 'profit_focus', icon: <TargetIcon className="text-graphite" size={ 24 } /> },
        { code: 'systematic', icon: <GrowthIcon className="text-graphite" size={ 24 } /> },
        { code: 'experience', icon: <ShieldIcon className="text-graphite" size={ 24 } /> },
        { code: 'step_into', icon: <PeopleIcon className="text-graphite" size={ 24 } /> }
    ]
    return (
        <section className="flex flex-col gap-7.5 items-center">
            <div className="flex flex-col gap-3.5 items-center lg:max-w-2/3">
                <div className="bg-soft-surface px-2.5 py-3 rounded-sm ">
                    <span className="text-graphite font-medium">{ $t('lead_generation.approach.badge', lang) }</span>
                </div>
                <h2 className="text-primary text-3xl lg:text-5xl font-semibold">{ $t('lead_generation.approach.title', lang) }</h2>
                <p className="font-medium lg:font-normal text-base lg:text-lg text-graphite lg:text-center">{ $t('lead_generation.approach.description', lang) }</p>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-52 gap-y-5">
                    {
                        items.map((item, index) => (
                            <ApproachCard
                                key={ index }
                                title={ $t(`lead_generation.approach.items.${item.code}.title`, lang) }
                                description={ $t(`lead_generation.approach.items.${item.code}.description`, lang) }
                                icon={ item.icon }
                                index={ index }
                            />
                        ))
                    }
                </div>
                <div className="hidden lg:block absolute top-1/2 left-1/2 z-10">
                    <VisionSpaceIcon size={ 65 } className="text-gray absolute" style={ { left: '-32.5px', top: '-32.5px' } } />
                    {/* TL: right-down path, icon end at (79,54) */ }
                    <svg width="80" height="66" viewBox="0 0 80 66" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="absolute" style={ { left: '-103.4px', top: '-79px' } } aria-hidden="true">
                        <path opacity="0.5" d="M0 0.5H69C74.5228 0.5 79 4.97715 79 10.5V54" stroke="#E3E7EC" />
                        <circle cx="79" cy="54" r="3" fill="#05070A" stroke="white" strokeWidth="1" />
                    </svg>
                    {/* TR: left-down path, icon end at (0.5,83) */ }
                    <svg width="79" height="96" viewBox="0 0 79 96" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="absolute" style={ { left: '23.9px', top: '-109px' } } aria-hidden="true">
                        <path opacity="0.5" d="M78.5 0.5H10.5C4.97715 0.5 0.499997 4.97715 0.499997 10.5V83" stroke="#E3E7EC" />
                        <circle cx="0.5" cy="83" r="3" fill="#05070A" stroke="white" strokeWidth="1" />
                    </svg>
                    {/* BL: right-up path, icon end at (79,12) */ }
                    <svg width="80" height="96" viewBox="0 0 80 96" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="absolute" style={ { left: '-103.4px', top: '13.5px' } } aria-hidden="true">
                        <path opacity="0.5" d="M0 95H69C74.5228 95 79 90.5228 79 85V12" stroke="#E3E7EC" />
                        <circle cx="79" cy="12" r="3" fill="#05070A" stroke="white" strokeWidth="1" style={ { overflow: 'visible' } } />
                    </svg>
                    {/* BR: left-up path, icon end at (0.5,12) */ }
                    <svg width="79" height="74" viewBox="0 0 79 74" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="absolute" style={ { left: '23.9px', top: '13.5px' } } aria-hidden="true">
                        <path opacity="0.5" d="M78.5 73H10.5C4.97715 73 0.499997 68.5228 0.499997 63V12" stroke="#E3E7EC" />
                        <circle cx="0.5" cy="12" r="3" fill="#05070A" stroke="white" strokeWidth="1" style={ { overflow: 'visible' } } />
                    </svg>
                </div>
            </div>
        </section>
    );
}