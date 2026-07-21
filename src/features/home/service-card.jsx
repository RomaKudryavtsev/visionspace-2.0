import Image from "next/image";
import LinkButton from '@/components/link-button';
import ArrowIcon from '@/components/arrow-icon';
import { $t } from '@/utils/lang.utils';

export default function ServiceCard({
    title,
    description,
    icon,
    link,
    content,
    lang
}) {
    return (
        <div className="bg-white p-5 flex flex-col gap-3.5 rounded-xl w-100" style={ { boxShadow: '0px 4px 15px 0px #22262D0D' } }>
            <div className="flex gap-7.5">
                <div
                    className="p-3.5 rounded-xl self-start"
                    style={ { border: '1px solid #E3E7EC', background: 'linear-gradient(180deg, #FEFEFE 0%, #F4F4F4 100%)' } }
                >
                    <Image
                        src={ icon }
                        alt={ title }
                        width={ 30 }
                        height={ 30 }
                        style={ { width: 'auto', height: 'auto' } }
                    />
                </div>
                <div className="w-67.5 flex flex-col gap-0.5">
                    <span className="text-primary text-2xl font-semibold">{ title }</span>
                    <span className="text-gray text-sm">{ description }</span>
                </div>
            </div>
            <div className="rounded-xl px-5 pt-3.5 pb-5" style={ { border: '1px solid #F6F8FA' } }>
                { content }
            </div>
            { link && <LinkButton href={ link } dark={ false }>
                <div className="flex items-center justify-center gap-2.5">
                    <span className="text-graphite text-center">{ $t('common.details', lang) }</span>
                    <ArrowIcon dark />
                </div>
            </LinkButton> }
        </div>
    );
}