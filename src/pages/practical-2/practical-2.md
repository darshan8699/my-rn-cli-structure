# Practical 2 — State Management Demos

## Overview

Practical 2 demonstrates 9 different state management approaches in React Native, each as a self-contained, minimal demo screen with a concept explanation and a live code example.

---

## Navigation Structure

```
Practical2Navigator (NativeStackNavigator)
└── P2Dashboard          ← Lists all demos
    ├── ReduxDemo
    ├── ReduxToolkitDemo
    ├── ZustandDemo
    ├── MobXDemo
    ├── ContextDemo
    ├── ReactQueryDemo
    ├── CrudApiDemo
    ├── GraphQLDemo
    └── ReduxApiDemo
```

**Navigator file:** `src/navigation/practical-2.navigator.tsx`

---

## Folder Structure

```
src/
├── navigation/
│   └── practical-2.navigator.tsx
│
└── pages/practical-2/
    ├── dashboard/
    │   ├── p2-dashboard.tsx
    │   ├── p2-dashboard.style.ts
    │   └── p2-dashboard.type.ts
    ├── redux/
    │   └── redux-demo.tsx
    ├── redux-toolkit/
    │   └── redux-toolkit-demo.tsx
    ├── zustand/
    │   └── zustand-demo.tsx
    ├── mobx/
    │   └── mobx-demo.tsx
    ├── context/
    │   └── context-demo.tsx
    ├── react-query/
    │   ├── react-query-demo.tsx
    │   ├── react-query-demo.style.ts
    │   └── react-query-demo.type.ts
    ├── crud-api/
    │   ├── crud-api-demo.tsx
    │   ├── crud-api-demo.style.ts
    │   └── crud-api-demo.type.ts
    ├── graphql/
    │   ├── graphql-demo.tsx
    │   ├── graphql-demo.style.ts
    │   └── graphql-demo.type.ts
    └── redux-api/
        ├── redux-api-demo.tsx
        ├── redux-api-demo.style.ts
        └── redux-api-demo.type.ts
```

---

## Demo Screens

### 1. Redux (Classic)

**File:** `src/pages/practical-2/redux/redux-demo.tsx`
**Package:** `redux`

Concepts: `createStore`, `dispatch`, `subscribe`, Reducer function.

- Uses plain `createStore()` from the `redux` package
- Manual `store.subscribe()` to sync React state

```ts
const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT' });
store.subscribe(() => setState(store.getState()));
```

---

### 2. Redux Toolkit

**File:** `src/pages/practical-2/redux-toolkit/redux-toolkit-demo.tsx`
**Package:** `@reduxjs/toolkit`, `react-redux`

Concepts: `createSlice`, `configureStore`, `useSelector`, `useDispatch`, Immer.

- Wrapped in its own `<Provider store={store}>` — self-contained

```ts
const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { increment: s => s + 1 },
});
const store = configureStore({ reducer: slice.reducer });
const count = useSelector(state => state);
dispatch(slice.actions.increment());
```

---

### 3. Zustand

**File:** `src/pages/practical-2/zustand/zustand-demo.tsx`
**Package:** `zustand`

Concepts: `create()`, `set()`, no Provider needed.

```ts
const useStore = create(set => ({
  count: 0,
  increment: () => set(s => ({ count: s.count + 1 })),
}));
const { count, increment } = useStore();
```

---

### 4. MobX

**File:** `src/pages/practical-2/mobx/mobx-demo.tsx`
**Package:** `mobx`, `mobx-react-lite`

Concepts: `makeAutoObservable`, class-based store, `observer()` HOC.

```ts
class Store {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count++;
  }
}
const MyComp = observer(() => <Text>{store.count}</Text>);
```

---

### 5. Context API

**File:** `src/pages/practical-2/context/context-demo.tsx`
**Package:** Built-in React

Concepts: `createContext`, `Provider`, `useReducer`, `useContext`.

```ts
const Ctx = createContext(null)
const [state, dispatch] = useReducer(reducer, 0)
<Ctx.Provider value={{ state, dispatch }}><Child /></Ctx.Provider>
const { state } = useContext(Ctx)
```

---

### 6. React Query

**File:** `src/pages/practical-2/react-query/react-query-demo.tsx`
**Package:** `@tanstack/react-query`, `axios`
**Live API:** `https://jsonplaceholder.typicode.com/posts?_limit=8`

Concepts: `QueryClientProvider`, `useQuery`, `queryKey`, auto-caching, refetch.

```ts
const { data, isLoading } = useQuery({
  queryKey: ['posts'],
  queryFn: () => axios.get('/posts'),
});
```

---

### 7. CRUD API

**File:** `src/pages/practical-2/crud-api/crud-api-demo.tsx`
**Package:** `axios`
**Live API:** `https://jsonplaceholder.typicode.com/posts`

Concepts: GET / POST / PUT / DELETE via axios, local state sync.

| Operation | Method                          |
| --------- | ------------------------------- |
| Read      | `axios.get('/posts')`           |
| Create    | `axios.post('/posts', data)`    |
| Update    | `axios.put('/posts/:id', data)` |
| Delete    | `axios.delete('/posts/:id')`    |

Features: Modal for create/edit, inline delete.

---

### 8. GraphQL

**File:** `src/pages/practical-2/graphql/graphql-demo.tsx`
**Package:** Native `fetch()`
**Live API:** `https://countries.trevorblades.com/` (public Countries API)

Concepts: Single POST endpoint, query language, typed response.

```ts
fetch(GQL_URL, {
  method: 'POST',
  body: JSON.stringify({
    query: `query { continents { name countries { name emoji } } }`,
  }),
});
```

Features: Expandable continent → country list.

---

### 9. Redux + API (createAsyncThunk)

**File:** `src/pages/practical-2/redux-api/redux-api-demo.tsx`
**Package:** `@reduxjs/toolkit`, `react-redux`, `axios`
**Live API:** `https://jsonplaceholder.typicode.com/posts?_limit=8`

Concepts: `createAsyncThunk`, `extraReducers`, pending/fulfilled/rejected lifecycle.

```ts
const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const { data } = await axios.get('/posts');
  return data;
});
// extraReducers handles .pending / .fulfilled / .rejected
```

---

## File Naming Convention

| File            | Purpose                                    |
| --------------- | ------------------------------------------ |
| `demo.tsx`      | React component (UI + logic + store setup) |
| `demo.style.ts` | All `StyleSheet.create({})` styles         |
| `demo.type.ts`  | Data interfaces (Post, Continent, etc.)    |

---

## Packages Used

| Package                 | Used In                                |
| ----------------------- | -------------------------------------- |
| `redux`                 | Redux Classic demo                     |
| `@reduxjs/toolkit`      | RTK demo, Redux+API demo               |
| `react-redux`           | RTK demo, Redux+API demo               |
| `zustand`               | Zustand demo                           |
| `mobx`                  | MobX demo                              |
| `mobx-react-lite`       | MobX demo (`observer`)                 |
| `@tanstack/react-query` | React Query demo                       |
| `axios`                 | React Query, CRUD API, Redux+API demos |
