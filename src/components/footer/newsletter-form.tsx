import { Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

export const NewsletterForm = () => {
  return (
    <Stack
      as="form"
      gap="4"
      direction={{ base: "column", sm: "row" }}
      height="min-content"
    >
      <Field label="Stay up to date" gap="4" maxW="md">
        <Input placeholder="Enter your email" type="email" required />
      </Field>
      <Button alignSelf={{ base: "stretch", sm: "flex-end" }}>Subscribe</Button>
    </Stack>
  );
};
