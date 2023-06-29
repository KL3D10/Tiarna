import { FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, Center, Divider, HStack, Icon, IconButton, Text, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICategoryData } from "../../../../models/category-interface";

const hotelsData: ICategoryData[] = [
  {
    id: 1,
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
    id: 2,
    imgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/square600/161485407.webp?k=ebc4c127f0dbc071106b934d1effef9d1df146ab4e747987ed06317cd6686ff2&o=",
    title: "Hilton Garden Inn Tirana",
    street: "Alpas Center",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/160990395.jpg?k=cf0cb0767043385ab110cf2e13b6a3fc5ce66c99c7756be8e50c93db1d476042&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 3,
    imgUri:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130934061.jpg?k=96c14cafb333124087e33e506962ad31142b513d8f53e5e91a59518e8b4c96fd&o=&hp=1",
    title: "Xheko Imperial",
    street: "Rruga Pjeter Budi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/131016009.jpg?k=276330e4bc64278b8e59336a9066e8440210a0e764c53cf04da29ed3029d5558&o=&hp=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 4,
    imgUri:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269506278.jpg?k=a5b91194484965b145a91f714dc4945bc647851aa59cdab84ed433eb06b8b78a&o=&hp=1",
    title: "Mak Albania",
    street: "Sheshi Italia",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/126199300.jpg?k=83099a32736b24d3d155405fdce893140b1839530d82f7f585610ca393f4f060&o=&hp=1",
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

const HotelsScreen = ({ navigation }: { navigation: any }) => {
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
          Browse Hotels
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
        data={hotelsData}
        renderItem={({ item }) => (
          <Box flex={1}>
            <TouchableOpacity onPress={() => navigation.navigate("Hotel Details", { item: item })}>
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

export default HotelsScreen;
