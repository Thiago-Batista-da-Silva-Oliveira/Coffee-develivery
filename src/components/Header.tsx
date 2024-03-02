import { HStack, IconButton, Text } from "native-base"
import { Cart } from "./Cart"
import { ArrowLeft, MapPin } from "phosphor-react-native"

interface IProps {
    handleBack?: () => void
}

export const Header = ({handleBack}: IProps) => {
    return (
        <HStack bg="transparent" alignItems="center" justifyContent="space-between">
          {handleBack ? (
            <IconButton onPress={() => handleBack()}>
                <ArrowLeft size={24} />
            </IconButton>
          ) : (
            <HStack space={2} alignItems="center">
              <MapPin size={24} />
              <Text>Rio de Janeiro, RJ</Text>
            </HStack>    
          )}
          <Cart itemsOnCart={0} />
        </HStack>
    )
}