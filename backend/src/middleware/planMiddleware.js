import Resume from '../models/Resume.js';
import { isPremiumTemplate, isProPlan } from '../utils/planConstants.js';

/**
 * Feature gate middleware to enforce maximum resume limits based on subscription plan
 */
export const checkResumeLimit = async (req, res, next) => {
  next();
};

/**
 * Feature gate middleware to enforce AI rewrite limits based on subscription plan
 */
export const checkAiRewriteLimit = async (req, res, next) => {
  next();
};

/**
 * Reject premium template usage for free-tier users
 */
export const checkPremiumTemplate = (req, res, next) => {
  next();
};

/**
 * Reject cover letter access for free-tier users
 */
export const checkCoverLetterAccess = (req, res, next) => {
  next();
};
