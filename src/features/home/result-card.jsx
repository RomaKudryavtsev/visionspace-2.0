import Image from "next/image";

export default function ResultCard({
    title,
    description,
    icon,
    content,
}) {
    return (
        <div
            className="flex flex-col gap-10 p-5 rounded-lg "
            style={ { background: "#FFFFFF", border: '1px solid #F6F8FA', boxShadow: '0px 4px 15px 0px #22262D0D' } }
        >
            <div className="flex items-center gap-5">
                <div
                    className="rounded-xl p-3"
                    style={ { background: 'linear-gradient(180deg, #FEFEFE 0%, #F4F4F4 100%)', border: '1px solid #E3E7EC' } }
                >
                    <Image
                        src={ icon }
                        alt={ title }
                        width={ 30 }
                        height={ 30 }
                        style={ { width: 'auto', height: 'auto' } }
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-primary text-2xl font-semibold">{ title }</span>
                    <span className="text-gray font-medium">{ description }</span>
                </div>
            </div>
            { content }
        </div>
    );
}