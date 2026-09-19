import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import type { CounterState } from './redux-toolkit-demo.type';
import styles from './redux-toolkit-demo.style';

// ─── RTK Slice ────────────────────────────────────────────────────────────────
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// ─── Inner Component ──────────────────────────────────────────────────────────
const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>How Redux Toolkit Works</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>createSlice</Text> — bundles actions +
          reducer{'\n'}
          2. <Text style={styles.bold}>configureStore</Text> — sets up store
          with DevTools{'\n'}
          3. <Text style={styles.bold}>useSelector</Text> — reads state in
          component{'\n'}
          4. <Text style={styles.bold}>useDispatch</Text> — dispatches actions
          {'\n'}
          5. Immer built-in — write "mutating" reducers safely
        </Text>
      </View>

      <View style={styles.counterCard}>
        <Text style={styles.label}>Counter (RTK store)</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.btnOutline]}
            onPress={() => dispatch(decrement())}
          >
            <Text style={styles.btnOutlineText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnPrimary]}
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => dispatch(reset())}
        >
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>
          {`const slice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { state.value++ }\n  }\n})\ndispatch(slice.actions.increment())`}
        </Text>
      </View>
    </View>
  );
};

// ─── Wrapper with Provider ────────────────────────────────────────────────────
const ReduxToolkitDemoScreen: React.FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default ReduxToolkitDemoScreen;
