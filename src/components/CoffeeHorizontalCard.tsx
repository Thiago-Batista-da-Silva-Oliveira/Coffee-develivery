import { HStack, Text, VStack } from "native-base";
import { THEME } from "../theme";

interface IProps {
  title: string;
  price: string;
  description: string;
}

export const CoffeeHorizontalCard = ({description, price, title}: IProps) => {
   const theme = THEME;
    return (
    <HStack
      flex={1}
      alignItems="center"
      bg="gray.800"
      borderRadius={8}
      p={4}
      shadow={1}
      padding={8}
      marginY={2}
    >
      <VStack space={5}>
        <Text color="gray.200" fontSize={theme.fontSizes.heading.sm} fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.400" fontSize={theme.fontSizes.text.xs}>
          {description}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color={theme.colors.yellow_dark}>
          {price}
        </Text>
      </VStack>
    </HStack>
  );
};
