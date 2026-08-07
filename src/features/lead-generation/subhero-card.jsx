export default function SubheroCard({ title, description, index }) {
    return (
        <div
            className="w-75 rounded-lg px-6 pt-5 pb-7.5 flex flex-col gap-15 lg:gap-30 justify-between bg-white"
            style={ { boxShadow: "0px 4px 15px 0px #22262D0D" } }
        >
            <h3 className="text-3xl font-semibold text-primary">{ title }</h3>
            <div className="flex gap-2 justify-between">
                <span className="text-gray font-medium">{ description }</span>
                <span className="self-end font-medium text-gray">{ String.raw`\0${index + 1}` }</span>
            </div>
        </div>
    );
}