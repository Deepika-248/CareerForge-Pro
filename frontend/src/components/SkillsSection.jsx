import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ChevronUp, ChevronDown, Trash2, Plus } from 'lucide-react';

const SkillsSection = ({
  activeAccordion,
  toggleAccordion,
  skills,
  localSkillsText,
  handleRemoveSkillCategory,
  handleUpdateSkillCategory,
  handleAddSkillCategory,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      <button
        onClick={() => toggleAccordion('skills')}
        className="w-full px-5 py-4 flex items-center justify-between font-bold font-display text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Wrench className="w-4 h-4 text-indigo-600" />
          <span>Skills ({skills.length})</span>
        </div>
        {activeAccordion === 'skills' ? <ChevronUp className="w-4.5 h-4.5 text-slate-500" /> : <ChevronDown className="w-4.5 h-4.5 text-slate-500" />}
      </button>

      <AnimatePresence>
        {activeAccordion === 'skills' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-slate-100 text-left"
          >
            <div className="p-5 space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-3 p-4 bg-slate-50/70 rounded-xl relative border border-slate-200">
                  <button
                    onClick={() => handleRemoveSkillCategory(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <h6 className="text-xs font-bold text-indigo-600">Skill Group #{idx + 1}</h6>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Group Name</label>
                      <input
                        type="text"
                        placeholder="Languages"
                        value={skill.name}
                        onChange={(e) => handleUpdateSkillCategory(idx, 'name', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Proficiency Level (Optional)</label>
                      <input
                        type="text"
                        placeholder="Expert"
                        value={skill.level}
                        onChange={(e) => handleUpdateSkillCategory(idx, 'level', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase">Keywords (Comma Separated)</label>
                    <input
                      type="text"
                      placeholder="React, JavaScript, HTML, CSS"
                      value={localSkillsText[idx] !== undefined ? localSkillsText[idx] : (skill.keywords ? skill.keywords.join(', ') : '')}
                      onChange={(e) => handleUpdateSkillCategory(idx, 'keywords', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                    />
                    <p className="text-[9px] text-slate-500">Separate keywords with commas. Essential for ATS matching filters.</p>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddSkillCategory}
                className="w-full py-2.5 border border-dashed border-slate-300 hover:border-indigo-600 hover:bg-indigo-50/30 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Skill Group
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsSection;
