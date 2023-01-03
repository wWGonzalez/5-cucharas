import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {screenName} from "../utils";

const Stack = createNativeStackNavigator();

export function FavoriteStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = {screenName.favorites.favorites} component={FavoritesScreen} options={{title:"Favoritos"}}/>
        </Stack.Navigator>
    );
}