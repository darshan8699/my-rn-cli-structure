# Practical 3 — Dynamic Cube Grid Demo with Tabs & Custom Side Drawer

## Overview

Practical 3 demonstrates a dynamic, interactive cube calculation and box grid generator ported from the `MyRNCliApp` demo. It features:

- **Bottom Tab Navigation**: Dashboard and Settings tabs.
- **Custom Left-Side Animated Drawer**: Drawer menu with custom text screens (`Screen 1`, `Screen 2`, `Screen 3`) plus direct tab navigation.
- **Dynamic TextInput on Dashboard**: Real-time user input with default value `4`, input validation (positive integer between 1 and 20), quick-select chips (`2, 3, 4, 5, 6`), and submit navigation to Details.
- **Interactive Cube Grid Details**: Responsive multi-column grid displaying $N \times N$ boxes with 3-state cycling colors (`Default → Indigo (#4F46E5) → Emerald (#10B981) → Default`), cube calculation ($N^3$), and color state reset.
- **Blank Settings Screen**: Minimal blank placeholder as requested.
- **Self-Contained Local State**: Built purely without `@tanstack/react-query` or heavy external dependencies.

---

## Navigation Architecture

```
RootStack (NativeStackNavigator)
└── Practical3 (Practical3Navigator)
    ├── DrawerProvider (Custom Animated Left Drawer)
    └── P3Stack (NativeStackNavigator)
        ├── P3MainTabs (BottomTabNavigator)
        │   ├── Dashboard (DashboardScreen) ──[Submit N]──> P3Detail (DetailScreen)
        │   └── Settings (SettingScreen - Blank)
        ├── P3Detail (DetailScreen)
        ├── P3DrawerScreen1 (Screen1 - Only Text)
        ├── P3DrawerScreen2 (Screen2 - Only Text)
        └── P3DrawerScreen3 (Screen3 - Only Text)
```

---

## Folder Structure

```
src/
├── services/context/
│   └── drawer-context.tsx          # Drawer open/close/toggle context & navigation registration
├── components/modules/custom-drawer/
│   ├── custom-drawer.tsx           # Animated slide-in drawer with overlay
│   ├── custom-drawer.style.ts      # Drawer panel and menu item styles
│   └── custom-drawer.type.ts       # Drawer navigation types
└── pages/practical-3/
├── dashboard/
│   ├── dashboard.tsx                # TextInput (default 4) + chips + submit
│   ├── dashboard.style.ts           # Card and form layout styles
│   ├── dashboard.type.ts            # Input validation types
│   └── dashboard.util.ts            # validateCubeInput & parseInputNumber
├── detail/
│   ├── detail.tsx                   # Cube box grid with 3-step color cycling
│   ├── detail.style.ts              # Responsive grid and legend styles
│   ├── detail.type.ts               # BoxItem and GridDimensions types
│   └── detail.util.ts               # generateBoxes, calculateGridDimensions, getNextColorState
├── setting/
│   ├── setting.tsx                  # Blank settings screen with drawer toggle
│   ├── setting.style.ts             # Settings layout styles
│   └── setting.type.ts              # Settings types
├── drawer-screens/
│   ├── screen-1/
│   │   ├── screen-1.tsx             # Text-only Screen 1
│   │   └── screen-1.style.ts
│   ├── screen-2/
│   │   ├── screen-2.tsx             # Text-only Screen 2
│   │   └── screen-2.style.ts
│   └── screen-3/
│       ├── screen-3.tsx             # Text-only Screen 3
│       └── screen-3.style.ts
└── practical-3.md                   # This documentation
```

---

## Features & Behaviors

### 1. Custom Left Drawer

- Toggled via `☰` button on Dashboard, Settings, Screen 1, 2, and 3 headers.
- Smooth spring-free `Animated.Value` slide from `-280px` to `0px` with backdrop opacity.
- Drawer Items:
  - `Screen 1`: navigates to text-only `P3DrawerScreen1`
  - `Screen 2`: navigates to text-only `P3DrawerScreen2`
  - `Screen 3`: navigates to text-only `P3DrawerScreen3`
  - `Dashboard`: switches to Dashboard tab
  - `Settings`: switches to Settings tab

### 2. Dashboard Screen

- Dynamic `AppTextInput` initialized to `'4'`.
- Number-pad keyboard with inline error validation.
- Quick chips `[2, 3, 4, 5, 6]` for 1-tap input selection.
- Submitting navigates to `P3Detail` with route parameter `{ count: number }`.

### 3. Cube Demo Detail Screen

- Header card showing input $N$, total box count ($N^2$), and cube ($N^3 = N \times N \times N$).
- Responsive box dimensions: automatically computes column count (capped at 4) and box width based on device window width.
- Interactive color cycle on box press:
  - **State 0 (Default)**: Background `#FFFFFF`, Border `#CBD5E1`
  - **State 1 (Indigo)**: Background `#4F46E5`, Border `#4338CA`
  - **State 2 (Emerald)**: Background `#10B981`, Border `#059669`
- "Reset All Box Colors" restores all boxes to default.
- "Go Back to Dashboard" invokes `navigation.goBack()`.

### 4. Blank Settings Screen

- Displays an empty container preserving the header and drawer toggle button.
