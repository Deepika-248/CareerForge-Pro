import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronUp, ChevronDown, Trash2, Plus } from 'lucide-react';

const EducationSection = ({
  activeAccordion,
  toggleAccordion,
  education,
  handleRemoveEducation,
  handleUpdateEducation,
  handleAddEducation,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      <button
        onClick={() => toggleAccordion('education')}
        className="w-full px-5 py-4 flex items-center justify-between font-bold font-display text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <GraduationCap className="w-4 h-4 text-indigo-600" />
          <span>Education ({education.length})</span>
        </div>
        {activeAccordion === 'education' ? <ChevronUp className="w-4.5 h-4.5 text-slate-500" /> : <ChevronDown className="w-4.5 h-4.5 text-slate-500" />}
      </button>

      <AnimatePresence>
        {activeAccordion === 'education' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-slate-100 text-left"
          >
            <div className="p-5 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-4 p-4 bg-slate-50/70 rounded-xl relative border border-slate-200">
                  <button
                    onClick={() => handleRemoveEducation(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <h6 className="text-xs font-bold text-indigo-600">School #{idx + 1}</h6>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">School/University</label>
                      <input
                        type="text"
                        placeholder="Stanford"
                        value={edu.school}
                        onChange={(e) => handleUpdateEducation(idx, 'school', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Degree & Major</label>
                      <input
                        type="text"
                        placeholder="B.S. Computer Science"
                        value={edu.degree}
                        onChange={(e) => handleUpdateEducation(idx, 'degree', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Location</label>
                      <input
                        type="text"
                        placeholder="Stanford, CA"
                        value={edu.location}
                        onChange={(e) => handleUpdateEducation(idx, 'location', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">Start Year</label>
                      <input
                        type="text"
                        placeholder="2020"
                        value={edu.startDate}
                        onChange={(e) => handleUpdateEducation(idx, 'startDate', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-500 uppercase">End Year</label>
                      <input
                        type="text"
                        placeholder="2024"
                        value={edu.endDate}
                        onChange={(e) => handleUpdateEducation(idx, 'endDate', e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 focus:border-indigo-600 rounded-lg text-xs text-slate-900 focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddEducation}
                className="w-full py-2.5 border border-dashed border-slate-300 hover:border-indigo-600 hover:bg-indigo-50/30 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add School
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationSection;
