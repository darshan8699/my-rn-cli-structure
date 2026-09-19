import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDrawer } from '../../../services/context/drawer-context';
import { styles } from './setting.style';

export const SettingScreen: React.FC = () => {
  const { openDrawer } = useDrawer();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={openDrawer}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            activeOpacity={0.7}
          >
            <Text style={styles.headerIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <View style={styles.headerRightPlaceholder} />
      </View>
      {/* Blank Page as requested */}
      <View style={styles.blankContainer} />
    </SafeAreaView>
  );
};

export default SettingScreen;
