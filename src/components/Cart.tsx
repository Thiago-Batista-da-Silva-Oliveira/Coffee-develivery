import { Badge, Box, IconButton, VStack } from "native-base";
import { ShoppingCart } from "phosphor-react-native";

interface IProps {
  itemsOnCart?: number;
}

export const Cart = ({ itemsOnCart = 0 }: IProps) => {
  return (
    <Box alignItems="center">
      <VStack>
        {itemsOnCart > 0 && (
          <Badge
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
          <ShoppingCart size={24} />
        </IconButton>
      </VStack>
    </Box>
  );
};
