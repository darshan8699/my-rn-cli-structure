import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { P1AuthStackParamList } from '../../../../common/types';

export type SignupNavProp = NativeStackNavigationProp<
  P1AuthStackParamList,
  'Signup'
>;

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
