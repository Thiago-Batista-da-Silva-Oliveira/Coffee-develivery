import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  useFonts as useBalooFonts,
  BalooDa2_700Bold,
} from "@expo-google-fonts/baloo-da-2";
import { StatusBar } from "react-native";
import {
  CoffeeCard,
  CoffeeHorizontalCard,
  Header,
  Loading,
} from "./src/components";
import { AppProvider } from "./src/context";
import {
  Button,
  Center,
  FlatList,
  HStack,
  Icon,
  Input,
  SectionList,
  Text,
  VStack,
} from "native-base";
import { THEME } from "./src/theme";
import { MagnifyingGlass } from "phosphor-react-native";
import Animated, {
  FadeInUp,
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function App() {
  const theme = THEME;
  const [robotoFontsLoaded] = useFonts({ Roboto_400Regular });
  const [balooFontsLoaded] = useBalooFonts({ BalooDa2_700Bold });

  const AnimatedViewStack = Animated.createAnimatedComponent(VStack);

  const coffeeData = [
    {
      id: "1",
      category: "Tradicional",
      title: "Latte",
      price: "R$ 9,90",
      description: "Café expresso com o dobro de leite e espuma cremosa",
    },
    {
      id: "2",
      category: "Tradicional",
      title: "Latte",
      price: "R$ 9,90",
      description: "Café expresso com o dobro de leite e espuma cremosa",
    },
  ];

  const coffeeSessionList = [
    {
      title: "Tradicionais",
      data: [
        {
          id: "1",
          category: "Tradicional",
          title: "Latte",
          price: "R$ 9,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
        {
          id: "2",
          category: "Tradicional",
          title: "Latte",
          price: "R$ 9,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
      ],
    },
    {
      title: "Doces",
      data: [
        {
          id: "3",
          category: "Doce",
          title: "Latte",
          price: "R$ 12,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
        {
          id: "4",
          category: "Doce",
          title: "Latte",
          price: "R$ 11,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
      ],
    },
    {
      title: "Especiais",
      data: [
        {
          id: "5",
          category: "Especial",
          title: "Latte",
          price: "R$ 15,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
        {
          id: "6",
          category: "Especial",
          title: "Latte",
          price: "R$ 15,90",
          description: "Café expresso com o dobro de leite e espuma cremosa",
        },
      ],
    },
  ];

  return (
    <AppProvider>
      {!robotoFontsLoaded || !balooFontsLoaded ? (
        <Loading />
      ) : (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <VStack flex="1">
            <VStack height={400}>
              <AnimatedViewStack
                entering={SlideInUp.duration(1000)}
                bgColor="gray.100"
                padding={10}
                height={400}
              >
                <Header />
                <Center
                  marginTop={-8}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack space={5}>
                    <Text fontSize={theme.fontSizes.heading.md} color="white">
                      Encontre o café perfeito para qualquer hora do dia
                    </Text>
                    <Input
                      w={{
                        base: "100%",
                      }}
                      bg="gray.200"
                      InputLeftElement={
                        <Icon
                          as={<MagnifyingGlass size={24} weight="thin" />}
                          size={5}
                          ml="2"
                          color="gray.400"
                        />
                      }
                      placeholder="Pesquisar"
                    />
                  </VStack>
                </Center>
              </AnimatedViewStack>
            </VStack>
            <VStack height={300} maxHeight={300} flex={1} marginTop={-20}>
              <FlatList
                style={{
                  paddingHorizontal: 10,
                  gap: 8,
                  flex: 1,
                  maxHeight: 300,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ gap: 10 }}
                data={coffeeData}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <CoffeeCard
                    category={item.category}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    index={index}
                  />
                )}
              />
            </VStack>
            <AnimatedViewStack entering={SlideInDown.delay(1100)} space={5} padding={10}>
              <Text
                fontWeight="bold"
                fontSize={theme.fontSizes.heading.md}
                color="gray.300"
              >
                Nossos cafés
              </Text>
              <HStack space={8}>
                <Button
                  variant="outline"
                  borderColor={theme.colors.purple.dark}
                  borderRadius={18}
                >
                  <Text
                    textTransform="uppercase"
                    color={theme.colors.purple.dark}
                  >
                    Tradicionais
                  </Text>
                </Button>
                <Button
                  variant="outline"
                  borderColor={theme.colors.purple.dark}
                  borderRadius={18}
                >
                  <Text
                    textTransform="uppercase"
                    color={theme.colors.purple.dark}
                  >
                    Doces
                  </Text>
                </Button>
                <Button
                  variant="outline"
                  borderColor={theme.colors.purple.dark}
                  borderRadius={18}
                >
                  <Text
                    textTransform="uppercase"
                    color={theme.colors.purple.dark}
                  >
                    Especiais
                  </Text>
                </Button>
              </HStack>
            </AnimatedViewStack>
          </VStack>
        </>
      )}
    </AppProvider>
  );
}
