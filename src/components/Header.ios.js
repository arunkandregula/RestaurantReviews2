import React from "react";
import { Text } from "react-native";
import HeaderStyle from "styles/HeaderStyle";

const Header = ({ text }) => <Text style={HeaderStyle.iOSHeader} >{text}</Text>;

export default Header;
