import {
  Button,
  Circle,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuTruck, LuShieldCheck, LuGlobe } from "react-icons/lu";

export const Features = () => {
  return (
    <Container maxW="5xl" py="20">
      <Stack align={{ md: "center" }} gap={{ base: "8", md: "20" }}>
        <Stack
          align={{ base: "flex-start", md: "center" }}
          gap="2"
          maxW="3xl"
          w="full"
        >
          <Heading
            as="h2"
            textStyle={{ base: "3xl", md: "4xl" }}
            textAlign={{ md: "center" }}
          >
            Quality, convenience, and peace of mind.
          </Heading>
          <Text
            color="fg.muted"
            textStyle="lg"
            my="2"
            textAlign={{ md: "center" }}
          >
            Enjoy fast, reliable service with our commitment to top-quality
            standards, fast delivery, and a satisfaction guarantee.
          </Text>
          <HStack>
            <Button size="lg">Shop Now</Button>
            <Button variant="outline" colorScheme="gray" size="lg">
              Contact Support
            </Button>
          </HStack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="10"
          pt={{ base: "8", md: "0" }}
        >
          {features.map((feature) => (
            <Stack key={feature.title} gap="3">
              <Circle size="12" layerStyle="fill.solid">
                <Icon size="md">{feature.icon}</Icon>
              </Circle>
              <Text fontWeight="medium">{feature.title}</Text>
              <Text color="fg.muted" mb="3">
                {feature.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

const features = [
  {
    icon: <LuTruck />,
    title: "Free Shipping",
    description: "Receive your order within 3-5 days across the EU.",
  },
  {
    icon: <LuShieldCheck />,
    title: "60-Day Money-Back Guarantee",
    description:
      "Return your purchase within 60 days for a full refund, no questions asked.",
  },
  {
    icon: <LuGlobe />,
    title: "Made in Germany",
    description:
      "Developed and tested in German labs to the highest quality standards.",
  },
];
