import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { create } from 'zustand';
import type { CounterStore } from './zustand-demo.type';
import styles from './zustand-demo.style';

// ─── Zustand Store ────────────────────────────────────────────────────────────
const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// ─── Component ────────────────────────────────────────────────────────────────
const ZustandDemoScreen: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <View style={styles.container}>
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>How Zustand Works</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>create()</Text> — creates a store hook{'\n'}
          2. State + actions defined together in one object{'\n'}
          3. <Text style={styles.bold}>set()</Text> — merges new state{'\n'}
          4. No Provider needed — just import the hook!{'\n'}
          5. Minimal boilerplate, excellent performance
        </Text>
      </View>

      <View style={styles.counterCard}>
        <Text style={styles.label}>Counter (Zustand store)</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={decrement}>
            <Text style={styles.btnOutlineText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={increment}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.resetBtn} onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>
          {`const useStore = create(set => ({\n  count: 0,\n  increment: () => set(s => ({ count: s.count + 1 }))\n}))\n\nconst { count, increment } = useStore()`}
        </Text>
      </View>
    </View>
  );
};

export default ZustandDemoScreen;
