import React from "react";
import { ActivityIndicator, Modal, View, Text } from "react-native";
import { Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { loading } from "../../redux/js/actions/AuthActions/AuthActions";

class LoadingSc extends React.PureComponent {
  // Render any loading content that you like here
  render() {
      console.log(this.props)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => null}
        visible={this.props.loading}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.3,
          }}
        />
        <View
          style={[
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              height:'100%',
              width:'100%'
            },
          ]}
        >
          <View
            style={{
              borderRadius: 10,
              padding: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="white" />
          </View>
          <Text
            style={{
              color: "white",
            }}
          >
            Loading....
          </Text>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.token.loading
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingSc);
