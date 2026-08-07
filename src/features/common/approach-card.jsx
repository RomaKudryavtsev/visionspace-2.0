export default function ApproachCard({ title, description, icon, index }) {
    return (
        <div
            className="w-full lg:w-90 rounded-lg p-7.5 flex flex-col gap-3.5 bg-white"
            style={ {
                border: '1px solid #F6F8FA',
                boxShadow: '0px 4px 15px 0px #22262D0D'
            } }
        >
            <div className="flex justify-between items-center">
                <div className="rounded-md p-2.5 border border-border-gray">
                    { icon }
                </div>
                <span className="text-gray text-xl">{String.raw`\0${index + 1}`}</span>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-primary text-2xl font-semibold">{ title }</h3>
                <span className="text-gray font-medium">{ description }</span>
            </div>
        </div>
    );
}