export default function DiscussCard({  icon, title, description  }) {
    const hasTitle = Boolean(title && title.trim());
  const hasDesc = Boolean(description && description.trim());

  return (
    <div className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <div className="flex-none w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
        { icon }
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        { hasTitle ? (
          <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">
            { title }
          </h3>
        ) : (
          <div className="w-1/2 h-5 bg-slate-200 rounded mb-2" aria-hidden="true" />
        ) }
        { hasDesc ? (
          <p className="text-sm text-slate-500 leading-relaxed">{ description }</p>
        ) : (
          <>
            <div className="w-11/12 h-3 bg-slate-200 rounded mt-2" aria-hidden="true" />
            <div className="w-2/3 h-3 bg-slate-200 rounded mt-2" aria-hidden="true" />
          </>
        ) }
      </div>
    </div>
  );
}
