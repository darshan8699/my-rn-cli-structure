import type { DemoItem } from './p2-dashboard.type';

export const DEMOS: DemoItem[] = [
  {
    id: 'ReduxDemo',
    title: 'Redux (Classic)',
    description: 'Counter with createStore, dispatch & subscribe',
    emoji: '🔄',
    color: '#764ABC',
  },
  {
    id: 'ReduxToolkitDemo',
    title: 'Redux Toolkit',
    description: 'Counter with createSlice, configureStore & useSelector',
    emoji: '🛠️',
    color: '#764ABC',
  },
  {
    id: 'ZustandDemo',
    title: 'Zustand',
    description: 'Lightweight state management with zustand stores',
    emoji: '🐻',
    color: '#FF6B35',
  },
  {
    id: 'MobXDemo',
    title: 'MobX',
    description: 'Observable state with makeAutoObservable & reactions',
    emoji: '⚛️',
    color: '#FF7043',
  },
  {
    id: 'ContextDemo',
    title: 'Context API',
    description: 'Global state with React Context + useReducer',
    emoji: '🌐',
    color: '#00BCD4',
  },
  {
    id: 'ReactQueryDemo',
    title: 'React Query',
    description: 'Fetch & cache server data with useQuery',
    emoji: '🔍',
    color: '#FF4154',
  },
  {
    id: 'CrudApiDemo',
    title: 'CRUD API',
    description: 'Create, Read, Update, Delete via Axios',
    emoji: '📡',
    color: '#22C55E',
  },
  {
    id: 'GraphQLDemo',
    title: 'GraphQL',
    description: 'Query a public GraphQL API with fetch()',
    emoji: '◈',
    color: '#E535AB',
  },
  {
    id: 'ReduxApiDemo',
    title: 'Redux + API',
    description: 'Async API calls using createAsyncThunk',
    emoji: '🚀',
    color: '#6C63FF',
  },
];
