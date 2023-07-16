import React from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken("sk.eyJ1Ijoia2xlZGlvbTMiLCJhIjoiY2xrMzRocHY3MDlyMTNqdGFvOWY1cTcwbyJ9.yDJfCMaqjZdFsobXo-0xkg");

const ItemMapScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} scaleBarEnabled={false}>
          <Mapbox.Camera zoomLevel={15} centerCoordinate={[19.818967, 41.3276779]} animationDuration={0} />
          {/* <Mapbox.PointAnnotation id="point" coordinate={[19.819025, 41.327953]} /> */}
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default ItemMapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
