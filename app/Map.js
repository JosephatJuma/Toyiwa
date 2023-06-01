import React, { memo, useState } from "react";
import { Button, Image, Container, Text, Center } from "native-base";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Heading,
  FormControl,
  Box,
  IconButton,
  HStack,
  Icon,
  VStack,
  Stack,
  ScrollView,
  Actionsheet,
} from "native-base";
import { View } from "react-native";

import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const Map = ({ back }) => {
  const [openOverlay, setOpen] = useState(true);
  const showOverLay = () => {
    setOpen(!openOverlay);
  };
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="transparent" style={"dark-content"} />
      <View width={"100%"} height={"100%"}>
        <MapView
          showsCompass={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          style={{ width: "100%", height: "100%" }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 0.3476,
            longitude: 32.5825,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        ></MapView>
      </View>
      <Actionsheet isOpen={openOverlay} onClose={showOverLay}>
        <Actionsheet.Content borderTopRadius="0">
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Track Location
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
};

export default memo(Map);
