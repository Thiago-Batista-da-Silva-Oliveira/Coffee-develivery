import { HStack, IconButton, Text } from "native-base"
import { Cart } from "./Cart"
import { ArrowLeft, MapPin } from "phosphor-react-native"
import { THEME } from "../theme"

interface IProps {
    handleBack?: () => void
}

export const Header = ({handleBack}: IProps) => {
  const theme = THEME;
    return (
        <HStack bg="transparent" alignItems="center" justifyContent="space-between">
          {handleBack ? (
            <IconButton onPress={() => handleBack()}>
                <ArrowLeft size={24} />
            </IconButton>
          ) : (
            <HStack space={2} alignItems="center">
              <MapPin color={theme.colors.purple.default} size={24} />
              <Text color='white'>Rio de Janeiro, RJ</Text>
            </HStack>    
          )}
          <Cart itemsOnCart={0} />
        </HStack>
    )
}