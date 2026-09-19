import type React from 'react';

export type CountAction = { type: 'INC' } | { type: 'DEC' } | { type: 'RESET' };

export interface CounterContextType {
  count: number;
  dispatch: React.Dispatch<CountAction>;
}

export interface CounterProviderProps {
  children: React.ReactNode;
}
