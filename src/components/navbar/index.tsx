import { Box, Container, HStack, Spacer } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { MobilePopover } from "./mobile-popover";
import { NavbarLinks } from "./navbar-links";
import { ColorModeButton } from "@/components/ui/color-mode";

export const Navbar = () => {
  return (
    <Box borderBottomWidth="1px" bg="bg.panel">
      <Container py={{ base: "3.5", md: "4" }} px={4}>
        <HStack justify="space-between">
          <Logo />
          <Spacer hideFrom="md" />
          <NavbarLinks hideBelow="md" />
          <HStack>
            <ColorModeButton />
            <Button size={{ base: "sm", md: "md" }}>Buy Now</Button>
          </HStack>
          <MobilePopover>
            <NavbarLinks />
            <ColorModeButton />
          </MobilePopover>
        </HStack>
      </Container>
    </Box>
  );
};
