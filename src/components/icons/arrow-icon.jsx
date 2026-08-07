import Image from 'next/image';

export default function ArrowIcon({ dark = false }) {
    return (
        <div className={`${!dark ? 'bg-white/15' : 'bg-border-gray'} rounded p-1.5`}>
            <Image
                src={ !dark ? "/white-arrow.svg" : "/black-arrow.svg" }
                alt="Arrow Right Icon"
                width={ 14 }
                height={ 14 }
                style={ { width: 'auto', height: 'auto' } }
            />
        </div>
    )
}