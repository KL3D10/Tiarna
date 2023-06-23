import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "../../assets/constants/theme";

const slides = [
  {
    id: 1,
    title: "Discover Tirana's Vibrant Culture",
    description:
      "Experience the vibrant energy of Tirana, Albania's capital city, where ancient history meets modern charm.",
    image: require("../../assets/images/onboardScreen/onboardScreen1.jpg"),
  },
  {
    id: 2,
    title: "Discover Hidden Treasures",
    description:
      "Uncover the hidden gems of Tirana, from charming neighborhoods to vibrant street art.",
    image: require("../../assets/images/onboardScreen/onboardScreen2.jpg"),
  },
  {
    id: 3,
    title: "Natures Delight in Tirana",
    description:
      "Immerse yourself in Tirana's natural beauty, surrounded by mountains, parks, and serene lakes.",
    image: require("../../assets/images/onboardScreen/onboardScreen3.jpg"),
  },
];

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  StatusBar.setBarStyle("light-content", true);
  StatusBar.setBackgroundColor(COLORS.primary);

  const buttonLabel = (label: string) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.title,
            fontWeight: "600",
            fontSize: SIZES.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 15,
              paddingTop: 100,
              backgroundColor: "#002c2b",
            }}
          >
            <Image
              source={require("../../assets/images/logo_white.png")}
              style={{
                width: SIZES.width - 20,
                height: 70,
                marginBottom: '-10%'
              }}
              resizeMode="contain"
            />
            <Image
              source={item.image}
              style={{
                width: SIZES.width - 50,
                height: 400,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                color: COLORS.title,
              }}
            >
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: 'white',
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      onDone={() => {
        navigation.navigate("Home");
      }}
      onSkip={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

export default OnboardingScreen;
