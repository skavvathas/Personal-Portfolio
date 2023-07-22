import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: skabbathas@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/skavvathas",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/spiros-kavvathas-33373820b/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={9999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={6}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <Box w="20px" h="20px">
                    <FontAwesomeIcon icon={social.icon} size="2x"/>
                  </Box>
                </a>
              ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
        
              <Link href="#projects-section" color="blue.500">
                Projects
              </Link>
              <Link href="#contactme-section" color="blue.500">
                Contact Me
              </Link>
            </HStack>


          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
