import { View, FlatList } from "react-native";
import React from "react";
import CategoryGridTile from "../../../components/categoryGridTile";
import { Center, HStack, Icon, IconButton, VStack, Text, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const MenuScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Box>
      <HStack bg={"#002c2b"} py="3" justifyContent="center" alignItems="center" w="100%">
          <Text color="white" fontSize="20">
            Categories
          </Text>
      </HStack>
      <Center alignItems={"center"} height={"90%"} bgColor={"white"}>
        <HStack>
          <CategoryGridTile title={"Restaurants"} icon={"restaurant"} onPress={() => navigation.navigate("Restaurants")} />
          <CategoryGridTile title={"Hotels"} icon={"hotel"} onPress={() => navigation.navigate("Hotels")} />
        </HStack>
        <HStack>
          <CategoryGridTile title={"Nightlife"} icon={"nightlife"} onPress={() => navigation.navigate("Nightlife")} />
          <CategoryGridTile title={"Shopping"} icon={"shopping-bag"} onPress={() => navigation.navigate("Shopping")} />
        </HStack>
        <HStack>
          <CategoryGridTile title={"AR Explore"} icon={"smartphone"} onPress={() => console.log("AR")} />
          <CategoryGridTile title={"Hotspots"} icon={"explore"} onPress={() => navigation.navigate("Hotspots")} />
        </HStack>
      </Center>
    </Box>
  );
};

export default MenuScreen;
