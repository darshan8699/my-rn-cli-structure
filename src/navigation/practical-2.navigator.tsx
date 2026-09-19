import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { P2StackParamList } from '../common/types';
import { Colors, FontFamily } from '../common/theme';

// Practical 2 Screens
import P2DashboardScreen from '../pages/practical-2/dashboard/p2-dashboard';
import ReduxDemoScreen from '../pages/practical-2/redux/redux-demo';
import ReduxToolkitDemoScreen from '../pages/practical-2/redux-toolkit/redux-toolkit-demo';
import ZustandDemoScreen from '../pages/practical-2/zustand/zustand-demo';
import MobXDemoScreen from '../pages/practical-2/mobx/mobx-demo';
import ContextDemoScreen from '../pages/practical-2/context/context-demo';
import ReactQueryDemoScreen from '../pages/practical-2/react-query/react-query-demo';
import CrudApiDemoScreen from '../pages/practical-2/crud-api/crud-api-demo';
import GraphQLDemoScreen from '../pages/practical-2/graphql/graphql-demo';
import ReduxApiDemoScreen from '../pages/practical-2/redux-api/redux-api-demo';

const P2Stack = createNativeStackNavigator<P2StackParamList>();

const Practical2Navigator: React.FC = () => {
  return (
    <P2Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.surface },
        headerTitleStyle: {
          fontFamily: FontFamily.semiBold,
          color: Colors.text,
        },
        headerTintColor: Colors.primary,
      }}>
      <P2Stack.Screen
        name="P2Dashboard"
        component={P2DashboardScreen}
        options={{ title: 'Practical 2 — State Management' }}
      />
      <P2Stack.Screen
        name="ReduxDemo"
        component={ReduxDemoScreen}
        options={{ title: 'Redux (Classic)' }}
      />
      <P2Stack.Screen
        name="ReduxToolkitDemo"
        component={ReduxToolkitDemoScreen}
        options={{ title: 'Redux Toolkit' }}
      />
      <P2Stack.Screen
        name="ZustandDemo"
        component={ZustandDemoScreen}
        options={{ title: 'Zustand' }}
      />
      <P2Stack.Screen
        name="MobXDemo"
        component={MobXDemoScreen}
        options={{ title: 'MobX' }}
      />
      <P2Stack.Screen
        name="ContextDemo"
        component={ContextDemoScreen}
        options={{ title: 'Context API' }}
      />
      <P2Stack.Screen
        name="ReactQueryDemo"
        component={ReactQueryDemoScreen}
        options={{ title: 'React Query' }}
      />
      <P2Stack.Screen
        name="CrudApiDemo"
        component={CrudApiDemoScreen}
        options={{ title: 'CRUD API (Axios)' }}
      />
      <P2Stack.Screen
        name="GraphQLDemo"
        component={GraphQLDemoScreen}
        options={{ title: 'GraphQL' }}
      />
      <P2Stack.Screen
        name="ReduxApiDemo"
        component={ReduxApiDemoScreen}
        options={{ title: 'Redux + API' }}
      />
    </P2Stack.Navigator>
  );
};

export default Practical2Navigator;
