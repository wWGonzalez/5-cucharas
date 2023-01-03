import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "./UserGuestScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { screenName } from "../../../utils";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screenName.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/perfil2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu Perfil de 5 Cucharas</Text>
      <Text style={styles.description}>
        Busca y visualiza los mejores restaurantes de una forma facil y sencilla
        valora cual te ha gustado mas y comenta tu experiencia.
      </Text>
      <Button
        title={"Ver Perfil"}
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}
