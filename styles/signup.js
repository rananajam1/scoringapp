import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8F9FB",
      alignItems: "center",
      justifyContent: "center"
    },

    inputBox: {
      width: 350,
      backgroundColor: "#507E14",
      borderRadius: 15,
      fontSize: 16,
      marginVertical: 10,
      color: "white",
      padding: 10,
      textAlign: "center"
    },

    signupButton: {
      backgroundColor: "#01438D",
      borderRadius: 15,
      fontSize: 16,
      marginVertical: 10,
      color: "#ffff",
      padding: 10,
      textAlign: "center",
      width: 100,
      fontWeight: "500",
      justifyContent: 'center',
      alignItems: 'center'
    },

    loginButton: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      fontSize: 14,
      color: "#01438D",
      fontWeight: "500",
      paddingVertical: 16
    },

    loginContent: {
      backgroundColor: "#FEFEFE",
      alignItems: "flex-end",
      justifyContent: "center",
      flexDirection: "row",
      paddingVertical: 16,
      fontSize: 14
    },
});