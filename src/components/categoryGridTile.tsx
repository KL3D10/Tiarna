import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, onPress, icon }: any) {
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Icon size="6xl" as={MaterialIcons} name={icon} color="#002c2b" />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 170,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#002c2b",
    borderOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#002c2b",
  },
});
