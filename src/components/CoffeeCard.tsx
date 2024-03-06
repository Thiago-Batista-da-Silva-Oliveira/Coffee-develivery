import { Box, Text, VStack } from "native-base";
import { THEME } from "../theme";
import Animated, { SlideInRight } from "react-native-reanimated";

interface IProps {
  urlImage?: string;
  title: string;
  category: string;
  description: string;
  price: string;
  index: number;
}

export const CoffeeCard = ({
  category,
  description,
  price,
  title,
  urlImage,
  index,
}: IProps) => {
 const AnimatedViewStack = Animated.createAnimatedComponent(VStack);
 const theme = THEME;
  return (
    <AnimatedViewStack
      entering={SlideInRight.delay(1000 + index * 100)}
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
    </AnimatedViewStack>
  );
};
