import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronUp, ChevronDown, Trash2, Plus } from 'lucide-react';

const LanguagesSection = ({
  activeAccordion,
  toggleAccordion,
  languages,
  handleRemoveLanguage,
  handleUpdateLanguage,
  handleAddLanguage,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      <button
        onClick={() => toggleAccordion('languages')}
        className="w-full px-5 py-4 flex items-center justify-between font-bold font-display text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-indigo-600" />
          <span>Languages ({languages.length})</span>
        </div>
        {activeAccordion === 'languages' ? <ChevronUp className="w-4.5 h-4.5 text-slate-500" /> : <ChevronDown className="w-4.5 h-4.5 text-slate-500" />}
      </button>

      <AnimatePresence>
        {activeAccordion === 'languages' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-slate-100 text-left"
          >
            <div className="p-5 space-y-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-3 p-4 bg-slate-50/70 rounded-xl relative border border-slate-200">
                  <button
                    onClick={() => handleRemoveLanguage(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <h6 className="text-xs font-bold text-indigo-600">Language #{idx + 1}</h6>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Language</label>
                      <input
                        type="text"
                        placeholder="Spanish"
                        value={lang.language}
                        onChange={(e) => handleUpdateLanguage(idx, 'language', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Proficiency</label>
                      <input
                        type="text"
                        placeholder="Native / Professional"
                        value={lang.proficiency}
                        onChange={(e) => handleUpdateLanguage(idx, 'proficiency', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddLanguage}
                className="w-full py-2.5 border border-dashed border-slate-300 hover:border-indigo-600 hover:bg-indigo-50/30 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Language
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguagesSection;
