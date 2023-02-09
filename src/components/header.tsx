import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CartCount} from './CartCount';

export default function Header(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mainContainer} onPress={()=>navigation.navigate('Home')}>
        <Image
          source={require('../../assets/app-icons/lady-icon-3.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}> Jenny </Text>
      </TouchableOpacity>
      <Text style={styles.title}>E-Comm</Text>
      <CartCount></CartCount>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    paddingRight: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
