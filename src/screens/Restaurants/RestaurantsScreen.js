import Reac from "react";
import {View, Text} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {screenName} from "../../utils"


export function RestaurantsScreen(){
    const navigation = useNavigation();
    //console.log(navigation);

    const goToAddRestaurant = () =>{
        //Se usa cuando se navega en el stack de la misma screen
        //navigation.navigate(screenName.restaurant.addRestaurant); 

        //Se usa cuando se llama a otra screen
        navigation.navigate(screenName.account.tab,{screen: screenName.account.account})
    }

    return(
        <View>
            <Text>Estamos en la screen Restaurante</Text>
            <Button title="Crear Restaurante" onPress={goToAddRestaurant}></Button>
        </View>
    );
}

