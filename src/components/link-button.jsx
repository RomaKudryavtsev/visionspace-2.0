import Link from 'next/link';

export default function LinkButton({ href, children, external = false }) {
    return (
        <div className={ `rounded-md pt-3 pb-3.5 pr-5 pl-6 ${external ? 'bg-soft-surface' : 'bg-primary'} ${external ? '' : 'hover:bg-linear-to-r hover:from-[#05070A] hover:to-[#111F33]'}` }>
            <Link
                href={ href }
            >
                { children }
            </Link>
        </div>
    );
}