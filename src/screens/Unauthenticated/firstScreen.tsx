import { View, ImageBackground, Image } from "react-native";
import React from "react";
import { Box, Center, HStack, Button, Text } from "native-base";

const FirstScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image style={{ width: 360, height: 380, marginBottom: 50 }} source={require("../../assets/images/logo_shkrim.png")} />
        <Box height={"40%"} width={"100%"} paddingX={3} alignItems={"center"} justifyContent={"space-around"}>
          <Center width={"80%"}>
            <Text fontSize={20} color={"white"} textAlign={"center"} fontWeight={"bold"}>
              Unveiling the Vibrant Heart of Albania's Capital
            </Text>
            <Text fontSize={30} color={"white"} textAlign={"center"} fontWeight={"bold"}>
              Tirana
            </Text>
          </Center>
          <Box width={"100%"} height={"45%"} justifyContent={"space-around"}>
            <Button variant="solid" borderRadius="5" width="100%" py={3} backgroundColor={"white"} onPress={() => navigation.navigate("Login")}>
              <Text fontSize={16} color={"#00bcb4"}>
                Login
              </Text>
            </Button>
            <Button
              variant="outline"
              borderRadius="5"
              borderWidth={1.5}
              width="100%"
              py={3}
              // backgroundColor={'white'}
              onPress={() => navigation.navigate("Create")}
            >
              <Text fontSize={16} color={"white"} fontWeight={"bold"}>
                Register
              </Text>
            </Button>
          </Box>
        </Box>
      </ImageBackground>
    </View>
  );
};

export default FirstScreen;
