import React, {Component} from "react";
import { View, Image } from "react-native";
import { styles } from '../styles/logo';


class Logo extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.img}
            source={require("../images/logo.jpg")}
          />
        </View>
      </View>
    );
  }
}

export default Logo;