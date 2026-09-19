import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { P3StackParamList } from '../../../../common/types';
import { useDrawer } from '../../../../services/context/drawer-context';
import { styles } from './screen-3.style';

type NavigationProp = NativeStackNavigationProp<P3StackParamList>;

export const Screen3: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { openDrawer, registerNavigation } = useDrawer();

  React.useEffect(() => {
    registerNavigation(navigation);
  }, [navigation, registerNavigation]);

  const handleClose = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'P3MainTabs',
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={openDrawer}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          activeOpacity={0.7}
        >
          <Text style={styles.headerIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Screen 3</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleClose}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          activeOpacity={0.7}
        >
          <Text style={styles.headerIcon}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.titleText}>Screen 3</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen3;
