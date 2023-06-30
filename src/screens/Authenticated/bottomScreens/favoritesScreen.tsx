import { FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, Center, Divider, HStack, Icon, IconButton, Text, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICategoryData } from "../../../models/category-interface";


const nightlifeData: ICategoryData[] = [
  {
    id: 1,
    imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-cewLtPuVfthM14pU3pCnbeYEl8H2Zoujw&usqp=CAU",
    title: "Folie Terrace",
    street: "Shetitorja Murat Toptani",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "https://infokult.al/wp-content/uploads/2017/12/Folie-Terrace.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 2,
    imgUri:
      "data:image/jpeg;base64,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",
    title: "Cinco Cavalli Premium Club",
    street: "Unaza e Madhe",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "https://tirana.al/uploads/images/points-of-interes/20190709124635_20180413141400_cinco-cavalli.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 3,
    imgUri:
      "https://yt3.googleusercontent.com/8NQMpbQT60kA-jqX0MWuYhazmwRDmN0VseowlB4SjKk6h8YJ3ua5xWwtvBZmF_jpwTKakG5R6is=s900-c-k-c0x00ffffff-no-rj",
    title: "Magic Club",
    street: "Rruga Pjeter Bogdani",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri: "https://media-cdn.tripadvisor.com/media/photo-s/1d/02/54/08/magic-shisha-lounge.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 4,
    imgUri: "https://10619-2.s.cdn12.com/rests/original/402_332539229.jpg",
    title: "Charl's Bistro",
    street: "Sheshi Italia",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "data:image/jpeg;base64,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",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 5,
    imgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/241834957.jpg?k=37f181dc909598c66121c6e42cef7ac60bb3f899c58c4e049b4e40f8e25f5097&o=&hp=1",
    title: "Tirana International",
    street: "Sheshi Skenderbej",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/187765176.jpg?k=85ae4d3bc2d4390b3cadb3802a1f854c16ab4ebaf4a6eb7794f9d62ae4059d93&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 6,
    imgUri: "https://www.gpsmycity.com/img/gd_sight/29916.jpg",
    title: "Maritim Plaza Tirana",
    street: "Rruga 28 Nentori",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/284882166.jpg?k=1f585854f908ad28751007946ee5f1f588acb13b83e273ff02b9ab72d47a5c73&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 7,
    imgUri: "https://www.gpsmycity.com/img/gd_sight/29916.jpg",
    title: "Maritim Plaza Tirana",
    street: "Rruga 28 Nentori",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/284882166.jpg?k=1f585854f908ad28751007946ee5f1f588acb13b83e273ff02b9ab72d47a5c73&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 8,
    imgUri: "https://www.gpsmycity.com/img/gd_sight/29916.jpg",
    title: "Maritim Plaza Tirana",
    street: "Rruga 28 Nentori",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/284882166.jpg?k=1f585854f908ad28751007946ee5f1f588acb13b83e273ff02b9ab72d47a5c73&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
];

const FavoritesScreen = ({ navigation }: { navigation: any }) => {
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
          Your Favorites
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
        data={nightlifeData}
        renderItem={({ item }) => (
          <Box flex={1}>
            <TouchableOpacity onPress={() => navigation.navigate("Nightlife Details", { item: item })}>
              <HStack style={{ paddingHorizontal: "5%", paddingVertical: "3%", alignItems: "center" }}>
                <Box flexDir={"row"} alignItems={"center"}>
                  <Image source={{ uri: item.imgUri }} style={{ width: 100, height: 100, borderRadius: 15 }} />
                  <VStack paddingLeft={4}>
                    <Text fontSize={20} marginBottom={2} maxWidth={"95%"}>
                      {item.title}
                    </Text>
                    <HStack maxWidth={"60%"}>
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

export default FavoritesScreen;
