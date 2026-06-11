import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Web",
    description: "Build responsive websites using HTML, CSS, and JavaScript.",
    instructor: "Priya Sharma",
    lessons: 12,
    students: 4200,
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "React Fundamentals",
    category: "React",
    description: "Learn React components, hooks, and router navigation.",
    instructor: "Manju Patel",
    lessons: 16,
    students: 2800,
    duration: "5 weeks",
  },
  {
    id: 3,
    title: "Backend with Node.js",
    category: "Backend",
    description: "Build REST APIs and manage data with Express.",
    instructor: "Ananya Singh",
    lessons: 14,
    students: 3500,
    duration: "5 weeks",
  },
  {
    id: 4,
    title: "Design Systems with Figma",
    category: "Design",
    description: "Create polished UI kits and design workflows.",
    instructor: "Karan Joshi",
    lessons: 10,
    students: 1300,
    duration: "3 weeks",
  },
];

function Courses() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-600">Courses</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Browse available learning paths</h1>
        <p className="mt-4 text-slate-600">
          Choose a course to start, continue, or review your progress from the MiniLMS catalog.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
