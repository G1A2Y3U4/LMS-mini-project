import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Great! ${name}, your account is ready.`);
    navigate("/dashboard");
  };

  return (
    <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
      <h1 className="text-3xl font-semibold text-slate-900">Create account</h1>
      <p className="mt-3 text-slate-600">Register to manage your courses and track learning progress.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <label className="block space-y-2 text-sm text-slate-700">
          <span>Full name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </label>
        <label className="block space-y-2 text-sm text-slate-700">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          Register
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account? <Link to="/login" className="font-semibold text-sky-600">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
