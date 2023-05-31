import React from "react";
import { StatusBar, Button, Image, Container, Text, Center } from "native-base";
import { NativeBaseProvider, Heading, FormControl, Box } from "native-base";

export default function GetStarted() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />

      <Box bg="green.700" width={"100%"} height={"50%"}></Box>

      <FormControl height={110} width={"90%"} alignSelf={"center"} mt={"10"}>
        <Button
          m={2}
          height={"1/2"}
          rounded="full"
          bg="green.700"
          alignSelf={"center"}
          width={"100%"}
        >
          <Heading color="white">Get Started</Heading>
        </Button>
        <Button
          m={2}
          height={"1/2"}
          rounded="full"
          bg="white"
          borderColor="green.700"
          borderWidth="2"
          alignSelf={"center"}
          width={"100%"}
        >
          <Heading color="green.700">Get Started</Heading>
        </Button>
      </FormControl>
    </NativeBaseProvider>
  );
}
