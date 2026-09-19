import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../../components/common';
import styles from './account.style';

const AccountScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>My Account</Text>
      <Text style={styles.subtitle}>Profile details and information</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>John Doe</Text>
        <Text style={styles.infoSub}>john.doe@example.com</Text>
      </View>

      <View style={styles.actions}>
        <Button label="Log Out" variant="outline" onPress={handleLogout} />
        <Button
          label="Back to Home"
          variant="secondary"
          onPress={handleBackToHome}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
