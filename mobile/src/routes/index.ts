import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationProp } from '@react-navigation/drawer'

export type propsNavigationStack = {
    Login: undefined;
    Register: undefined;
    Landing:undefined;
    Home:undefined;
    DrawerNavigation:undefined;
}

export type propsNavigationDrawer = {
    DrawerNavigation:undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

export type propsDrawer = DrawerNavigationProp<propsNavigationDrawer>