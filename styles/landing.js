import {StyleSheet} from 'react-native';
const green = "#507E14", blue = "#01438D" , background = "#FEFEFE", white = "#ffff"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      alignItems: "center",
      justifyContent: "center"
    },

    buttonView: {
      flex: 3,
      flexDirection: 'row',
      backgroundColor: background,
      alignItems: "center",
      justifyContent: "center"
    },

    sloganView: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
    },

    sloganText: {
      fontSize: 20,
      textAlign: "center",
      color: blue,
      fontWeight: "500",
      margin: 10
    },

    titleText: {
      fontSize: 50,
      textAlign: "center",
      color: blue,
      fontWeight: "900"
    },
  
    button: {
      backgroundColor: green,
      borderRadius: 15,
      fontSize: 16,
      margin: 10,
      color: white,
      padding: 10,
      textAlign: "center",
      width: 100,
      fontWeight: "500"
    }
  });
