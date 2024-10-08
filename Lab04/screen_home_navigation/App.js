import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
  const [selectedImageUri, setSelectedImageUri] = React.useState('https://cdn.viettelstore.vn/Images/Product/ProductImage/1412734899.jpeg');

  React.useEffect(() => {
    if (route.params?.imageUri) {
      setSelectedImageUri(route.params.imageUri);
    }
  }, [route.params?.imageUri]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedImageUri }}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★★★★★</Text>
        <Text style={styles.ratingCmt}> (Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>2.290.000 đ</Text>
      </View>
      <View style={styles.contractContainer}>
        <Text style={styles.contract}>Ở đâu rẻ hơn hoàn tiền</Text>
        <FontAwesome name="question-circle-o" size={24} style={styles.iconQuestion} color="black" />
      </View>
      <TouchableOpacity style={styles.colorButton} onPress={() => navigation.navigate('ColorSelection')}>
        <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text>
        <FontAwesome name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Bắt đầu mua')}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

function ColorSelectionScreen({ navigation }) {
  const [imageUri, setImageUri] = React.useState('https://cdn.viettelstore.vn/Images/Product/ProductImage/1412734899.jpeg');
  const [colorSelected, setColorSelected] = React.useState('Xanh');

  const handleSelectColor = (colorName, uri) => {
    setImageUri(uri);
    setColorSelected(colorName);
  };

  const handleDone = () => {
    navigation.navigate('Home', { imageUri });
  };

  return (
    <View style={styles.colorSelectionContainer}>
      <View style={styles.colorBodyContainer}>
        <Image source={{ uri: imageUri }} style={styles.productImageSelection} />
        <View>
          <Text style={styles.productNameColor}>Điện thoại Vsmart Joy 3</Text>
          <Text style={styles.colorDisplay}>Màu: {colorSelected}</Text>
          <Text style={styles.providerText}><Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text></Text>
          <Text style={styles.priceText}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.colorFooterContainer}>
        <Text style={styles.colorSelectionPrompt}>Chọn một màu bên dưới:</Text>
        <TouchableOpacity style={styles.colorOption} onPress={() => handleSelectColor('Xanh', 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1412734899.jpeg')}>
          <View style={[styles.colorSample, { backgroundColor: '#00BFFF' }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorOption} onPress={() => handleSelectColor('Đen', 'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_28983/vsmart-joy32gb3_main_195_1020.png.webp')}>
          <View style={[styles.colorSample, { backgroundColor: 'black' }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorOption} onPress={() => handleSelectColor('Xám', 'https://medidong.vn/wp-content/uploads/2023/06/vsmart-joy-3-trang-medidong.vn-I.png')}>
          <View style={[styles.colorSample, { backgroundColor: '#cccccc' }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorOption} onPress={() => handleSelectColor('Lục', 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-den-1-750x500.jpg')}>
          <View style={[styles.colorSample, { backgroundColor: '#567f2d' }]} />
        </TouchableOpacity>
       
      </View>
       <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Xong</Text>
        </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} options={{ title: 'Chọn Màu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  productImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImageSelection: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: 20
  },
  productName: {
    fontSize: 20,
    marginBottom: 10
  },
  productNameColor: {
    fontSize: 15,
    flexShrink: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  rating: {
    fontSize: 18,
    color: 'gold',
  },
  ratingCmt: {
    fontSize: 18,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'grey',
    marginBottom: 5,
    marginLeft: 10
  },
  contractContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  contract: {
    fontSize: 18,
    color: 'red',
    textTransform: 'uppercase',
  },
  iconQuestion: {
    marginLeft: 10
  },
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#D1D1D1',
    borderRadius: 25,
    marginTop: 20,
  },
  colorButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height :2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 50
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  colorSelectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  colorBodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  colorFooterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    marginBottom: 60
  },
  colorSelectionPrompt: {
    fontSize: 20,
    marginBottom: 20
  },
  colorOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  colorSample: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#D1D1D1'
  },
  colorDisplay: {
    fontSize: 16,
    marginTop: 10
  },
  providerText: {
    fontSize: 16,
    marginTop: 10
  },
  priceText: {
    fontSize: 18,
    color: 'red',
    marginTop: 10
  },
  boldText: {
    fontWeight: 'bold'
  },
  doneButton: {
    backgroundColor: 'blue',
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

},
  doneButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
    
});

export default App;