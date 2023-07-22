import React from "react";
import { Avatar, Heading, VStack, HStack, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import imageProfile from "../images/profile.jpeg";



// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const greeting = "Hello, I am Spiros!";
  const bio1 = "An undergraduate university student and";
  const bio2 = "enthusiast with React.js.";

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#76F8F8"
    >
      <VStack>
        <Avatar name="Spiros Kavvathas" size='2xl' src={imageProfile}/>
        <Text fontSize="3xl" color="black" fontWeight="bold">{greeting}</Text>
        <Text fontSize="2xl" color="black" fontWeight="bold">{bio1}</Text>
        <Text fontSize="2xl" color="black" fontWeight="bold">{bio2}</Text>
      </VStack>

    </FullScreenSection>
  );
};

export default LandingSection;
