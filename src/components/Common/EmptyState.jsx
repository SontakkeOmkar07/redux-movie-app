const EmptyState = ({
  title = "Nothing Found",
  message = "There is nothing to display right now.",
}) => {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
        🎬
      </div>

      <h3 className="text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">{message}</p>
    </div>
  );
};

export default EmptyState;