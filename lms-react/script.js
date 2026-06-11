const courses = [
  {
    id: "react-basics",
    title: "React Basics",
    description: "Understand core React concepts and build reusable, interactive components.",
    instructor: "Nisha Verma",
    lessons: ["Introduction", "JSX & Components", "State & Props", "Hooks Essentials", "Final Project"],
    details: "Learn the fundamentals of React and create modern, dynamic web applications with clean component patterns.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "js-essentials",
    title: "JavaScript Essentials",
    description: "Master core JavaScript fundamentals, DOM interactions, and programming logic.",
    instructor: "Manish Kumar",
    lessons: ["Introduction", "Variables & Types", "Functions & Loops", "DOM Basics", "Project Challenge"],
    details: "Gain confidence writing JavaScript to create responsive, interactive web pages and applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    description: "Start coding in Python with friendly syntax and practical examples.",
    instructor: "Anita Patel",
    lessons: ["Introduction", "Python Syntax", "Data Structures", "Functions & Loops", "Mini Project"],
    details: "Build a solid Python foundation with real-world examples and beginner-friendly exercises.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de7fa4c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mongodb-basics",
    title: "MongoDB Basics",
    description: "Learn how to store and query data with MongoDB for modern web applications.",
    instructor: "Rahul Singh",
    lessons: ["Introduction", "Collections & Documents", "CRUD Operations", "Indexes & Aggregation", "Project Setup"],
    details: "Explore MongoDB document databases and build scalable backends with intuitive data storage.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "html-css-mastery",
    title: "HTML & CSS Mastery",
    description: "Design beautiful, responsive web pages with semantic HTML and CSS layouts.",
    instructor: "Riya Sharma",
    lessons: ["Introduction", "HTML Structure", "CSS Styling", "Responsive Design", "Portfolio Project"],
    details: "Develop strong frontend skills and create polished websites with modern layout techniques.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
];

const STORAGE_KEY_ENROLL = "learnhub_enrollments";
const STORAGE_KEY_PROGRESS = "learnhub_progress";

const appState = {
  currentView: "home",
  activeCourseId: null,
  enrolledCourses: JSON.parse(localStorage.getItem(STORAGE_KEY_ENROLL)) || [],
  progress: JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS)) || {},
};

const mainContent = document.getElementById("main-content");
const loadingOverlay = document.getElementById("loading-overlay");
const navLinks = document.querySelectorAll(".nav-link");
const navToggle = document.getElementById("nav-toggle");
const navLinksContainer = document.querySelector(".nav-links");

function saveState() {
  localStorage.setItem(STORAGE_KEY_ENROLL, JSON.stringify(appState.enrolledCourses));
  localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(appState.progress));
}

function setLoading(isLoading) {
  loadingOverlay.classList.toggle("hidden", !isLoading);
}

function getCourseById(id) {
  return courses.find((course) => course.id === id);
}

function renderHero() {
  return `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-content">
          <p class="text-sm uppercase tracking-[0.4em] text-sky-300">LearnHub</p>
          <h1>LearnHub - Learn Anywhere, Anytime</h1>
          <p>Master new skills with interactive online courses. Start your learning journey with modern lessons, enrollment tracking, and progress saved locally.</p>
          <div class="hero-actions">
            <a href="#courses" class="btn-primary">Browse Courses</a>
            <a href="#dashboard" class="btn-secondary">View Dashboard</a>
          </div>
        </div>
        <div class="hero-visual">
          <img class="hero-image" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Students learning online" />
        </div>
      </div>
      <div class="quick-stats">
        <div class="stat-card">
          <span>5 courses</span>
          <strong>Beginner-friendly</strong>
        </div>
        <div class="stat-card">
          <span>25 lessons</span>
          <strong>Project-based</strong>
        </div>
        <div class="stat-card">
          <span>Local Storage</span>
          <strong>No backend</strong>
        </div>
      </div>
    </section>
  `;
}

function renderCourseCard(course) {
  const enrolled = appState.enrolledCourses.includes(course.id);

  return `
    <article class="course-card">
      <img class="course-image" src="${course.image}" alt="${course.title}" />
      <div class="course-body">
        <div class="course-meta">
          <span>${course.instructor}</span>
          <span>${course.lessons.length} lessons</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="card-actions">
          <a href="#course/${course.id}" class="btn-outline">View details</a>
          <button class="btn-sm ${enrolled ? "btn-outline" : "btn-success"}" data-enroll="${course.id}">${enrolled ? "Enrolled" : "Enroll"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderSection(title, subtitle) {
  return `
    <div class="section-head">
      <div>
        <p class="section-subtitle">${subtitle}</p>
        <h2>${title}</h2>
      </div>
    </div>
  `;
}

function renderCoursesView() {
  return `
    <div class="section-panel">
      ${renderSection("Courses", "Browse all courses")}
      <div class="cards-grid">
        ${courses.map(renderCourseCard).join("")}
      </div>
    </div>
  `;
}

function renderDashboardView() {
  const enrolledCourses = courses.filter((course) => appState.enrolledCourses.includes(course.id));
  const completedLessons = enrolledCourses.reduce((sum, course) => {
    const progress = appState.progress[course.id] || [];
    return sum + progress.length;
  }, 0);
  const totalLessons = enrolledCourses.reduce((sum, course) => sum + course.lessons.length, 0);
  const progressPercent = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const courseProgressCards = enrolledCourses.length
    ? enrolledCourses
        .map((course) => {
          const completed = appState.progress[course.id] || [];
          const percent = Math.round((completed.length / course.lessons.length) * 100);
          return `
            <article class="progress-card">
              <p class="text-sm font-semibold text-slate-500">${course.title}</p>
              <strong>${percent}%</strong>
              <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
              <p>${completed.length}/${course.lessons.length} lessons completed</p>
            </article>
          `;
        })
        .join("")
    : `<p class="section-subtitle">No enrolled courses yet. Enroll from the courses page to build your dashboard.</p>`;

  return `
    <div class="section-panel">
      ${renderSection("Dashboard", "Track your learning progress")}
      <div class="dashboard-grid">
        <div class="progress-card">
          <p>Total enrolled courses</p>
          <strong>${enrolledCourses.length}</strong>
        </div>
        <div class="progress-card">
          <p>Completed lessons</p>
          <strong>${completedLessons}</strong>
        </div>
        <div class="progress-card">
          <p>Learning progress</p>
          <strong>${progressPercent}%</strong>
          <div class="progress-bar"><div class="progress-fill" style="width:${progressPercent}%"></div></div>
        </div>
      </div>
      <div class="section-head">
        <h2>Course progress</h2>
      </div>
      <div class="cards-grid">${courseProgressCards}</div>
    </div>
  `;
}

function renderProfileView() {
  const enrolledCourses = courses.filter((course) => appState.enrolledCourses.includes(course.id));
  const completedLessons = enrolledCourses.reduce((sum, course) => {
    const progress = appState.progress[course.id] || [];
    return sum + progress.length;
  }, 0);

  return `
    <div class="section-panel">
      ${renderSection("Profile", "Student account details")}
      <div class="profile-grid">
        <article class="profile-card">
          <p class="text-sm uppercase tracking-[0.25em] text-sky-600">Student name</p>
          <strong>Riya Sharma</strong>
        </article>
        <article class="profile-card">
          <p class="text-sm uppercase tracking-[0.25em] text-sky-600">Email</p>
          <strong>riya.sharma@example.com</strong>
        </article>
        <article class="profile-card">
          <p class="text-sm uppercase tracking-[0.25em] text-sky-600">Enrolled courses</p>
          <strong>${enrolledCourses.length}</strong>
        </article>
        <article class="profile-card">
          <p class="text-sm uppercase tracking-[0.25em] text-sky-600">Completed lessons</p>
          <strong>${completedLessons}</strong>
        </article>
      </div>
    </div>
  `;
}

function renderCourseDetailsView(course) {
  const enrolled = appState.enrolledCourses.includes(course.id);
  const completed = appState.progress[course.id] || [];
  const progressPercent = Math.round((completed.length / course.lessons.length) * 100);

  return `
    <div class="section-panel">
      <div class="course-details">
        <div class="course-details-main">
          <p class="section-subtitle">${course.instructor}</p>
          <h1>${course.title}</h1>
          <p>${course.details}</p>
          <div class="card-actions">
            <button class="btn-sm ${enrolled ? "btn-outline" : "btn-success"}" data-enroll="${course.id}">${enrolled ? "Already enrolled" : "Enroll in course"}</button>
            <span class="lesson-state">Progress ${progressPercent}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${progressPercent}%"></div></div>
        </div>
        <div class="section-panel">
          <p class="section-subtitle">Course summary</p>
          <strong>${course.lessons.length} lessons</strong>
          <p>${enrolled ? "Your progress is saved automatically as you complete lessons." : "Enroll to track lesson completion."}</p>
        </div>
      </div>
      <div class="section-head">
        <h2>Lessons</h2>
      </div>
      <div class="lesson-list">
        ${course.lessons
          .map(
            (lesson) => `
            <div class="lesson-card">
              <div>
                <p class="lesson-title">${lesson}</p>
              </div>
              <div class="card-actions">
                <span class="lesson-state">${completed.includes(lesson) ? "Completed" : "Pending"}</span>
                <button class="btn-sm ${completed.includes(lesson) ? "btn-outline" : "btn-success"}" data-toggle="${course.id}|${lesson}">
                  ${completed.includes(lesson) ? "Mark incomplete" : "Mark completed"}
                </button>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderHome() {
  return `
    ${renderHero()}
    ${renderCoursesView()}
  `;
}

function renderView() {
  setLoading(true);
  window.requestAnimationFrame(() => {
    let html = "";

    if (appState.currentView === "home") {
      html = renderHome();
    } else if (appState.currentView === "courses") {
      html = renderCoursesView();
    } else if (appState.currentView === "dashboard") {
      html = renderDashboardView();
    } else if (appState.currentView === "profile") {
      html = renderProfileView();
    } else if (appState.currentView === "courseDetails") {
      const course = getCourseById(appState.activeCourseId);
      html = course ? renderCourseDetailsView(course) : "<p>Course not found.</p>";
    }

    mainContent.innerHTML = html;
    attachHandlers();
    setLoading(false);
  });
}

function attachHandlers() {
  document.querySelectorAll("button[data-enroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const courseId = button.dataset.enroll;
      if (!appState.enrolledCourses.includes(courseId)) {
        appState.enrolledCourses.push(courseId);
        saveState();
        renderView();
      }
    });
  });

  document.querySelectorAll("button[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const [courseId, lesson] = button.dataset.toggle.split("|");
      const completed = appState.progress[courseId] || [];
      const updated = completed.includes(lesson)
        ? completed.filter((item) => item !== lesson)
        : [...completed, lesson];
      appState.progress[courseId] = updated;
      saveState();
      renderView();
    });
  });

  document.querySelectorAll(".btn-outline[href^='#course']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const route = event.currentTarget.getAttribute("href").substring(1).split("/");
      appState.currentView = "courseDetails";
      appState.activeCourseId = route[1];
      updateActiveLink();
      renderView();
    });
  });
}

function updateActiveLink() {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href").substring(1);
    if (target === appState.currentView || (appState.currentView === "courseDetails" && target === "courses")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initRouting() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith("course/")) {
    appState.currentView = "courseDetails";
    appState.activeCourseId = hash.split("/")[1];
  } else if (hash === "courses" || hash === "dashboard" || hash === "profile") {
    appState.currentView = hash;
  } else {
    appState.currentView = "home";
  }
}

function bindNavLinkEvents() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("href").slice(1);
      if (target === "home") {
        appState.currentView = "home";
      } else if (target === "courses") {
        appState.currentView = "courses";
      } else if (target === "dashboard") {
        appState.currentView = "dashboard";
      } else if (target === "profile") {
        appState.currentView = "profile";
      }
      window.location.hash = target === "home" ? "" : `#${target}`;
      updateActiveLink();
      renderView();
      if (navLinksContainer.classList.contains("open")) {
        navLinksContainer.classList.remove("open");
      }
    });
  });
}

function bindMobileMenu() {
  navToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });
}

function init() {
  initRouting();
  bindNavLinkEvents();
  bindMobileMenu();
  updateActiveLink();
  renderView();
}

init();
