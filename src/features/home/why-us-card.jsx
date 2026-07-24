import Image from "next/image";

export default function WhyUsCard({ title, description, icon }) {
    return (
        <div
            className="bg-white rounded-xl p-7.5 gap-7.5 flex flex-col"
            style={ { border: '1px solid #E3E7EC' } }
        >
            <div
                className="p-4 rounded-xl self-start"
                style={ { background: 'linear-gradient(180deg, #FEFEFE 0%, #F4F4F4 100%)', border: '1px solid #E3E7EC' } }
            >
                <Image
                    src={ icon }
                    alt={ title }
                    width={ 45 }
                    height={ 45 }
                    style={ { width: 'auto', height: 'auto' } }
                />
            </div>
            <span className="text-3xl text-primary font-semibold">{ title }</span>
            <span className="text-gray text-lg">{ description }</span>
        </div>
    );
}