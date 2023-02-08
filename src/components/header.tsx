import { View, Text, Image, StyleSheet } from "react-native";
import { useAppSelector } from "../../store/hooks";

export default function Header(): JSX.Element  {
const cartLength = useAppSelector((state) => state.product.cart.length)
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/app-icons/lady-icon-3.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}> Jenny </Text>
      </View>
      <Text style={styles.title}>E-Comm</Text>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/app-icons/add-to-cart.jpeg")}
          style={styles.cartImage}
        />
        <Text style={styles.cartCount}>
          {cartLength}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '90%'
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: "lightgray",
  },
  cartImage: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
