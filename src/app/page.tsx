import { Pricing } from "@/components/pricing";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Container, HStack, Stack } from "@chakra-ui/react";
import { Reviews } from "@/components/reviews";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <Stack
      width={"full"}
      padding={10}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Pricing />
      <Features />
      <Reviews />
      <Footer />
    </Stack>
  );
}
