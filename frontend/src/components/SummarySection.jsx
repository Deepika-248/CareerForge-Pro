import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

const SummarySection = ({
  activeAccordion,
  toggleAccordion,
  summary,
  handleSummaryChange,
  openMagicOptimizer,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      <button
        onClick={() => toggleAccordion('summary')}
        className="w-full px-5 py-4 flex items-center justify-between font-bold font-display text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FileText className="w-4 h-4 text-indigo-600" />
          <span>Professional Summary</span>
        </div>
        {activeAccordion === 'summary' ? <ChevronUp className="w-4.5 h-4.5 text-slate-500" /> : <ChevronDown className="w-4.5 h-4.5 text-slate-500" />}
      </button>

      <AnimatePresence>
        {activeAccordion === 'summary' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-slate-100 text-left"
          >
            <div className="p-5 space-y-3">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Professional Bio</label>
              <textarea
                rows={4}
                placeholder="Write a compelling, core target profile summarizing your experience and top skills..."
                value={summary}
                onChange={(e) => handleSummaryChange(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-lg text-sm text-slate-900 focus:outline-none resize-y placeholder:text-slate-400 transition-colors"
              />
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => openMagicOptimizer('summary', summary, (newVal) => handleSummaryChange(newVal))}
                  className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-indigo-500/20 cursor-pointer hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Magic AI Rewrite</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SummarySection;
