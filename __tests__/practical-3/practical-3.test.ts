import {
  validateCubeInput,
  parseInputNumber,
} from '../../src/pages/practical-3/dashboard/dashboard.util';
import {
  generateBoxes,
  getNextColorState,
  calculateGridDimensions,
} from '../../src/pages/practical-3/detail/detail.util';

describe('Practical 3: Dashboard Utilities', () => {
  describe('validateCubeInput', () => {
    it('should validate valid integer strings between 1 and 20', () => {
      expect(validateCubeInput('4')).toEqual({ isValid: true });
      expect(validateCubeInput('1')).toEqual({ isValid: true });
      expect(validateCubeInput('20')).toEqual({ isValid: true });
      expect(validateCubeInput('  5  ')).toEqual({ isValid: true });
    });

    it('should reject empty or whitespace-only inputs', () => {
      const res = validateCubeInput('');
      expect(res.isValid).toBe(false);
      expect(res.error).toBe('Please enter a number');

      const resSpace = validateCubeInput('   ');
      expect(resSpace.isValid).toBe(false);
    });

    it('should reject non-integer or NaN inputs', () => {
      const res = validateCubeInput('abc');
      expect(res.isValid).toBe(false);
      expect(res.error).toBe('Please enter a valid whole number');

      const resFloat = validateCubeInput('3.5');
      expect(resFloat.isValid).toBe(false);
      expect(resFloat.error).toBe('Please enter a valid whole number');
    });

    it('should reject numbers <= 0', () => {
      const resZero = validateCubeInput('0');
      expect(resZero.isValid).toBe(false);
      expect(resZero.error).toBe('Number must be greater than 0');

      const resNegative = validateCubeInput('-5');
      expect(resNegative.isValid).toBe(false);
    });

    it('should reject numbers > 20', () => {
      const res = validateCubeInput('21');
      expect(res.isValid).toBe(false);
      expect(res.error).toBe('Maximum number limit is 20');
    });
  });

  describe('parseInputNumber', () => {
    it('should correctly parse integers', () => {
      expect(parseInputNumber('4')).toBe(4);
      expect(parseInputNumber(' 7 ')).toBe(7);
    });

    it('should return fallback if invalid', () => {
      expect(parseInputNumber('invalid', 4)).toBe(4);
      expect(parseInputNumber('-1', 4)).toBe(4);
      expect(parseInputNumber('', 5)).toBe(5);
    });
  });
});

describe('Practical 3: Detail Utilities (Cube Demo)', () => {
  describe('generateBoxes', () => {
    it('should generate N * N boxes for given count', () => {
      const boxes4 = generateBoxes(4);
      expect(boxes4).toHaveLength(16);
      expect(boxes4[0]).toEqual({
        id: 1,
        row: 1,
        col: 1,
        cubeVal: 1,
        value: 1,
      });
      expect(boxes4[15]).toEqual({
        id: 16,
        row: 4,
        col: 4,
        cubeVal: 16 * 16 * 16,
        value: 16,
      });

      const boxes3 = generateBoxes(3);
      expect(boxes3).toHaveLength(9);
    });

    it('should handle minimum count of 1', () => {
      const boxes = generateBoxes(0);
      expect(boxes).toHaveLength(1);
    });
  });

  describe('getNextColorState', () => {
    it('should cycle color state 0 -> 1 -> 2 -> 0', () => {
      expect(getNextColorState(0)).toBe(1);
      expect(getNextColorState(1)).toBe(2);
      expect(getNextColorState(2)).toBe(0);
      expect(getNextColorState()).toBe(1);
    });
  });

  describe('calculateGridDimensions', () => {
    it('should calculate columns and box width correctly', () => {
      const dims = calculateGridDimensions(400, 4, 32, 10);
      expect(dims.columns).toBe(4);
      expect(dims.boxWidth).toBeGreaterThan(0);

      const dims2 = calculateGridDimensions(400, 2, 32, 10);
      expect(dims2.columns).toBe(2);
    });

    it('should cap columns at 4 max and 1 min', () => {
      const maxDims = calculateGridDimensions(400, 10, 32, 10);
      expect(maxDims.columns).toBe(4);

      const minDims = calculateGridDimensions(400, 0, 32, 10);
      expect(minDims.columns).toBe(1);
    });
  });
});
