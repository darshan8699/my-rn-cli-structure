# Practical 1 — Auth Flow

## Overview
Practical 1 demonstrates a complete authentication flow with a 3-tab post-login experience built using React Navigation.

---

## Navigation Structure

```
Practical1Navigator (NativeStackNavigator)
├── LoginScreen          ← Entry point
├── SignupScreen
└── ForgotPasswordScreen

After login → MainTabNavigator (BottomTabNavigator)
├── 🏠 Dashboard
├── 👤 Account
└── ⚙️ Settings
```

**Navigator file:** `src/navigation/practical-1.navigator.tsx`

---

## Folder Structure

```
src/
├── navigation/
│   └── practical-1.navigator.tsx
│
├── pages/practical-1/
│   ├── auth/
│   │   ├── login/
│   │   │   ├── login.tsx           ← Screen component
│   │   │   ├── login.style.ts      ← Styles
│   │   │   └── login.type.ts       ← Types & nav prop
│   │   ├── signup/
│   │   │   ├── signup.tsx
│   │   │   ├── signup.style.ts
│   │   │   └── signup.type.ts
│   │   └── forgot-password/
│   │       ├── forgot-password.tsx
│   │       ├── forgot-password.style.ts
│   │       └── (no local types needed)
│   └── main/
│       ├── dashboard/
│       │   ├── dashboard.tsx
│       │   ├── dashboard.style.ts
│       │   └── dashboard.type.ts
│       ├── account/
│       │   ├── account.tsx
│       │   └── account.style.ts
│       └── setting/
│           ├── setting.tsx
│           └── setting.style.ts
│
└── components/modules/practical-1/   ← Reusable module-level components
```

---

## Screens

### Login Screen
**File:** `src/pages/practical-1/auth/login/login.tsx`

| Field | Validation |
|-------|-----------|
| Email | Required · Must be valid email format |
| Password | Required · Minimum 6 characters |

- Navigates to `ForgotPassword` via text link
- Navigates to `Signup` via text link
- On success → navigates to Main Dashboard Tabs

### Signup Screen
**File:** `src/pages/practical-1/auth/signup/signup.tsx`

| Field | Validation |
|-------|-----------|
| Full Name | Required |
| Email | Required · Must be valid email format |
| Password | Required · Minimum 6 characters |
| Confirm Password | Required · Must match Password |

### Forgot Password Screen
**File:** `src/pages/practical-1/auth/forgot-password/forgot-password.tsx`

| Field | Validation |
|-------|-----------|
| Email | Required · Must be valid email format |

- Shows success UI after sending (no actual API call — simulated)
- "Back to Login" button appears after success

### Dashboard Screen (Tab 1)
**File:** `src/pages/practical-1/main/dashboard/dashboard.tsx`

Displays a stats grid (Total Users, Revenue, Orders, Tickets) and a Recent Activity feed.

### Account Screen (Tab 2)
**File:** `src/pages/practical-1/main/account/account.tsx`

Simple profile card with user name and email.

### Settings Screen (Tab 3)
**File:** `src/pages/practical-1/main/setting/setting.tsx`

Settings rows: Notifications, Dark Mode.

---

## File Naming Convention

| File | Purpose |
|------|---------|
| `screen.tsx` | React component (UI + logic) |
| `screen.style.ts` | All `StyleSheet.create({})` styles |
| `screen.type.ts` | Interfaces, types, nav prop aliases |

---

## Packages Used

| Package | Purpose |
|---------|---------|
| `@react-navigation/native` | Navigation container |
| `@react-navigation/native-stack` | Stack navigator |
| `@react-navigation/bottom-tabs` | Bottom tab navigator |
| `react-native-screens` | Native screen optimization |
| `react-native-safe-area-context` | Safe area insets |
