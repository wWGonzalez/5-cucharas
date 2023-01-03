import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { screenName } from "../utils";
import { LoginScreen } from "../screens/Account/LoginScreen";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.account.account}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screenName.account.login}
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
    </Stack.Navigator>
  );
}
