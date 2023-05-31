import React from "react";
import { StatusBar, Button, Image, Container, Text, Center } from "native-base";
import {
  NativeBaseProvider,
  Heading,
  FormControl,
  Box,
  Input,
  VStack,
  HStack,
  Icon,
  Avatar,
  ScrollView,
  Pressable,
  Actionsheet,
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
const Footer = ({ toHome, toMap, toAccount, selected }) => {
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      alignSelf="center"
      alignItems={"baseline"}
    >
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={toHome}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialIcons
                  name={selected === 0 ? "dashboard" : "home-outline"}
                />
              }
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={toMap}
        >
          <Center>
            <Icon
              mb="1"
              as={<Entypo name="map" />}
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Map
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={toHome}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "cart" : "cart-outline"}
                />
              }
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={toAccount}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
