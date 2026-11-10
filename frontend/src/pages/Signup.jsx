import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  Sparkles,
  FileText,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

const Signup = () => {
  const {
    signup,
    loading,
    error: authError,
    clearError,
    isAuthenticated,
  } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    clearError();
    setServerError(null);
  }, [clearError]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    setServerError(null);

    const result = await signup(
      data.name,
      data.email,
      data.password
    );

    if (!result.success) {
      setServerError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">
      {/* Left side hero branding (visible on lg screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 xl:p-14 overflow-hidden bg-slate-50 border-r border-slate-200 h-screen max-h-screen">
        {/* Soft Background Blurs */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Top: Logo Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              CareerForge Pro
            </h1>
            <p className="text-indigo-600 text-[10px] font-bold tracking-wider uppercase">
              AI Resume Architect
            </p>
          </div>
        </div>

        {/* Middle: Hero Content & Feature Cards */}
        <div className="relative z-10 my-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
              Start Building
              <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> Smarter</span>
              <br />
              Resumes Today.
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Create ATS-optimized resumes powered by AI and land
              more interviews with intelligent job matching.
            </p>

            <div className="space-y-3">
              <Feature
                icon={<Rocket className="w-4 h-4" />}
                title="Instant Resume Generation"
                text="Create modern resumes in minutes."
              />

              <Feature
                icon={<FileText className="w-4 h-4" />}
                title="AI Keyword Optimization"
                text="Improve ATS score automatically."
              />

              <Feature
                icon={<ShieldCheck className="w-4 h-4" />}
                title="Professional Templates"
                text="Designed for recruiters and hiring systems."
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom: Trust Badge / Footer */}
        <div className="relative z-10 flex items-center gap-4 text-slate-500 text-[11px] font-medium">
          <p>© {new Date().getFullYear()} CareerForge Pro. All rights reserved.</p>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="flex items-center gap-1 text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Enterprise Secured
          </p>
        </div>
      </div>

      {/* Right side signup form */}
      <div className="flex-1 flex items-center justify-center bg-white p-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 shadow-md shadow-indigo-500/20 mb-4">
              <Sparkles className="text-white w-7 h-7" />
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              CareerForge Pro
            </h1>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Create Account
              </h2>

              <p className="text-slate-500 text-sm">
                Start building AI-powered resumes today.
              </p>
            </div>

            <AnimatePresence>
              {(serverError || authError) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex gap-3 text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                  <span>{serverError || authError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-50 border ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
                    } outline-none text-slate-900 placeholder:text-slate-400 transition-all font-medium text-sm`}
                    {...register('name', {
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                  />
                </div>

                {errors.name && (
                  <p className="text-red-600 text-xs mt-2 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-50 border ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
                    } outline-none text-slate-900 placeholder:text-slate-400 transition-all font-medium text-sm`}
                    {...register('email', {
                      required: 'Email address is required',
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-600 text-xs mt-2 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`w-full h-14 pl-12 pr-12 rounded-2xl bg-slate-50 border ${
                      errors.password
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
                    } outline-none text-slate-900 placeholder:text-slate-400 transition-all font-medium text-sm`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-600 text-xs mt-2 font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 cursor-pointer active:scale-98"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs transition-all hover:border-indigo-300 hover:shadow-sm hover:translate-x-1 duration-200">
    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
      {icon}
    </div>

    <div>
      <h4 className="text-slate-900 font-bold text-sm mb-0.5">
        {title}
      </h4>

      <p className="text-slate-500 text-xs leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

export default Signup;
