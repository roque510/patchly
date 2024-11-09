import { Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionHeader } from "./section-header";
import { data } from "./data";
import { TestimonialCard } from "./testimonial-card";

export const Reviews = () => (
  <Container py={{ base: "16", md: "24" }}>
    <Stack gap="12">
      <SectionHeader
        align="center"
        textAlign="center"
        tagline="Trusted by customers"
        headline="Real people, real stories."
        description="Hear from our customers about their experiences with our product."
      ></SectionHeader>
      <SimpleGrid gap="6" columns={{ base: 1, md: 3 }}>
        {data.map((item) => (
          <TestimonialCard key={item.authorName} data={item} />
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);
