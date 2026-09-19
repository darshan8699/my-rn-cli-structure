import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { P3StackParamList } from '../../../common/types';
import { Button } from '../../../components/common';
import { styles } from './detail.style';
import {
  calculateGridDimensions,
  generateBoxes,
  getNextColorState,
} from './detail.util';

type DetailRouteProp = RouteProp<P3StackParamList, 'P3Detail'>;
type DetailNavProp = NativeStackNavigationProp<P3StackParamList, 'P3Detail'>;

export const DetailScreen: React.FC = () => {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<DetailNavProp>();
  const count = route.params?.count ?? 4;
  const { width } = useWindowDimensions();

  // State storing color state index (0, 1, or 2) for each box ID
  const [boxStates, setBoxStates] = useState<Record<number, number>>({});

  // Dynamic grid column and box width calculations
  const { boxWidth } = calculateGridDimensions(width, count);

  // Generate box data memoized
  const boxes = useMemo(() => generateBoxes(count), [count]);
  const totalBoxes = boxes.length;

  const handleBoxPress = (id: number) => {
    setBoxStates(prev => {
      const currentState = prev[id] || 0;
      const nextState = getNextColorState(currentState);
      return { ...prev, [id]: nextState };
    });
  };

  const handleResetColors = () => {
    setBoxStates({});
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.backIconBtn}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          activeOpacity={0.7}
        >
          <Text style={styles.backIcon}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerBarTitle}>Cube Grid Details</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {/* Header Info Card */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>Dynamic Box Grid (N = {count})</Text>
          <Text style={styles.subtitle}>
            Tap any box to cycle its color: Default → Color 1 → Color 2 →
            Default
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Input N: {count}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Total Boxes: {totalBoxes}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Cube: {count}³ = {count * count * count}
              </Text>
            </View>
          </View>
        </View>

        {/* Color State Legend */}
        <View style={styles.legendCard}>
          <Text style={styles.legendTitle}>Color Cycle Guide:</Text>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColorBox,
                  { backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' },
                ]}
              />
              <Text style={styles.legendText}>1st: Default</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColorBox,
                  { backgroundColor: '#4F46E5', borderColor: '#4338CA' },
                ]}
              />
              <Text style={styles.legendText}>2nd: Indigo</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColorBox,
                  { backgroundColor: '#10B981', borderColor: '#059669' },
                ]}
              />
              <Text style={styles.legendText}>3rd: Emerald</Text>
            </View>
          </View>
        </View>

        {/* Grid of Interactive Boxes */}
        <View style={styles.gridContainer}>
          {boxes.map(item => {
            const state = boxStates[item.id] || 0;

            const boxStyle =
              state === 1
                ? styles.boxState1
                : state === 2
                ? styles.boxState2
                : styles.boxState0;

            const textStyle =
              state === 1
                ? styles.boxText1
                : state === 2
                ? styles.boxText2
                : styles.boxText0;

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={[styles.box, boxStyle, { width: boxWidth }]}
                onPress={() => handleBoxPress(item.id)}
              >
                <Text style={[styles.boxValue, textStyle]}>{item.value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <Button
            label="🔄 Reset All Box Colors"
            onPress={handleResetColors}
            variant="outline"
            size="md"
          />
          <Button
            label="← Go Back to Dashboard"
            onPress={() => navigation.goBack()}
            variant="primary"
            size="lg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
