import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../styles/colors";

import RoundedButton from "../components/buttons/RoundedButton";

export default class LoggedOut extends React.Component {
  onFacebookPress = () => {
    alert("FB");
  };

  onCreateAccountPress = () => {
    alert("Create Account");
  };

  onMoreOptionsPress = () => {
    alert("More option");
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../img/airbnb-logo.png")}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>

          <RoundedButton
            textColor={colors.green01}
            background={colors.white}
            text="Continue with Facebook"
            handleOnPress={this.onFacebookPress}
            icon={
              <FontAwesome
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
          />

          <RoundedButton
            textColor={colors.white}
            background={colors.green01}
            text="Create Account"
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight
            onPress={this.onMoreOptionsPress}
            style={styles.moreOptionsButton}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or
            </Text>
            <Text style={styles.termsText}>More options, </Text>
            <Text style={styles.termsText}>I agree to Airbnb's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 50
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 10
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});
