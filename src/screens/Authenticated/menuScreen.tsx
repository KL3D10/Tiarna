import { View, FlatList } from "react-native";
import React from "react";
import CategoryGridTile from "../../components/categoryGridTile";
import { Center, HStack, Icon, IconButton, VStack, Text, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const CATEGORIES = [
  {
    id: "c1",
    title: "Italian",
    color: "#f5428d",
  },
  {
    id: "c2",
    title: "Italian",
    color: "#f5428d",
  },
  {
    id: "c3",
    title: "Italian",
    color: "#f5428d",
  },
  {
    id: "c4",
    title: "Italian",
    color: "#f5428d",
  },
  {
    id: "c5",
    title: "Italian",
    color: "#f5428d",
  },
  {
    id: "c6",
    title: "Italian",
    color: "#f5428d",
  },
];

const MenuScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Box>
      <HStack bg={"#002c2b"} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton
            borderRadius={50}
            icon={<Icon size="md" as={MaterialIcons} name="arrow-back" color="white" />}
            onPress={() => navigation.goBack()}
          />
          <Text color="white" fontSize="20" paddingLeft={5}>
            Categories
          </Text>
        </HStack>
      </HStack>
      <Center alignItems={"center"} height={"90%"} bgColor={"white"}>
        <HStack>
          <CategoryGridTile title={"Restaurants"} icon={"restaurant"} onPress={() => console.log("Pressed Restaurant")} />
          <CategoryGridTile title={"Hotels"} icon={"hotel"} onPress={() => console.log("Pressed Hotel")} />
        </HStack>
        <HStack>
          <CategoryGridTile title={"Nightlife"} icon={"nightlife"} onPress={() => console.log("Pressed Restaurant")} />
          <CategoryGridTile title={"Shopping"} icon={"shopping-bag"} onPress={() => console.log("Pressed Restaurant")} />
        </HStack>
        <HStack>
          <CategoryGridTile title={"AR Explore"} icon={"smartphone"} onPress={() => console.log("Pressed Restaurant")} />
          <CategoryGridTile title={"Favourites"} icon={"favorite"} onPress={() => console.log("Pressed Restaurant")} />
        </HStack>
      </Center>
    </Box>
  );
};

export default MenuScreen;
