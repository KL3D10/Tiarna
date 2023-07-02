import { View, Text } from "react-native";
import React from "react";
import MapScreen from "../../../components/mapScreen";

const LocationScreen = () => {
  return (
    <View style={{ flex: 1, marginBottom: "15%" }}>
      <MapScreen />
    </View>
  );
};

export default LocationScreen;
