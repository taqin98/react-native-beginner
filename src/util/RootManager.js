import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screen/Splash";
import Login from "../screen/Login";
import Home from "../screen/Home";
import Form from "../screen/Form";

const StackNavigation = createNativeStackNavigator();
const RootManager = () => {
    return(
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <StackNavigation.Screen name="Splash" component={Splash} />
                <StackNavigation.Screen name="Login" component={Login} />
                <StackNavigation.Screen name="Home" component={Home} options={{headerShown: false }} />
                <StackNavigation.Screen name="Form" component={Form} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default RootManager;