export default function WorkScopeCard({ title, description, icon }) {
    return (
        <div
            className="w-full lg:w-90 min-h-40 p-5 flex gap-10 items-center rounded-xl"
            style={ {
                background: '#FFFFFF0D',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#7A849380'
            } }
        >
            <div className="bg-soft-surface rounded-xl p-3.5">
                { icon }
            </div>
            <div className="flex flex-col gap-1" >
                <h3 className="text-white lg:font-semibold text-xl lg:text-2xl">{ title }</h3>
                <p className="text-gray font-medium">{ description }</p>
            </div>
        </div>
    );
}