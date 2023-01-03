import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        height:100,
        width: 200,
        backgroundColor: "#FFFFFF",
        borderColor: "#58ACFA",
        borderWidth: 2,
        borderRadius: 10,
    },
    view:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color: "#58ACFA",
            textTransform:"uppercase",
            marginTop: 10,

    },
});
