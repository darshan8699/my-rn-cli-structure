import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDrawer } from '../../../services/context/drawer-context';
import { styles, DRAWER_WIDTH } from './custom-drawer.style';

interface CustomDrawerProps {
  onNavigate?: (route: string, params?: any) => void;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({ onNavigate }) => {
  const insets = useSafeAreaInsets();
  const { isOpen, closeDrawer, navigateFromDrawer } = useDrawer();
  const animX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const animOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(animX, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(animOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animX, {
          toValue: -DRAWER_WIDTH,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen, animX, animOpacity]);

  const handleItemPress = (route: string, params?: any) => {
    closeDrawer();
    navigateFromDrawer(route, params);
    if (onNavigate) {
      onNavigate(route, params);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <View style={styles.container} pointerEvents={isOpen ? 'auto' : 'none'}>
      {/* Backdrop */}
      <TouchableWithoutFeedback onPress={closeDrawer}>
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: animOpacity,
            },
          ]}
        />
      </TouchableWithoutFeedback>

      {/* Drawer Panel */}
      <Animated.View
        style={[
          styles.drawerPanel,
          {
            transform: [{ translateX: animX }],
          },
        ]}
      >
        {/* Header */}
        <View
          style={[styles.header, { paddingTop: Math.max(insets.top, 24) + 10 }]}
        >
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Practical 3</Text>
            <Text style={styles.headerSubtitle}>Custom Drawer Menu</Text>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeDrawer}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            activeOpacity={0.7}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Drawer Content */}
        <ScrollView style={styles.menuList}>
          {/* Custom Drawer Screens Section */}
          <Text style={styles.sectionTitle}>Drawer Screens</Text>

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => handleItemPress('P3DrawerScreen1')}
          >
            <Text style={styles.menuItemIcon}>📄</Text>
            <Text style={styles.menuItemText}>Screen 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => handleItemPress('P3DrawerScreen2')}
          >
            <Text style={styles.menuItemIcon}>📄</Text>
            <Text style={styles.menuItemText}>Screen 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => handleItemPress('P3DrawerScreen3')}
          >
            <Text style={styles.menuItemIcon}>📄</Text>
            <Text style={styles.menuItemText}>Screen 3</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Navigation Section */}
          <Text style={styles.sectionTitle}>Tabs</Text>

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() =>
              handleItemPress('P3MainTabs', { screen: 'Dashboard' })
            }
          >
            <Text style={styles.menuItemIcon}>🏠</Text>
            <Text style={styles.menuItemText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() =>
              handleItemPress('P3MainTabs', { screen: 'Settings' })
            }
          >
            <Text style={styles.menuItemIcon}>⚙️</Text>
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Practical 3 • React Native CLI</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default CustomDrawer;
