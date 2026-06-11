function CourseCard({ course }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1">{course.category}</span>
        <span>{course.duration}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
      <p className="mt-3 text-slate-600">{course.description}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
        <span>{course.lessons} lessons</span>
        <span>{course.students}+ students</span>
      </div>
      <div className="mt-5 flex items-center justify-between text-sm text-slate-700">
        <span>Instructor: {course.instructor}</span>
        <span className="rounded-full bg-sky-600 px-4 py-2 text-white">Enroll</span>
      </div>
    </article>
  );
}

export default CourseCard;
