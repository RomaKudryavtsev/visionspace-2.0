import Image from 'next/image';

export default function ProcessCard({ title, description, icon, index }) {
    return (
        <div
            className="p-5 flex flex-col gap-6 rounded-lg w-77.5 min-h-77.5"
            style={ {
                border: '1px solid transparent',
                backgroundImage:
                    'linear-gradient(182.03deg, rgba(49, 88, 232, 0) -2.51%, rgba(27, 49, 130, 0.12) 110.21%), ' +
                    'linear-gradient(55.22deg, rgba(22, 35, 54, 0.15) 33.61%, rgba(165, 201, 245, 0.15) 93.96%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
            } }
        >
            <p className="text-gray font-semibold text-3xl">{ `0${index + 1}` }</p>
            <div className="flex flex-col gap-2.5">
                <p className="text-white font-semibold text-3xl ">{ title }</p>
                <p className="text-gray text-lg">{ description }</p>
            </div>
            <div className="rounded-md p-3 self-start mt-auto" style={ { background: '#3158E81A' } }>
                <Image
                    src={ icon }
                    alt={ title }
                    width={ 30 }
                    height={ 30 }
                    style={ { width: 'auto', height: 'auto' } }
                />
            </div>
        </div>
    );
}