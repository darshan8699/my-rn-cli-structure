import { DashboardValidationResult } from './dashboard.type';

export const validateCubeInput = (val: string): DashboardValidationResult => {
  const trimmed = val.trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: 'Please enter a number',
    };
  }
  const num = Number(trimmed);
  if (isNaN(num) || !Number.isInteger(num)) {
    return {
      isValid: false,
      error: 'Please enter a valid whole number',
    };
  }
  if (num <= 0) {
    return {
      isValid: false,
      error: 'Number must be greater than 0',
    };
  }
  if (num > 20) {
    return {
      isValid: false,
      error: 'Maximum number limit is 20',
    };
  }
  return {
    isValid: true,
  };
};

export const parseInputNumber = (val: string, fallback: number = 4): number => {
  const parsed = parseInt(val.trim(), 10);
  return isNaN(parsed) || parsed <= 0 ? fallback : parsed;
};
