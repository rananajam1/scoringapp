//region References
import React, { PureComponent } from "react";
import {
  TouchableNativeFeedback,
  ImageBackground,
  Platform,
  Alert,
  Text,
} from "react-native";
import {
  Header,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Button,
  Subtitle,
  View,
} from "native-base";
import { connect } from "react-redux";
import { loading, logout } from "../../redux/js/actions/AuthActions/AuthActions";
//endregion

class MasterHeader extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getMenuBtnRight() {
    if (this.props.isMenuRight) {
      return (
        <Button
          transparent
          onPress={this.props.OpenMenu}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon name="menu" />
        </Button>
      );
    }
  }

  _getMenuBtn() {
    if (this.props.isMenu) {
      return (
        <Button
          transparent
          onPress={this.props.OpenMenu}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon name="menu" />
        </Button>
      );
    }
  }


  _getBackBtn() {
    if (this.props.isBack) {
      return (
        <Button
          transparent
          onPress={this.props.GoBack}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon
            type="FontAwesome"
            name="angle-left"
            style={{
              fontSize: Platform.OS !== "ios" ? 35 : 20,
              fontWeight: "bold",
            }}
          />
        </Button>
      );
    }
  }
  _showAlert = () => {
    Alert.alert("Logout", "Are you sure you want to Logout?", [
      {
        text: "Logout",
        onPress: () => {
          this.props.Logout();
        },
      },
      { text: "Cancel", onPress: () => {}, style: "destructive" },
    ]);
  };
  _getPowerOffBtn() {
    if (this.props.isLogout) {
      return (
        <Button
          transparent
          onPress={this._showAlert}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon
            type="FontAwesome"
            name="power-off"
            style={{ fontSize: 18, paddingRight: 10 }}
          />
        </Button>
      );
    }
  }

  _getProfileIcon() {
    if (this.props.isProfile) {
      return (
        <Button
          transparent
          onPress={this.props.GoProfile}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon type="FontAwesome" name="user" style={{ fontSize: 24 }} />
        </Button>
      );
    }
  }

  _getAddIcon() {
    if (this.props.isAddButton) {
      return (
        <Button
          transparent
          onPress={this.props.OpenAddModal}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0, 112, 210, 0.8)",
            true
          )}
        >
          <Icon
            type="FontAwesome"
            name="plus"
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#fff",
              paddingTop: 5,
              paddingBottom: 1,
              paddingLeft: 5,
              paddingRight: 5,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          />
        </Button>
      );
    }
  }

  render() {
    var cstmStyles =
      this.props.customStyle == undefined ? {} : this.props.customStyle;
    return (
      <Header
        style={[
          {
            zIndex: 10,
            backgroundColor: "#507E14",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
          cstmStyles,
        ]}
      >
        <Left style={{ flex: 2 }}>
          {this._getBackBtn()}
          {this._getMenuBtn()}
        </Left>
        <Body
          style={[{ flex: 8, justifyContent: "center", alignItems: "center" }]}
        >
          <Title
            style={[
              { textTransform: "capitalize" , justifyContent: 'center', alignItems: 'center'}
            ]}
          >
            {this.props.Screen}
          </Title>
        </Body>
        <Right style={[{ flex: 2, justifyContent: "space-around" }]}>
          {this._getPowerOffBtn()}
          {this._getProfileIcon()}
          {this._getMenuBtnRight()}
          {this._getAddIcon()}
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  CmpConfigs: state.token.CmpConfigs,
});

const mapDispatchToProps = (dispatch) => ({
  loading: (isLoading) => dispatch(loading(isLoading)),
  logout: () => dispatch(logout()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterHeader);
