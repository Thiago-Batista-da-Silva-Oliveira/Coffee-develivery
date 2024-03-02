import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  useFonts as useBalooFonts,
  BalooDa2_700Bold,
} from "@expo-google-fonts/baloo-da-2";
import { StatusBar, Text } from "react-native";
import { Loading } from "./src/components";
import { AppProvider } from "./src/context";

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
          <Text>Hello, World</Text>
        </>
      )}
    </AppProvider>
  );
}
