import { ImageBackground, View, Image } from "react-native";
import React from "react";
import { Box, HStack, Icon, IconButton, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICategoryData } from "../../../../models/category-interface";

const NightlifeDetailsScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const nightlifeData: ICategoryData = route.params.item;
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
          {nightlifeData.title}
        </Text>
        <HStack alignItems="center">
          <IconButton
            borderRadius={50}
            icon={<Icon size="lg" as={MaterialIcons} name="favorite" color="white" />}
            onPress={() => navigation.goBack()}
          />
        </HStack>
      </HStack>
      <View style={{ height: "30%" }}>
        <ImageBackground
          source={{ uri: nightlifeData.detailImgUri }}
          style={{
            width: "100%",
            flex: 1,
          }}
          imageStyle={{ opacity: 1 }}
        >
          <VStack
            padding={5}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              justifyContent: "flex-end",
            }}
          >
            <HStack>
              <Text color={"white"} fontSize={28} fontWeight={"bold"}>
                {nightlifeData.title}
              </Text>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-around"}>
              <HStack alignItems="center" maxWidth={'40%'}>
                <Icon size="md" as={MaterialIcons} name="location-on" color="white" />
                <Text color={"white"} fontSize={16} fontWeight={"bold"} marginLeft={1}>
                  {nightlifeData.street}
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Icon size="md" as={MaterialIcons} name="access-time" color="white" />
                <Text color={"white"} fontSize={16} fontWeight={"bold"} marginLeft={1}>
                  {nightlifeData.openTime}
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Icon size="md" as={MaterialIcons} name="favorite" color="white" />
                <Text color={"white"} fontSize={16} fontWeight={"bold"} marginLeft={1}>
                  {nightlifeData.likes}
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </ImageBackground>
      </View>
      <Box padding={6} backgroundColor={"white"}>
        <Text>{nightlifeData.description}</Text>
      </Box>
      <HStack paddingY={2} paddingX={5} backgroundColor={"#002c2b"} justifyContent={"space-between"}>
        <HStack>
          <MaterialIcons name="smartphone" size={24} color="white" />
          <Text color={"white"} marginLeft={2}>
            {nightlifeData.phone}
          </Text>
        </HStack>
        <HStack>
          <MaterialIcons name="email" size={24} color="white" />
          <Text color={"white"} marginLeft={2}>
            {nightlifeData.email}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NightlifeDetailsScreen;
