import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import { View, Text, TouchableOpacity } from 'react-native';
import type { CounterAction } from './redux-demo.type';
import styles from './redux-demo.style';

// ─── Redux Setup ─────────────────────────────────────────────────────────────
const counterReducer = (state = 0, action: CounterAction): number => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    case 'RESET': return 0;
    default: return state;
  }
};

const store = createStore(counterReducer);

// ─── Component ────────────────────────────────────────────────────────────────
const ReduxDemoScreen: React.FC = () => {
  const [count, setCount] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setCount(store.getState()));
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* Concept Box */}
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>How Classic Redux Works</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>Store</Text> — holds the global state{'\n'}
          2. <Text style={styles.bold}>Action</Text> — plain object {`{ type }`}{'\n'}
          3. <Text style={styles.bold}>Reducer</Text> — pure function (state, action) → state{'\n'}
          4. <Text style={styles.bold}>dispatch()</Text> — sends action to reducer{'\n'}
          5. <Text style={styles.bold}>subscribe()</Text> — listens for state changes
        </Text>
      </View>

      {/* Counter */}
      <View style={styles.counterCard}>
        <Text style={styles.label}>Counter (from Redux store)</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, styles.btnOutline]}
            onPress={() => store.dispatch({ type: 'DECREMENT' })}>
            <Text style={styles.btnOutlineText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnPrimary]}
            onPress={() => store.dispatch({ type: 'INCREMENT' })}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => store.dispatch({ type: 'RESET' })}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Code Snippet */}
      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>
          {`const store = createStore(reducer)\nstore.dispatch({ type: 'INCREMENT' })\nstore.subscribe(() => setState(store.getState()))`}
        </Text>
      </View>
    </View>
  );
};

export default ReduxDemoScreen;
