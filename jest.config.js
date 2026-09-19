module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|immer|redux|react-redux|@reduxjs|mobx|mobx-react-lite)/)',
  ],
};
