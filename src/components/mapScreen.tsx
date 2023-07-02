import React from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken("sk.eyJ1Ijoia2xlZGlvbTMiLCJhIjoiY2xqazA3OHljMGlqbDNkbnVqM3NpdGRraSJ9.fwFZ4Q8nXZ8PWtu3zos7EA");

const MapScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} compassEnabled={true} compassFadeWhenNorth={true} scaleBarEnabled={false}>
          <Mapbox.Camera zoomLevel={15} centerCoordinate={[19.8214771, 41.3276821]} animationDuration={0} />
          <Mapbox.PointAnnotation id="point" coordinate={[19.8214771, 41.3276821]} />
          {/* <Mapbox.UserLocation androidRenderMode={"normal"} /> */}
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default MapScreen;

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
