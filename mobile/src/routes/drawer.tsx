import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login/Login';
import Landing from '../pages/landing/Landing';
import Home from '../pages/home/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
   return (
    <Drawer.Navigator
    initialRouteName='HomeDrawer'
    screenOptions={{
        headerShown:false
    }}
        >
    
            <Drawer.Screen
             name="HomeDrawer"
             component={Home} 
             options={{
                title:"Home"
            }}
        
            />
            <Drawer.Screen
             name="LandingDrawer"
             component={Landing} 
             options={{
                title:"Landing"
            }}
        
            />
            <Drawer.Screen
             name="LoginDrawer"
             component={Login} 
             options={{
                title:"Login"
            }}
        
            />
        
    
        </Drawer.Navigator>
   )
}

