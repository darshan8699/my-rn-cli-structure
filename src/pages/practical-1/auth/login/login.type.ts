import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { P1AuthStackParamList } from '../../../../common/types';

export type LoginNavProp = NativeStackNavigationProp<P1AuthStackParamList, 'Login'>;

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}
