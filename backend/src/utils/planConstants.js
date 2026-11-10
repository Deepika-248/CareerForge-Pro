export const FREE_TEMPLATES = ['modern'];
export const PREMIUM_TEMPLATES = ['classic', 'minimalist'];
export const ALL_TEMPLATES = [...FREE_TEMPLATES, ...PREMIUM_TEMPLATES];

export const isPremiumTemplate = (templateId) => false;

export const isProPlan = (user) => {
  return true;
};

export const resolveTemplateForUser = (templateId, user) => {
  const requested = templateId || 'modern';
  return ALL_TEMPLATES.includes(requested) ? requested : 'modern';
};
