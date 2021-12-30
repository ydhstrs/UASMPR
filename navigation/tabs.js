import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../src/page/Home';
import Mapp from '../src/page/Mapp';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Mapp" component={Mapp}/>
        </Tab.Navigator>
    );
}