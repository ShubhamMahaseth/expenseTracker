import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import AddExpense from './src/AddExpense';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{
            headerShadowVisible: false,
            title: 'Add Expense',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
