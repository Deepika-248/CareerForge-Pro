import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { motion } from 'framer-motion';
import { 
  Palette, 
  User, 
  CreditCard, 
  LifeBuoy, 
  Info,
  ExternalLink,
  Mail,
  AlertTriangle,
  Sun
} from 'lucide-react';
import { staggerContainer, staggerItem } from '../animations/staggerAnimations';
import { professionalCardVariant } from '../animations/cardAnimations';

const SettingsView = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto space-y-8 text-left">
      <motion.div 
        variants={professionalCardVariant}
        className="flex items-center justify-between pb-4 border-b border-slate-200"
      >
        <div>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Account Settings
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage your application preferences and account details.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appearance */}
        <motion.div variants={professionalCardVariant} whileHover="hover" className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Appearance</h3>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-amber-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">White Theme (Default)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Clean light design with high readability and blue accents</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md">Active</span>
            </div>
          </div>
        </motion.div>

        {/* Account Info */}
        <motion.div variants={professionalCardVariant} whileHover="hover" className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Account Profile</h3>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
              <p className="text-sm font-semibold text-slate-900 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                {user?.name || 'Not provided'}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
              <p className="text-sm font-semibold text-slate-900 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                {user?.email || 'Not provided'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subscription */}
        <motion.div variants={professionalCardVariant} whileHover="hover" className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Subscription</h3>
          </div>
          
          <div className="flex flex-col flex-1 justify-between gap-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-sm font-semibold text-slate-700">Current Plan</span>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wide ${
                user?.plan === 'PRO' ? 'bg-amber-400 text-slate-900 shadow-xs' : 'bg-slate-200 text-slate-700'
              }`}>
                {user?.plan || 'FREE'}
              </span>
            </div>

            <button
              onClick={() => navigate('/billing')}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Manage Subscription & Plans</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div variants={professionalCardVariant} whileHover="hover" className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-rose-50 rounded-xl text-rose-600">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Support & Help</h3>
          </div>
          
          <div className="flex flex-col flex-1 gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-200 rounded-xl text-left transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">Contact Support</p>
                  <p className="text-xs text-slate-500">Submit an inquiry or get technical help</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </button>

            <a
              href="mailto:support@careerforge.pro"
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-200 rounded-xl text-left transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">Direct Email</p>
                  <p className="text-xs text-slate-500">support@careerforge.pro</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SettingsView;
