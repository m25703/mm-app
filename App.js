import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import FeedbackScreen from './FeedbackScreen';
import NotificationScreen from './NotificationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
