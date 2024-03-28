import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/signUp';
import Profile from '../screens/profile';
import Login from '../screens/login';
import SaveMeasure from '../screens/saveMeasure';
import MainScreen from '../screens/mainScreen';
import NewMeasure from '../screens/newMeasure';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="profile" component={Profile} />
        <Stack.Screen options={{headerShown:false}} name="MainScreen" component={MainScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="newMeasure"
          component={NewMeasure}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="saveMeasure"
          component={SaveMeasure}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
