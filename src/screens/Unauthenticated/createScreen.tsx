import { View, Text, ImageBackground, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Icon, IconButton, Input, Stack, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const CreateScreen = ({ navigation }: { navigation: any }) => {
  const [show, setShow] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={{
          width: "100%",
          justifyContent: "flex-start",
          flex: 2,
        }}
      >
        <HStack>
          <IconButton
            borderRadius={50}
            icon={<MaterialIcons name="arrow-back" color="white" size={35} />}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </HStack>
        <Image source={require("../../assets/images/text.png")} alt="img" style={{ height: "30%", width: "100%", marginTop: 30 }} />
      </ImageBackground>
      <Box flex={4}>
        <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "center", color: "#002c2b", fontSize: 40, fontWeight: "bold" }}>Create Account</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "center" }}>
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
                md: "5%",
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}
              placeholder="Phone"
              keyboardType="number-pad"
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
              borderRadius="50"
              bgColor={"#002c2b"}
              onPress={() => navigation.navigate("Main")}
            >
              <Text style={{ color: "white" }}>Register</Text>
            </Button>
          </Stack>
        </View>
      </Box>
    </View>
  );
};

export default CreateScreen;
