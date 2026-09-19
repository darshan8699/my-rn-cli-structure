import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { P1AuthStackParamList, P1MainTabParamList } from '../common/types';
import { Colors, verticalScale, Spacing } from '../common/theme';
import { Text } from 'react-native';
import styles from './practical-1.navigator.style';

// Auth Screens
import LoginScreen from '../pages/practical-1/auth/login/login';
import SignupScreen from '../pages/practical-1/auth/signup/signup';
import ForgotPasswordScreen from '../pages/practical-1/auth/forgot-password/forgot-password';

// Main Tab Screens
import P1DashboardScreen from '../pages/practical-1/main/dashboard/dashboard';
import AccountScreen from '../pages/practical-1/main/account/account';
import SettingScreen from '../pages/practical-1/main/setting/setting';

// ─── Main Tab Navigator ───────────────────────────────────────────────────────
const Tab = createBottomTabNavigator<P1MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: [
          styles.tabBar,
          {
            height: verticalScale(54) + insets.bottom,
            paddingBottom: insets.bottom > 0 ? insets.bottom : Spacing.xs + 2,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={P1DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => <Text style={styles.tabIconEmoji}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Text style={styles.tabIconEmoji}>👤</Text>,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Text style={styles.tabIconEmoji}>⚙️</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

// ─── Auth Stack ───────────────────────────────────────────────────────────────
const AuthStack = createNativeStackNavigator<P1AuthStackParamList>();

const Practical1Navigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen name="MainTabs" component={MainTabNavigator} />
    </AuthStack.Navigator>
  );
};

export { MainTabNavigator };
export default Practical1Navigator;
