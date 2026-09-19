import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { P3StackParamList } from '../../../common/types';
import { AppTextInput, Button } from '../../../components/common';
import { useDrawer } from '../../../services/context/drawer-context';
import { styles } from './dashboard.style';
import { parseInputNumber, validateCubeInput } from './dashboard.util';

type NavigationProp = NativeStackNavigationProp<P3StackParamList>;

export const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { openDrawer } = useDrawer();

  const [inputValue, setInputValue] = useState<string>('4');
  const [error, setError] = useState<string | undefined>(undefined);

  const handleValidation = (val: string): boolean => {
    const res = validateCubeInput(val);
    setError(res.error);
    return res.isValid;
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (error) {
      handleValidation(text);
    }
  };

  const handleGenerate = () => {
    Keyboard.dismiss();
    if (handleValidation(inputValue)) {
      const count = parseInputNumber(inputValue, 4);
      navigation.dispatch(
        CommonActions.navigate({
          name: 'P3Detail',
          params: { count },
        }),
      );
    }
  };

  const handleQuickSelect = (num: number) => {
    const str = num.toString();
    setInputValue(str);
    setError(undefined);
  };

  const handleBackToHome = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Top Header with Drawer Toggle & Back to Home */}
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
          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleBackToHome}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          activeOpacity={0.7}
        >
          <Text style={styles.homeButtonText}>← App Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        {/* Cube Generator Card */}
        <View style={styles.card}>
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeText}>Dynamic Cube Demo</Text>
          </View>

          <Text style={styles.title}>Box Grid Generator</Text>
          <Text style={styles.subtitle}>
            Enter a number (N) to generate an interactive grid with{' '}
            {inputValue || '0'}² ={' '}
            {Math.pow(parseInputNumber(inputValue, 0), 2)} interactive
            color-cycling boxes.
          </Text>

          {/* Input Section */}
          <View style={styles.inputSection}>
            <AppTextInput
              label="Enter Number (N):"
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="e.g. 4, 3, 5"
              keyboardType="number-pad"
              error={error}
            />
          </View>

          {/* Quick Select Row */}
          <View style={styles.quickSelectContainer}>
            <Text style={styles.quickSelectLabel}>Quick Select:</Text>
            <View style={styles.quickRow}>
              {[2, 3, 4, 5, 6].map(num => {
                const isActive = inputValue === num.toString();
                return (
                  <TouchableOpacity
                    key={num}
                    style={[
                      styles.quickChip,
                      isActive && styles.quickChipActive,
                    ]}
                    onPress={() => handleQuickSelect(num)}
                  >
                    <Text
                      style={[
                        styles.quickChipText,
                        isActive && styles.quickChipTextActive,
                      ]}
                    >
                      {num}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Submit Button */}
          <Button
            label="Generate Boxes & Go to Details"
            onPress={handleGenerate}
            variant="primary"
            size="lg"
            style={styles.submitButton}
          />
        </View>

        {/* Quick Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Practical 3 Overview</Text>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>
              Left Drawer: Tap ☰ to open custom drawer with Screen 1, 2, 3.
            </Text>
          </View>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>
              Bottom Tabs: Easily toggle between Dashboard and Settings.
            </Text>
          </View>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>
              Details Grid: Tap any box to cycle colors (Default → Indigo →
              Emerald).
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
