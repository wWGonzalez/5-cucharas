import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import {screenName} from "../utils";
const Stack = createNativeStackNavigator();

export function RestaurantStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screenName.restaurant.restaurants} 
            component={RestaurantsScreen}
            options = {{title : "Restaurantes"}}
             />

            <Stack.Screen name={screenName.restaurant.addRestaurant} 
            component={AddRestaurantScreen}
            options = {{title : "Añadir Restaurante"}}
             />
        
        
        </Stack.Navigator>
        
    )

}