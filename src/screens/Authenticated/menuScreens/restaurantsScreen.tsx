import { View } from "react-native";
import React from "react";
import { Box, HStack, Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Box flex={1}>
      <HStack bg={"#002c2b"} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton
            borderRadius={50}
            icon={<Icon size="md" as={MaterialIcons} name="arrow-back" color="white" />}
            onPress={() => navigation.goBack()}
          />
        </HStack>
        <Text color="white" fontSize="20" flex={1} textAlign={"center"}>
          Browse Restaurants
        </Text>
        <HStack alignItems="center">
          <IconButton
            borderRadius={50}
            icon={<Icon size="lg" as={MaterialIcons} name="favorite" color="white" />}
            onPress={() => navigation.goBack()}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default RestaurantsScreen;
