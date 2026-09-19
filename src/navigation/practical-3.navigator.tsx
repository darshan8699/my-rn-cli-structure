import React from 'react';
import { View, Text } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { P3StackParamList, P3TabParamList } from '../common/types';
import { Colors, verticalScale, Spacing } from '../common/theme';
import styles from './practical-3.navigator.style';

// Drawer Infrastructure
import { DrawerProvider, useDrawer } from '../services/context/drawer-context';
import CustomDrawer from '../components/modules/custom-drawer/custom-drawer';

// Screens
import DashboardScreen from '../pages/practical-3/dashboard/dashboard';
import SettingScreen from '../pages/practical-3/setting/setting';
import DetailScreen from '../pages/practical-3/detail/detail';
import Screen1 from '../pages/practical-3/drawer-screens/screen-1/screen-1';
import Screen2 from '../pages/practical-3/drawer-screens/screen-2/screen-2';
import Screen3 from '../pages/practical-3/drawer-screens/screen-3/screen-3';

// ─── Bottom Tabs Navigator ────────────────────────────────────────────────────
const Tab = createBottomTabNavigator<P3TabParamList>();

const MainTabs: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<P3StackParamList>>();
  const { registerNavigation } = useDrawer();

  React.useEffect(() => {
    registerNavigation(navigation);
  }, [navigation, registerNavigation]);

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
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => <Text style={styles.tabIconEmoji}>🏠</Text>,
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

// ─── P3 Stack Navigator with Drawer ───────────────────────────────────────────
const P3Stack = createNativeStackNavigator<P3StackParamList>();

const Practical3Content: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<P3StackParamList>>();
  const { navigateFromDrawer } = useDrawer();

  const handleDrawerNavigate = (route: string, params?: any) => {
    navigateFromDrawer(route, params);
  };

  return (
    <View style={styles.rootContainer}>
      <P3Stack.Navigator screenOptions={{ headerShown: false }}>
        <P3Stack.Screen name="P3MainTabs" component={MainTabs} />
        <P3Stack.Screen name="P3Detail" component={DetailScreen} />
        <P3Stack.Screen name="P3DrawerScreen1" component={Screen1} />
        <P3Stack.Screen name="P3DrawerScreen2" component={Screen2} />
        <P3Stack.Screen name="P3DrawerScreen3" component={Screen3} />
      </P3Stack.Navigator>
      <CustomDrawer onNavigate={handleDrawerNavigate} />
    </View>
  );
};

export const Practical3Navigator: React.FC = () => {
  return (
    <DrawerProvider>
      <Practical3Content />
    </DrawerProvider>
  );
};

export default Practical3Navigator;
