import { Box, Center, Text, VStack } from "native-base";
import { THEME } from "../theme";

interface IProps {
  urlImage?: string;
  title: string;
  category: string;
  description: string;
  price: string;
}

export const CoffeeCard = ({
  category,
  description,
  price,
  title,
  urlImage,
}: IProps) => {
  const theme = THEME;
  return (
    <VStack
      borderRadius={8}
      borderTopRightRadius={50}
      width="64"
      height="72"
      bg="white"
      padding={8}

      style={{
        elevation: 1,
      }}
    >
      <VStack flex={1} alignItems="center" justifyContent="space-between">
        <Box padding={1} borderRadius={16} bg={theme.colors.purple.light}>
          <Text fontWeight={theme.fontWeights.bold} textTransform="uppercase" color={theme.colors.purple.dark}>{category}</Text>
        </Box>
        <Text fontWeight={theme.fontWeights.bold} fontSize={theme.fontSizes.heading.md}>{title}</Text>
        <Text fontSize={theme.fontSizes.text.sm} color="gray.400">{description}</Text>
        <Text fontSize={theme.fontSizes.heading.lg} fontWeight={theme.fontWeights.bold} color={theme.colors.yellow_dark}>{price}</Text>
      </VStack>
    </VStack>
  );
};
