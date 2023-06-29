import { FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, Center, Divider, HStack, Icon, IconButton, Text, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ICategoryData } from "../../../../models/category-interface";


const shoppingData: ICategoryData[] = [
  {
    id: 1,
    imgUri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6b/28/25/tirana-east-gate.jpg?w=1100&h=-1&s=1",
    title: "Tirana East Gate",
    street: "Autostrada Tiranë-Elbasan",
    likes: 26,
    openTime: "10:00AM - 10:00PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c8/7c/3d/tirana-east-gate.jpg?w=1100&h=-1&s=1",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 2,
    imgUri:
      "https://i.imgur.com/6KSJGpV.jpg",
    title: "Toptani Shopping Center",
    street: "Rruga Abdi Toptani",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://www.molon.de/galleries/Albania/Tirana/images01/15%20Toptani%20shopping%20mall.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 3,
    imgUri:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/b7/2d/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
    title: "Qendra Tregtare Univers",
    street: "Autostrada Tiranë-Durrës",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://balfin.al/wp-content/uploads/2022/09/Teg_qtu_recycling_balfin_group.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 4,
    imgUri:
      "https://www.knauf.al/wp-content/uploads/2016/05/d7b21f45dd8fa78aed7fa41470661251.jpg",
    title: "Tirana Ring Center",
    street: "Sheshi Karl Topia",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://i.ytimg.com/vi/xACm8GCSdQA/maxresdefault.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 5,
    imgUri:
      "https://img2.10bestmedia.com/Images/Photos/396913/coin_55_660x440.jpg",
    title: "COIN Tirana",
    street: "Rruga Papa Gjon Pali II",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://c8.alamy.com/comp/MKC431/inside-the-coin-luxury-goods-store-cannaregio-venice-veneto-italy-with-happy-smiling-staff-despite-being-forced-to-close-down-due-to-a-rental-dis-MKC431.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 6,
    imgUri: "https://tirana.al/uploads/images/points-of-interes/20180413124141_kristal.jpg",
    title: "Kristal Center",
    street: "Rruga Frank Bardhi",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://live.staticflickr.com/2192/3541656469_61d7928d35_b.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 7,
    imgUri: "https://gjstatic.blob.core.windows.net/businessdirectoryphotos/large/4f393cb188a87fc3ee1e3a5046a835cb_20161222_104025.jpg",
    title: "Concord Center",
    street: "Rruga Gaqo Vakefili",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://10619-2.s.cdn12.com/rests/original/108_509963142.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 8,
    imgUri: "data:image/jpeg;base64,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",
    title: "Galeria ETC",
    street: "Rruga Fatmir Haxhiu",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://tirana.al/uploads/images/points-of-interes/20180413124433_etc-galeria.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
  {
    id: 9,
    imgUri: "https://www.monitor.al/images/2015/08/casa-italia.jpg",
    title: "Casa Italia",
    street: "Tirane-Durrës, km 0",
    likes: 26,
    openTime: "5 PM - 11 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    detailImgUri:
      "https://www.intoalbania.com/wp-content/uploads/2018/02/KO_QT-PAZARI_01-750x422.jpg",
    phone: "+355 69 22 33 444",
    email: "testtest@gmail.com",
  },
];

const ShoppingScreen = ({ navigation }: { navigation: any }) => {
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
          Browse Shopping
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
        data={shoppingData}
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

export default ShoppingScreen;
