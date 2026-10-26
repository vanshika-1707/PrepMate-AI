// src/features/auth/pages/Register.jsx

import { useState } from "react";
import { Link } from "react-router";
import {
  User,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";
import { useNavigate } from "react-router";
import { register } from "../api/authApi.js";

export default function Register() {
  const navigate = useNavigate();
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regInterest, setRegInterest] = useState(
    "Full Stack Development"
  );
  const [regAgreed, setRegAgreed] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLengthValid = regPassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(regPassword);
  const hasSpecialChar = /[@#$]/.test(regPassword);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRequestError("");

    const newErrors = {};

    if (regName.trim().length < 2) {
      newErrors.name = "Enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!isLengthValid) {
      newErrors.password = "Password must have at least 8 characters.";
    } else if (!hasUppercase) {
      newErrors.password = "Include at least one uppercase letter.";
    } else if (!hasSpecialChar) {
      newErrors.password = "Include @, #, or $.";
    }

    if (!regAgreed) {
      newErrors.terms = "Please accept the Terms & Conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await register({
          username: regName.trim(),
          email: regEmail.trim(),
          password: regPassword,
        });
        navigate("/login", {
          replace: true,
          state: { message: "Account created. Please sign in." },
        });
      } catch (error) {
        setRequestError(
          error instanceof Error
            ? error.message
            : "Unable to create your account. Please try again.",
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
          Start your{" "}
          <span className="text-sky-600">success story</span>
        </h1>

        <p className="mt-2 mb-6 text-sm text-slate-500">
          Create your TalentPulse account.
        </p>

        {requestError && (
          <p role="alert" className="mb-4 text-sm text-rose-500">
            {requestError}
          </p>
        )}

        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label htmlFor="reg-name" className="mb-1 block text-sm font-medium">
              Full name
            </label>
            <div className="relative">
              <input
                type="text"
                id="reg-name"
                name="name"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-10 outline-none focus:border-sky-500"
              />
              <User size={18} className="absolute right-3 top-3 text-slate-400" />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-rose-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="reg-email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="reg-email"
                name="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-10 outline-none focus:border-sky-500"
              />
              <Mail size={18} className="absolute right-3 top-3 text-slate-400" />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-rose-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="reg-password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showRegPassword ? "text" : "password"}
                id="reg-password"
                name="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-12 outline-none focus:border-sky-500"
              />
              <button
                type="button"
                onClick={() => setShowRegPassword(!showRegPassword)}
                className="absolute right-3 top-3 text-slate-500"
                aria-label="Toggle password visibility"
              >
                {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="mt-2 space-y-1 text-xs">
              <p className={isLengthValid ? "text-emerald-600" : "text-slate-400"}>
                {isLengthValid ? "✓" : "○"} At least 8 characters
              </p>
              <p className={hasUppercase ? "text-emerald-600" : "text-slate-400"}>
                {hasUppercase ? "✓" : "○"} One uppercase letter
              </p>
              <p className={hasSpecialChar ? "text-emerald-600" : "text-slate-400"}>
                {hasSpecialChar ? "✓" : "○"} One special character (@, #, $)
              </p>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-rose-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Area of interest
            </label>
            <select
              value={regInterest}
              id="reg-interest"
              name="interest"
              onChange={(e) => setRegInterest(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <option>Full Stack Development</option>
              <option>Frontend & UI Engineering</option>
              <option>Gen AI & Machine Learning</option>
              <option>Cloud & DevOps Engineering</option>
              <option>Product & Project Management</option>
              <option>Data Science & Analytics</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                id="reg-terms"
                name="terms"
                checked={regAgreed}
                onChange={(e) => setRegAgreed(e.target.checked)}
              />
              I agree to the Terms & Conditions.
            </label>
            {errors.terms && (
              <p className="mt-1 text-sm text-rose-500">{errors.terms}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-sky-500 p-3 font-bold text-white hover:bg-sky-600"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-sky-600">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}