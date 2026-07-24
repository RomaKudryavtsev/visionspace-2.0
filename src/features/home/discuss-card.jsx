import Image from "next/image";

export default function DiscussCard({ icon, title, description }) {
    return (
        <div
            className="bg-white rounded-xl p-3.5 flex gap-3.5"
            style={ { border: '1px solid #F6F8FA', boxShadow: '0px 4px 15px 0px #22262D0D' } }
        >
            <div className="bg-soft-surface rounded-md p-2.5">
                <Image
                    src={ icon }
                    alt={ title }
                    width={ 44 }
                    height={ 44 }
                    style={ { width: 'auto', height: 'auto' } }
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-primary font-medium">{ title }</span>
                <span className="text-gray text-xs">{ description }</span>
            </div>
        </div>
    );
}
