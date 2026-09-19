import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { P2StackParamList } from '../../../common/types';

export type P2DashNavProp = NativeStackNavigationProp<P2StackParamList, 'P2Dashboard'>;

export interface DemoItem {
  id: keyof P2StackParamList;
  title: string;
  description: string;
  emoji: string;
  color: string;
}
