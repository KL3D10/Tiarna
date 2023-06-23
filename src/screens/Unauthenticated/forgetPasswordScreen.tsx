import { View, Text, ImageBackground, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Icon, IconButton, Input, Stack, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const ForgetPasswordScreen = ({ navigation }: { navigation: any }) => {
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
        <View style={{ width: "100%", flex: 2, justifyContent: "space-around" }}>
          <Text style={{ textAlign: "center", color: "#002c2b", fontSize: 40, fontWeight: "bold" }}>Forgot Your Password?</Text>
          <Text style={{ textAlign: "center", color: "#002c2b", fontSize: 20 }}>Please provide one of given methods</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <Stack space={8} w="100%" h="80%" alignItems="center">
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
              <Text style={{ color: "white" }}>Submit</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#002c2b" }}>Go to Login</Text>
            </TouchableOpacity>
          </Stack>
        </View>
      </Box>
    </View>
  );
};

export default ForgetPasswordScreen;
