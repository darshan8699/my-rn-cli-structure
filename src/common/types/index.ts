// Common Types — shared interfaces and navigation param lists

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// ─── Root Navigator ───────────────────────────────────────────────────────────
export type RootStackParamList = {
  Home: undefined;
  Practical1: undefined;
  Practical2: undefined;
};

// ─── Practical 1 — Auth Stack ─────────────────────────────────────────────────
export type P1AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  MainTabs: undefined;
};

// ─── Practical 1 — Main Tab ───────────────────────────────────────────────────
export type P1MainTabParamList = {
  Dashboard: undefined;
  Account: undefined;
  Settings: undefined;
};

// ─── Practical 2 — Stack ──────────────────────────────────────────────────────
export type P2StackParamList = {
  P2Dashboard: undefined;
  ReduxDemo: undefined;
  ReduxToolkitDemo: undefined;
  ZustandDemo: undefined;
  MobXDemo: undefined;
  ContextDemo: undefined;
  ReactQueryDemo: undefined;
  CrudApiDemo: undefined;
  GraphQLDemo: undefined;
  ReduxApiDemo: undefined;
};
