import React from "react";
import { string, object, func } from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const RoundedButton = ({
  icon,
  text,
  textColor,
  background,
  handleOnPress
} = {}) => (
  <TouchableHighlight
    onPress={handleOnPress}
    style={[{ backgroundColor: background || "transparent" }, styles.wrapper]}
  >
    <View style={styles.buttonTextWrapper}>
      {icon}
      <Text style={[{ color: textColor || "black" }, styles.buttonText]}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

RoundedButton.propTypes = {
  text: string.isRequired,
  color: string,
  background: string,
  icon: object,
  handleOnPress: func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 17,
    width: "100%",
    textAlign: "center"
  }
});

export default RoundedButton;
