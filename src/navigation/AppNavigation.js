import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements"
import {RestaurantStack} from "../navigation/RestaurantStack";
import {FavoriteStack} from "../navigation/FavoriteStack";
import {RankingStack} from "../navigation/RankingStack";
import {SearchStack} from "../navigation/SearchStack";
import {AccountStack} from "../navigation/AccountStack";
import {screenName} from "../utils";

const Tab = createBottomTabNavigator();

export function  AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route })=> ({
          headerTitleAlign:"center" ,
          headerShown:false,
          tabBarActiveTintColor:"#58ACFA",
          tabBarInactiveTintColor:"#646464",
          tabBarIcon: ({color,size}) => OptionIcon(route,color,size)
                    })}>
        <Tab.Screen name={screenName.restaurant.tab} component={RestaurantStack} options={{title: "Restaurantes"}}  />
        <Tab.Screen name={screenName.favorites.tab} component={FavoriteStack} options={{title: "Favoritos" }}  />
        <Tab.Screen name={screenName.ranking.tab} component={RankingStack} options={{title: "Ranking"}} />
        <Tab.Screen name={screenName.search.tab} component={SearchStack} options={{title: "Buscador"}} />
        <Tab.Screen name={screenName.account.tab} component={AccountStack} options={{title: "Cuenta" }} />
      </Tab.Navigator>
    )
}

function OptionIcon(route, color, size){
  let iconName;

  if(route.name === screenName.restaurant.tab){
    iconName = "home-outline";
  }

  if(route.name === screenName.favorites.tab){
    iconName = "heart-outline";
  }

  if(route.name === screenName.ranking.tab){
    iconName = "star-outline";
  }

  if(route.name === screenName.search.tab){
    iconName = "magnify";
  }
  
  if (route.name === screenName.account.tab){
    iconName = "account-circle-outline";
  
  }

  return (
     <Icon type="material-community" name={iconName} color={color} size={size}/>
  )
}

