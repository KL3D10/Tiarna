import { FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, Center, Divider, HStack, Icon, IconButton, Text, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICategoryData } from "../../../../models/category-interface";

const restaurantsData: ICategoryData[] = [
  {
    id: 1,
    imgUri:
      "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    title: "Gramercy Tavern",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 2,
    imgUri:
      "https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg",
    title: "Burger King",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 3,
    imgUri: "https://faktoje.al/wp-content/uploads/2021/02/1.jpg",
    title: "Mensa Kollonat",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 4,
    imgUri:
      "data:image/jpeg;base64,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",
    title: "OPA",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 5,
    imgUri:
      "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    title: "Gramercy Tavern",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 6,
    imgUri:
      "https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg",
    title: "Burger King",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 7,
    imgUri: "https://faktoje.al/wp-content/uploads/2021/02/1.jpg",
    title: "Mensa Kollonat",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 8,
    imgUri:
      "data:image/jpeg;base64,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",
    title: "OPA",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
];

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
            icon={<Icon size="lg" as={MaterialIcons} name="search" color="white" />}
            onPress={() => navigation.goBack()}
          />
        </HStack>
      </HStack>
      <FlatList
        style={{ marginBottom: "14%" }}
        data={restaurantsData}
        renderItem={({ item }) => (
          <Box flex={1}>
            <TouchableOpacity onPress={() => navigation.navigate("Restaurant Details", { item: item })}>
              <HStack style={{ paddingHorizontal: "5%", paddingVertical: "3%", alignItems: "center" }}>
                <Box flexDir={"row"} alignItems={"center"}>
                  <Image source={{ uri: item.imgUri }} style={{ width: 100, height: 100, borderRadius: 15 }} />
                  <VStack paddingLeft={4}>
                    <Text fontSize={20} marginBottom={2} maxWidth={"95%"}>
                      {item.title}
                    </Text>
                    <HStack>
                      <HStack>
                        <MaterialIcons name="location-on" size={24} color="#727272" />
                        <Text color="#727272">{item.street}</Text>
                      </HStack>
                      <HStack marginLeft={2}>
                        <MaterialIcons name="favorite" size={24} color="#727272" />
                        <Text color="#727272">{item.likes}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
                <Icon size="3xl" as={MaterialIcons} name="chevron-right" color="#002c2b" marginLeft={"auto"} />
              </HStack>
            </TouchableOpacity>
            <Divider />
          </Box>
        )}
      />
    </Box>
  );
};

export default RestaurantsScreen;
