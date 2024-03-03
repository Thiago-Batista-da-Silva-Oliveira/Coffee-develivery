import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  useFonts as useBalooFonts,
  BalooDa2_700Bold,
} from "@expo-google-fonts/baloo-da-2";
import { StatusBar } from "react-native";
import { CoffeeCard, Header, Loading } from "./src/components";
import { AppProvider } from "./src/context";
import { Center, HStack, Icon, Input, Text, VStack } from "native-base";
import { THEME } from "./src/theme";
import { MagnifyingGlass } from "phosphor-react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";


export default function App() {
  const theme = THEME;
  const [robotoFontsLoaded] = useFonts({ Roboto_400Regular });
  const [balooFontsLoaded] = useBalooFonts({ BalooDa2_700Bold });

 const AnimatedViewStack = Animated.createAnimatedComponent(VStack);

  const flex = useSharedValue(0);

  useEffect(() => {
    flex.value = withTiming(1, { duration: 1000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: flex.value,
    };
  });

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
            <VStack height="50%">
              <AnimatedViewStack bgColor="gray.100" style={animatedStyle} padding={10}>
              <Header />
              <Center marginTop={-8} flex="1" alignItems="center" justifyContent="center">
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
            <VStack marginTop={-20}>
              <HStack paddingX={10} space={8}>
                <CoffeeCard
                  category="Tradicional"
                  title="Latte"
                  price="R$ 9,90"
                  description="Café expresso com o dobro de leite e espuma cremosa"
                />
              </HStack>
            </VStack>
          </VStack>
        </>
      )}
    </AppProvider>
  );
}
