import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './setting.style';

const SettingScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Configure your preferences</Text>

      <View style={styles.card}>
        <Text style={styles.itemText}>Notifications</Text>
        <Text style={styles.itemVal}>Enabled</Text>
      </View>

      <View style={[styles.card, styles.mt]}>
        <Text style={styles.itemText}>Dark Mode</Text>
        <Text style={styles.itemVal}>System Default</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
