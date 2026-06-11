const stats = [
  { label: "Active courses", value: "6" },
  { label: "Lessons completed", value: "24" },
  { label: "Certificates", value: "2" },
  { label: "Study hours", value: "42" },
];

function DashboardHome() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Welcome back, learner!</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            Keep learning with the courses you love.
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          Your dashboard shows course progress, available lessons, and profile details.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DashboardHome;
