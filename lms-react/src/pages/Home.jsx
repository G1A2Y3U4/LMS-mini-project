import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const featuredCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Web",
    description: "Build responsive websites with HTML, CSS, and JavaScript.",
    instructor: "Priya Sharma",
    lessons: 12,
    students: 4200,
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "React Fundamentals",
    category: "React",
    description: "Learn React components, hooks, and single-page app routing.",
    instructor: "Manju Patel",
    lessons: 16,
    students: 2800,
    duration: "5 weeks",
  },
  {
    id: 3,
    title: "Backend with Node.js",
    category: "Backend",
    description: "Create APIs and manage data using Express and MongoDB.",
    instructor: "Ananya Singh",
    lessons: 14,
    students: 3500,
    duration: "5 weeks",
  },
];

function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-2xl shadow-slate-800/20 sm:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300">
            Learn new skills with MiniLMS
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A small LMS for course discovery, enrollment, and progress tracking.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Use this app to browse courses, register as a learner, and manage your dashboard in one simple React experience.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Create account
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              View dashboard
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-600">Featured courses</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Start learning today</h2>
          </div>
          <Link to="/dashboard/courses" className="text-sm font-semibold text-slate-700 transition hover:text-slate-900">
            Browse all courses ?
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
