import { Heading, HStack, Image, Text, VStack, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardProject = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <Card>
      <CardBody>
        <Image
          src={imageSrc}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          border='1px'
          borderColor='black'
        />
        <Text fontWeight="bold" fontSize='xl'>{title}</Text>
        <Text>{description}</Text>

        <a href={url}>
          Check the code 
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
        
      </CardBody>
    </Card>
  );
};

export default CardProject;
