// src/features/auth/pages/Login.jsx

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Mail, Eye, EyeOff, XCircle } from "lucide-react";
import { login } from "../api/authApi.js";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRemember, setLoginRemember] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setRequestError("");

    const newErrors = {};

    if (
      !loginEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)
    ) {
      newErrors.loginEmail = "Please enter a valid email address.";
    }

    if (!loginPassword) {
      newErrors.loginPassword = "Password is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await login({
          email: loginEmail.trim(),
          password: loginPassword,
        });
        navigate("/", { replace: true });
      } catch (error) {
        setRequestError(
          error instanceof Error
            ? error.message
            : "Unable to sign in. Please try again.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-sky-50 to-blue-50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Welcome back to{" "}
          <span className="text-sky-600">TalentPulse</span>
        </h1>

        <p className="mt-2 mb-6 text-sm text-slate-500">
          Enter your email and password to continue.
        </p>

        {location.state?.message && (
          <p role="status" className="mb-4 text-sm text-emerald-700">
            {location.state.message}
          </p>
        )}

        {requestError && (
          <p role="alert" className="mb-4 text-sm text-rose-500">
            {requestError}
          </p>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="login-email"
                name="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-10 outline-none focus:border-sky-500"
              />
              <Mail className="absolute right-3 top-3 text-slate-400" size={18} />
            </div>

            {errors.loginEmail && (
              <p className="mt-1 text-sm text-rose-500">
                <XCircle size={14} className="mr-1 inline" />
                {errors.loginEmail}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="login-password" className="mb-1 block text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                id="login-password"
                name="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-12 outline-none focus:border-sky-500"
              />

              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute right-3 top-3 text-slate-500"
                aria-label="Toggle password visibility"
              >
                {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.loginPassword && (
              <p className="mt-1 text-sm text-rose-500">
                {errors.loginPassword}
              </p>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              id="login-remember"
              name="remember"
              checked={loginRemember}
              onChange={(e) => setLoginRemember(e.target.checked)}
            />
            Keep me signed in
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-sky-500 p-3 font-bold text-white hover:bg-sky-600"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold text-sky-600">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}