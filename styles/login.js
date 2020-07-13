import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FEFEFE",
      alignItems: "center",
      justifyContent: "center"
    },
  
    signupContent: {
      backgroundColor: "#FEFEFE",
      alignItems: "flex-end",
      justifyContent: "center",
      flexDirection: "row",
      paddingVertical: 16,
      fontSize: 14
    },
  
    signupButton: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      fontSize: 14,
      color: "#01438D",
      fontWeight: "500",
      paddingVertical: 16
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

    img: {
        height: 350, 
        width: 350
      },
  
    forgotButton: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      fontSize: 14,
      marginVertical: 5,
      color: "#01438D"
    },
  
    loginButton: {
      backgroundColor: "#01438D",
      borderRadius: 15,
      fontSize: 16,
      marginVertical: 10,
      color: "#ffff",
      padding: 10,
      textAlign: "center",
      width: 100,
      fontWeight: "500"
    }
  });

  