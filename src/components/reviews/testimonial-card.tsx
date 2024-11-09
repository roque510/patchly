import { Blockquote, Box, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

interface TestimonialCardProps {
  data: {
    quote: string;
    authorName: string;
    authorImage: string;
    authorRole: string;
  };
}

export const TestimonialCard = (props: TestimonialCardProps) => {
  const { data } = props;
  return (
    <Blockquote.Root
      display="flex"
      flexDirection="column"
      variant="plain"
      borderWidth="1px"
      bg="bg.panel"
      rounded="l2"
      p="6"
    >
      <Blockquote.Caption display="flex" gap="3" alignItems="center">
        <Avatar src={data.authorImage} size="lg" />
        <Box>
          <Text fontWeight="medium" color="colorPalette.fg">
            {data.authorName}
          </Text>
          <Text color="fg">{data.authorRole}</Text>
        </Box>
      </Blockquote.Caption>
      <Blockquote.Content mt="4" flex="1">
        "{data.quote}"
      </Blockquote.Content>
    </Blockquote.Root>
  );
};
