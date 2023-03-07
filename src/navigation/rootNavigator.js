import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../views/Orders";
import OrdersDeliveryScreen from "../views/OrderDelivery";
import ProfileScreen from "../views/Profile/index";
import { useAuthContext } from "../Context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { dbCourier } = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OrdersScreen"
    >
      {dbCourier ? (
       <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        
        <>
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen
          name="OrdersDeliveryScreen"
          component={OrdersDeliveryScreen}
        />
      </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
