import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../common/types';

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export interface PracticalItem {
  id: string;
  title: string;
  description: string;
  route?: keyof RootStackParamList;
  comingSoon?: boolean;
}
