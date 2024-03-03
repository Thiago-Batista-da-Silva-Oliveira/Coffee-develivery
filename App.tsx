import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  useFonts as useBalooFonts,
  BalooDa2_700Bold,
} from "@expo-google-fonts/baloo-da-2";
import { StatusBar } from "react-native";
import { Header, Loading } from "./src/components";
import { AppProvider } from "./src/context";
import { Center, Icon, Input, Text, VStack } from "native-base";
import { THEME } from "./src/theme";
import { MagnifyingGlass } from "phosphor-react-native";

export default function App() {
  const theme = THEME;
  const [robotoFontsLoaded] = useFonts({ Roboto_400Regular });
  const [balooFontsLoaded] = useBalooFonts({ BalooDa2_700Bold });

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
            <VStack height="50%" bgColor="gray.100" padding={10}>
              <Header />
              <Center
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
                      as={<MagnifyingGlass size={24} weight="thin" />
                    }
                      size={5}
                      ml="2"
                      color="gray.400"
                    />
                  }
                  placeholder="Pesquisar"
                />
              </VStack>
              </Center>
            </VStack>
          </VStack>
        </>
      )}
    </AppProvider>
  );
}
