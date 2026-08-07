import Image from 'next/image';

export default function GrowthMetrics({ title, dir = 'up' }) {
    return (
        <div className="flex items-center">
            <Image
                src="/percent-up.svg"
                alt={ `percent ${ dir }` }
                width={ 16 }
                height={ 16 }
                style={ { width: 'auto', height: 'auto' } }
                className={ `${ dir === 'down' ? 'rotate-180' : '' }` }
            />
            <span className="text-p-green font-medium">{ title }</span>
        </div>
    );
}