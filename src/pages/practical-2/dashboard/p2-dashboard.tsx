import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { P2DashNavProp } from './p2-dashboard.type';
import { DEMOS } from './p2-dashboard.data';
import styles from './p2-dashboard.style';

const P2DashboardScreen: React.FC = () => {
  const navigation = useNavigation<P2DashNavProp>();

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.intro}>
        Tap any demo below to see a minimal working example.
      </Text>

      {DEMOS.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.id as any)}>
          <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: item.color + '20' }]}>
            <Text style={[styles.badgeText, { color: item.color }]}>›</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default P2DashboardScreen;
