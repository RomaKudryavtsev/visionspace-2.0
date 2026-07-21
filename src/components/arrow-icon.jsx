import Image from 'next/image';

export default function ArrowIcon() {
    return (
        <div className="bg-white/15 rounded p-1.5">
            <Image
                src="/white-arrow.svg"
                alt="Arrow Right Icon"
                width={ 14 }
                height={ 14 }
                style={ { width: 'auto', height: 'auto' } }
            />
        </div>
    )
}