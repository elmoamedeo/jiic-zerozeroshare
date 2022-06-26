import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Landing from '../pages/landing/Landing';
import DrawerNavigation from './drawer'
import { propsNavigationStack } from './index'

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function Routes() {
  return (
     <Stack.Navigator initialRouteName='Landing' screenOptions={{
         headerShown:false
     }}>
         <Stack.Screen name="Landing" component={Landing} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Home" component={DrawerNavigation} />
     </Stack.Navigator>
  )
}