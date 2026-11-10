import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';

const UploadResumeModal = ({
  isOpen,
  onClose,
  isImportingResume,
  selectedResumeFile,
  uploadError,
  uploadSuccess,
  handleResumeFileChange,
  handleResumeImport,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 text-left"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden flex flex-col"
          >
            <div className="bg-white px-6 py-4 flex items-center justify-between text-slate-900 shrink-0 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                  <Upload className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-wide text-slate-900">Upload Existing Resume</h3>
                  <p className="text-[10px] text-slate-500 font-medium">Import a PDF or DOCX into the builder schema</p>
                </div>
              </div>
              <button
                onClick={onClose}
                disabled={isImportingResume}
                className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-slate-800">
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50 text-center">
                <Upload className="w-9 h-9 mx-auto text-indigo-600 mb-3" />
                <label className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-indigo-500/20">
                  Choose PDF or DOCX
                  <input
                    type="file"
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeFileChange}
                    disabled={isImportingResume}
                    className="sr-only"
                  />
                </label>
                <p className="mt-3 text-xs text-slate-500 font-medium">
                  {selectedResumeFile ? selectedResumeFile.name : 'Supported formats: .pdf and .docx'}
                </p>
              </div>

              {uploadError && (
                <div className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-700">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <span>{uploadError}</span>
                </div>
              )}

              {uploadSuccess && (
                <div className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{uploadSuccess}</span>
                </div>
              )}

              <p className="text-[11px] leading-relaxed text-slate-500">
                CareerForge will extract text, use AI to map it into your existing resume fields, update this builder, and save through the current save flow.
              </p>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 text-xs shrink-0">
              <button
                onClick={onClose}
                disabled={isImportingResume}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl font-bold transition-all cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleResumeImport}
                disabled={isImportingResume || !selectedResumeFile}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isImportingResume ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                <span>{isImportingResume ? 'Importing...' : 'Import Resume'}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UploadResumeModal;
