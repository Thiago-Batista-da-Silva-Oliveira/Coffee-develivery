import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  useFonts as useBalooFonts,
  BalooDa2_700Bold,
} from "@expo-google-fonts/baloo-da-2";
import { StatusBar } from "react-native";
import { Header, Loading } from "./src/components";
import { AppProvider } from "./src/context";
import { VStack } from "native-base";

export default function App() {
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
         <VStack flex="1" padding={10}>
           <Header />
         </VStack>
        </>
      )}
    </AppProvider>
  );
}
