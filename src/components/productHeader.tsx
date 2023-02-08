import {Text} from 'react-native';
import {useAppSelector} from '../../store/hooks';

const ProductHeader = (): JSX.Element => {
  const title = useAppSelector(state => state.product.selectedProduct.title);
  return <Text>{title}</Text>;
};

export default ProductHeader;
