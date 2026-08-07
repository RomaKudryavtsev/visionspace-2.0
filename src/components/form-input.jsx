export default function FormInput({ label, placeholder, error, inputProps }) {
    return (
        <label className="flex flex-col gap-2.5 text-sm text-gray font-normal lg:font-medium">
            { label }
            <input
                { ...inputProps }
                placeholder={ placeholder }
                className={ `rounded-sm border bg-white lg:bg-soft-surface px-3.5 py-3 font-medium text-primary outline-none transition-colors placeholder:text-[#7A849366] focus:border-[#3158E8] focus:bg-white ${error ? 'border-red-400' : 'border-transparent'
                    }` }
            />
        </label>
    );
}