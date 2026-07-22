import Image from 'next/image';
import ResultCard from './result-card';
import { $t } from "@/utils/lang.utils";

function ResultContent({ result, lang }) {
    if (result === 'client_growth') {
        return (
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <span className="text-primary font-medium">{ $t('results.metrics.client_growth.requests', lang) }</span>
                    <div className="flex items-center gap-2.5">
                        <span className="text-2xl text-primary font-semibold">2 450</span>
                        <span className="text-sm text-p-green font-medium">+38.1%</span>
                    </div>
                </div>
                <Image
                    src="/client_growth.svg"
                    alt="Client Growth"
                    width={ 176 }
                    height={ 93 }
                    style={ { width: 'auto', height: 'auto' } }
                />
            </div>
        );
    } else if (result === 'systematic') {
        return (
            <div className="flex justify-between items-center">
                <span className="text-primary font-medium w-30">{ $t('results.metrics.systematic.completion', lang) }</span>
                <Image
                    src="/systematic.svg"
                    alt="Systematic"
                    width={ 93 }
                    height={ 93 }
                    style={ { width: 'auto', height: 'auto' } }
                />
            </div>
        )
    } else if (result === 'control') {
        return (
            <div
                className="rounded-xl p-3.5"
                style={ { background: '#F6F8FA', border: '1px solid #E3E7EC' } }
            >
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-primary font-medium">{ $t('results.metrics.control.roi', lang) }</span>
                        <div className="flex items-center gap-2.5">
                            <span className="text-2xl text-primary font-semibold">315%</span>
                            <span className="text-sm text-p-green font-medium">+12.5%</span>
                        </div>
                    </div>
                    <Image
                        src="/control.svg"
                        alt="Control"
                        width={ 142 }
                        height={ 64 }
                        style={ { width: 'auto', height: 'auto' } }
                    />
                </div>
            </div>
        );
    } else if (result === 'scalability') {
        return (
            <div
                className="rounded-xl p-3.5"
                style={ { background: '#F6F8FA', border: '1px solid #E3E7EC' } }
            >
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-primary font-medium">{ $t('results.metrics.scalability.turnover', lang) }</span>
                        <div className="flex items-center gap-2.5">
                            <span className="text-2xl text-primary font-semibold">+78%</span>
                            <span className="text-sm text-p-green font-medium">{ $t('results.metrics.scalability.for_6_months', lang) }</span>
                        </div>
                    </div>
                    <Image
                        src="/scalability.svg"
                        alt="Scalability"
                        width={ 142 }
                        height={ 64 }
                        style={ { width: 'auto', height: 'auto' } }
                    />
                </div>
            </div>
        );
    }
    return null;
}

export default function ResultSection({ lang }) {
    const results = ['client_growth', 'systematic', 'control', 'scalability'];

    return (
        <div className="bg-soft-surface w-full">
            <section className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-3.5 w-132.5">
                    <div className="py-2.5 px-3 bg-white rounded-sm self-start">
                        <span className="font-medium text-graphite">{ $t("results.what_you_get", lang) }</span>
                    </div>
                    <h2 className="text-5xl text-primary font-semibold">{ $t("results.result", lang) }</h2>
                    <p className="text-graphite text-lg">{ $t("results.description", lang) }</p>
                </div>
                {/* 2x2 grid */ }
                <div className="grid grid-cols-2 gap-5">
                    {
                        results.map((result) => (
                            <ResultCard
                                key={ result }
                                title={ $t(`results.metrics.${result}.title`, lang) }
                                description={ $t(`results.metrics.${result}.description`, lang) }
                                icon={ `/${result}_icon.svg` }
                                content={ <ResultContent result={ result } lang={ lang } /> }
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}