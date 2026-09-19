# 📁 Project Folder Structure

> React Native CLI project structure — organized by feature responsibility, responsive design tokens, and modular separation of concerns.

---

```
MyRNCliStructure/
├── android/                        # Android native project
├── ios/                            # iOS native project
├── __tests__/                      # Root-level test suites (App.test.tsx)
├── src/                            # All application source code
│   ├── assets/                     # Static assets
│   │   ├── animations/             # Lottie JSON animations (e.g. Loader.json)
│   │   ├── fonts/                  # Custom typography font files (e.g. Inter-Black.ttf)
│   │   ├── images/                 # Image assets (PNG, SVG, etc.)
│   │   └── other/                  # Miscellaneous media files (e.g. Video.mp4)
│   │
│   ├── common/                     # Shared utilities, types, enums & design system
│   │   ├── enums/                  # Application-wide enumerations
│   │   │   ├── api.enum.ts         # API endpoints and methods enum
│   │   │   ├── gender.enum.ts      # Gender selection enum
│   │   │   ├── storages.enum.ts    # Storage key enums (AsyncStorage keys)
│   │   │   └── theme.enum.ts       # Theme mode enums (light / dark)
│   │   │
│   │   ├── theme/                  # Centralized responsive design tokens
│   │   │   ├── responsive.ts       # Responsive scaling helpers (scale, verticalScale, moderateScale, wp, hp, rf)
│   │   │   ├── color.ts            # Palette tokens (primary, secondary, surface, text, etc.)
│   │   │   ├── font.ts             # Font family constants (regular, medium, semiBold, bold)
│   │   │   ├── font-size.ts        # Responsive typography scale (xs, sm, md, lg, xl, xxl, display)
│   │   │   ├── spacing.ts          # Responsive spacing scale (xs, sm, md, lg, xl, xxl)
│   │   │   ├── border-radius.ts    # Responsive border radius scale (xs, sm, md, lg, xl, full)
│   │   │   └── index.ts            # Unified theme re-export entry point
│   │   │
│   │   ├── types/                  # Global TypeScript type declarations
│   │   │   └── index.ts            # Navigation ParamLists & root state types
│   │   │
│   │   └── utils/                  # Pure utility/helper functions
│   │       ├── delay.ts            # Promise delay helper
│   │       ├── json.ts             # JSON safe parse/stringify helpers
│   │       ├── num.ts              # Number formatting utilities
│   │       ├── promise.ts          # Promise helper utilities
│   │       └── index.ts            # Re-exports all utilities
│   │
│   ├── components/                 # Reusable UI component library
│   │   └── common/                 # Generic shared UI components
│   │       ├── button/             # Reusable Button component
│   │       │   ├── button.tsx      # Component implementation
│   │       │   ├── button.style.ts # Responsive styles
│   │       │   ├── button.type.ts  # Prop type definitions
│   │       │   ├── button.test.tsx # Jest unit tests
│   │       │   └── index.ts        # Module export
│   │       │
│   │       ├── textinput/          # Reusable AppTextInput component
│   │       │   ├── textinput.tsx   # Component implementation with password toggle
│   │       │   ├── textinput.style.ts
│   │       │   ├── textinput.type.ts
│   │       │   ├── textinput.test.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── text/               # Reusable AppText component
│   │       │   ├── text.tsx        # Component implementation with typography variants
│   │       │   ├── text.style.ts
│   │       │   ├── text.type.ts
│   │       │   ├── text.test.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── modals/             # Reusable AppModal dialog component
│   │       │   ├── modal.tsx       # Component implementation with backdrop & action buttons
│   │       │   ├── modal.style.ts
│   │       │   ├── modal.type.ts
│   │       │   ├── modal.test.tsx
│   │       │   └── index.ts
│   │       │
│   │       └── index.ts            # Centralized export for all common components
│   │
│   ├── config/                     # Application configuration
│   │   └── index.ts                # Environment configurations and constants
│   │
│   ├── data/                       # Static & mock datasets
│   │   ├── mock-users.data.ts      # Mock users data
│   │   └── nav-menu-items.data.ts  # Nav menu items data
│   │
│   ├── doc/                        # Project documentation
│   │   ├── folder-structure.md     # This architecture guide
│   │   └── git.md                  # Git workflows and branching strategy
│   │
│   ├── navigation/                 # Navigation stacks and tab bars
│   │   ├── index.tsx               # Root navigation container & stack
│   │   ├── practical-1.navigator.tsx
│   │   ├── practical-1.navigator.style.ts
│   │   └── practical-2.navigator.tsx
│   │
│   └── pages/                      # Screen-level route components
│       ├── home/                   # Practicals launcher home screen
│       │   ├── home.tsx            # Home screen view
│       │   ├── home.style.ts       # Separated styles
│       │   ├── home.type.ts        # Route navigation props
│       │   └── home.data.ts        # Practical items list
│       │
│       ├── practical-1/            # Practical 1: Auth flow & Tab navigation
│       │   ├── auth/               # Unauthenticated stack screens
│       │   │   ├── login/          # (login.tsx, login.style.ts, login.type.ts)
│       │   │   ├── signup/         # (signup.tsx, signup.style.ts, signup.type.ts)
│       │   │   └── forgot-password/# (forgot-password.tsx, forgot-password.style.ts, forgot-password.type.ts)
│       │   └── main/               # Authenticated bottom tab screens
│       │       ├── dashboard/      # (dashboard.tsx, dashboard.style.ts, dashboard.data.ts, dashboard.type.ts)
│       │       ├── account/        # (account.tsx, account.style.ts, account.type.ts)
│       │       └── setting/        # (setting.tsx, setting.style.ts, setting.type.ts)
│       │
│       └── practical-2/            # Practical 2: State management & API integration demos
│           ├── dashboard/          # (p2-dashboard.tsx, p2-dashboard.style.ts, p2-dashboard.data.ts, p2-dashboard.type.ts)
│           ├── context/            # React Context demo (context-demo.tsx, context-demo.style.ts, context-demo.type.ts)
│           ├── redux/              # Classic Redux demo (redux-demo.tsx, redux-demo.style.ts, redux-demo.type.ts)
│           ├── redux-toolkit/      # RTK demo (redux-toolkit-demo.tsx, redux-toolkit-demo.style.ts, redux-toolkit-demo.type.ts)
│           ├── zustand/            # Zustand demo (zustand-demo.tsx, zustand-demo.style.ts, zustand-demo.type.ts)
│           ├── mobx/               # MobX demo (mobx-demo.tsx, mobx-demo.style.ts, mobx-demo.type.ts)
│           ├── crud-api/           # CRUD REST demo (crud-api-demo.tsx, crud-api-demo.style.ts, crud-api-demo.type.ts)
│           ├── graphql/            # GraphQL demo (graphql-demo.tsx, graphql-demo.style.ts, graphql-demo.type.ts)
│           ├── react-query/        # React Query demo (react-query-demo.tsx, react-query-demo.style.ts, react-query-demo.type.ts)
│           └── redux-api/          # Redux Toolkit Query / AsyncThunk demo (redux-api-demo.tsx, redux-api-demo.style.ts, redux-api-demo.type.ts)
│
├── App.tsx                         # Root application component
├── index.js                        # React Native app entry point
├── app.json                        # App name & display metadata
├── babel.config.js                 # Babel preset configuration
├── metro.config.js                 # Metro bundler configuration
├── tsconfig.json                   # TypeScript configuration
├── jest.config.js                  # Jest testing configuration (with ESM transforms)
├── package.json                    # Project dependencies & scripts
├── .eslintrc.js                    # ESLint configuration
└── .prettierrc.js                  # Prettier formatting config
```

---

## 🎨 Design System & Responsive Tokens

Located in `src/common/theme/`:

| Module | Purpose | Example Tokens |
|--------|---------|----------------|
| `responsive.ts` | Mobile dimension scaling functions | `scale(10)`, `verticalScale(20)`, `moderateScale(16)`, `wp(90)`, `hp(50)`, `rf(14)` |
| `color.ts` | Complete application color palette | `Colors.primary`, `Colors.secondary`, `Colors.surface`, `Colors.text`, `Colors.error` |
| `font.ts` | Font family declarations | `FontFamily.regular`, `FontFamily.medium`, `FontFamily.semiBold`, `FontFamily.bold` |
| `font-size.ts` | Scaled typography sizes | `FontSize.xs`, `FontSize.sm`, `FontSize.md`, `FontSize.lg`, `FontSize.xl`, `FontSize.xxl`, `FontSize.display` |
| `spacing.ts` | Responsive layout margins & paddings | `Spacing.xs`, `Spacing.sm`, `Spacing.md`, `Spacing.lg`, `Spacing.xl`, `Spacing.xxl` |
| `border-radius.ts`| Responsive border radius tokens | `BorderRadius.xs`, `BorderRadius.sm`, `BorderRadius.md`, `BorderRadius.lg`, `BorderRadius.full` |
| `index.ts` | Unified theme barrel export | `import { Colors, Spacing, FontSize, scale } from 'src/common/theme'` |

---

## 🧩 Standard Component Quad Pattern

Every reusable component under `src/components/common/` follows this strict 4-file structure:

```
common/<component>/
├── <component>.tsx         # Component implementation
├── <component>.style.ts    # Separated responsive styles
├── <component>.type.ts     # Prop types and TypeScript definitions
├── <component>.test.tsx    # Jest unit test suite
└── index.ts                # Component export
```

Available common components:
- **`Button`**: Supports variants (`primary`, `secondary`, `outline`, `ghost`), sizes (`sm`, `md`, `lg`), loading spinner, and disabled states.
- **`AppTextInput`**: Supports floating label, validation error messages, secure password entry with toggle icon, and focus/blur handling.
- **`AppText`**: Typography wrapper supporting variants (`display`, `h1`, `h2`, `h3`, `body`, `caption`, `label`, `error`), weights, and responsive font scaling.
- **`AppModal`**: Animated dialog modal with backdrop blur/dismiss, header title, body content, and dual action buttons.

---

## 📄 Screen Separation Pattern

Every screen under `src/pages/` keeps logic, presentation, types, and mock data completely decoupled:

```
pages/<feature>/<screen>/
├── <screen>.tsx            # Pure UI and lifecycle logic
├── <screen>.style.ts       # StyleSheet styles using theme tokens
├── <screen>.type.ts        # Screen props, navigation params, and form types
└── <screen>.data.ts        # Static items, mock lists, menu items (if applicable)
```

No `.tsx` file contains inline `StyleSheet.create({ ... })` or inline data arrays.
