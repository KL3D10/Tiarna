import { View, ImageBackground, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, IconButton, Box, Stack, Input, Icon, Button, Text, Center } from "native-base";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [show, setShow] = useState(false);
  return (
    <Box flex={1}>
      <HStack bg={"#002c2b"} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton
            borderRadius={50}
            icon={<Icon size="md" as={MaterialIcons} name="arrow-back" color="white" />}
            onPress={() => navigation.goBack()}
          />
          <Text color="white" fontSize="20" paddingLeft={5}>
            Profile
          </Text>
        </HStack>
      </HStack>
      <Center bgColor={"#002c2b"} flex={2}>
        <Image style={{ width: 260, height: 280, marginBottom: 50 }} source={require("../../../assets/images/logo_shkrim.png")} />
      </Center>
      <Box flex={4}>
        <View style={{ flex: 4, justifyContent: "center", marginTop: "10%" }}>
          <Stack space={8} w="100%" h="80%" alignItems="center">
            <Input
              w={{
                base: "95%",
                md: "5%",
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
              placeholder="Name"
              borderColor={"#002c2b"}
            />
            <Input
              w={{
                base: "95%",
                md: "5%",
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}
              placeholder="Email"
              borderColor={"#002c2b"}
            />
            <Input
              w={{
                base: "95%",
                md: "45%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
              }
              placeholder="Password"
              borderColor={"#002c2b"}
            />
            <Button
              variant="outline"
              w={{
                base: "95%",
                md: "45%",
              }}
              borderRadius="10"
              bgColor={"red.600"}
              onPress={() => navigation.navigate("Main")}
            >
              <Text style={{ color: "white" }}>Log Out</Text>
            </Button>
          </Stack>
        </View>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
