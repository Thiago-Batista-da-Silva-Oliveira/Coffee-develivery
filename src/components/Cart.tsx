import { Badge, Box, IconButton, VStack } from "native-base";
import { ShoppingCart } from "phosphor-react-native";
import { THEME } from "../theme";

interface IProps {
  itemsOnCart?: number;
}

export const Cart = ({ itemsOnCart = 0 }: IProps) => {
  const theme = THEME;
  return (
    <Box alignItems="center">
      <VStack>
        {itemsOnCart > 0 && (
          <Badge
            color={theme.colors.purple.default}
            rounded="full"
            mb={-4}
            mr={-4}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}
          >
            {itemsOnCart}
          </Badge>
        )}
        <IconButton
          mx={{
            base: "auto",
            md: 0,
          }}
        >
          <ShoppingCart
            weight="fill"
            color={
              itemsOnCart > 0
                ? theme.colors.purple.default
                : theme.colors.yellow_dark
            }
            size={24}
          />
        </IconButton>
      </VStack>
    </Box>
  );
};
