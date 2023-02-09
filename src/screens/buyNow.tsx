import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BuyNow = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Thank you, your order placed successfully!</Text>
      <Text>Happy shopping!!!!</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    borderRadius: 20,
  },
  Button: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default BuyNow;
