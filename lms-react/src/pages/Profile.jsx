function Profile() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Profile</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Learner details</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            80% course completion goal
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Name</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">Aditi Verma</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">aditi@example.com</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Enrolled courses</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">4</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Member since</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">Jan 2026</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
        <h2 className="text-2xl font-semibold text-slate-900">Learning goals</h2>
        <p className="mt-3 text-slate-600">
          Complete your next lesson, review the course schedule, and stay on track with your learning plan.
        </p>
        <ul className="mt-6 space-y-3 text-slate-700">
          <li className="rounded-2xl bg-slate-50 p-4">Complete "React Fundamentals" in 3 days.</li>
          <li className="rounded-2xl bg-slate-50 p-4">Finish the next web dev project assignment.</li>
          <li className="rounded-2xl bg-slate-50 p-4">Earn the backend certificate this month.</li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
