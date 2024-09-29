import React from 'react';
import {
  SafeAreaView,View,FlatList,StyleSheet,Text,Image,StatusBar,TouchableOpacity, TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DATA = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neVdCLXTvXQBd-6Y8cl3DWh951yz3GE1pQKliANsNAQcfo2f3SeWwZcfx3H3JMVIRXaEgoTIfsZ4oVpEJswj2-qniozbdbWWSROegHqsIGwLILgcUA-7DwJ8yTwExRhquMUdOyswqtNMBFGjR2GL9BSaGPlroYJy8ENG2MU-wjXMfgVJk6w7scAoo6fwUr4aLbwPwUno4UcXowemTq~m5yliEzvkE58aZgAMSoYfOC1Lymrol3i8Aq8Ve2EOqPBSU4k~Htqaa3ZdvDSD1MHpxEM2Ir-pbP8hS75tG56456W73SK-en~CR94zLwyPZJG6sls7MHJt2~PRJwVmXzwMiA__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlEChIvctUODC-VoC5SD16Agx97XKoECqfjeYaD7XVSSoKz8UXx33RNK8nZewVl5oIDyt9694MBCqqAZ9CpvfoWNoQejfR04OmvDEy0yvJPMmQl3m9HJfTILzYjb7FN9RoOOzo-Br7GuPpydK6SqmjQt5niXN7-t1eNxcpPQQ2cFHmubWzaNO0~rjrn4NzdPwiex8CZ1w~WrsjJKxoownTUVitKL-CV8nxzCJk3~1JuJ4kNX8EIUjVMDOoGYtqUB3zXwcmG~5rCBHxY2K0cbwudH~-TgrKxMwGTzkh69wFZa4ooy~datPaRio00a~L931Oycz-e4p~KK3z3VRUS4uw__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrrExTgi2WZuNP146WxG8rsXRrNMoWWFbnvx9vuoWv3D4Nh5VMx6md2e38KXAUf74XXQAPJk4w7K3c25feEuUSTehI-Uo5EY3Pp9A4WbhQKFUjFde~LhPMAoicllWUul3gf8REXojMPmuCE6xkFqp-mirONQLHwt1ChlaXG3-Sycj0l8oMfHvyKPgXMupLBso59Y4E~IRJF2mnvhiFkgyXW~wbb84DPLT~bwRQ3xCbxzeGHBM3e8Nabhhj7fjXfKQrA7NBAlihTPOOe6EEnjTM0WHYEo~tvlckBeMdpMCW7VDNJhNrkyb6Z0DX1Q6koAHEmKEumUFJ7kutYa6L-Ksg__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbrrV4aqXB2PITIZvPqJVRx19VYxw1G~57EOQxwCTN5bKDo6mM28k2cr6lkC4pLf-FUVdByXxpM-Q5wdIV5Z~P8Fs~ykiX90265nGznkbqUWT7JXPPkAbrc7FQ8YZgI4VyING~pqyuoI85tGOtQx2-ec26yuZWk75SSZTgTKzVruTNmorr85l3iD4fQcptuAFJgujXyGkQwcUTzX2Blri-RUbinfM6~OP8b7QtktvJo65QKNAv~p55EsD04FF2RTxBipRsKETTmX-KT9mCUTEGCxmcoSFjPtrRLOVV0W3eVxqikBy6337LOk4jMjKxIZf~0ImaFq~HH1cIViFrph4g__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCL78RAFwA4rV1L9EkcEt-UMaeBPqZLR1QRiq~nJNGD1IFtHBemSToktzr5g0j2ypr9ZiHmrJCqIiNNk3uK0W-nQpl66Zv596obDW080u~1qgSwn-WjGmZ~WiBR4YHKYDLV3zmx59Ln1eTVzW3cj5EstHbGgmRmZXf9Lu3swZ37VZpL~EJt1rjk4qmF3E6be0NBuLfAhgh9e5QU-7d-UK5B4HsF5Seg6PION362PXmB8NvVLx4kjxAs~l9h~Pcf3CBAaZU4K3gflVhgLlCpEn1cc9D5DRVG3eCAYBe18XJudrSP5kKWWAf~9ivJSqEGNes~XX57nr1dH1kg05WqORA__',
    price: '69.900 đ',
    discount: '-39%',
    rating: '★★★★☆',
    reviewCount: 15,
  },

];

const Item = ({ title, image, price, discount, rating, reviewCount }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.reviewCount}>({reviewCount})</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.discount}>{discount}</Text>
      </View>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

 <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={30} color="white" />
        </TouchableOpacity>


       <View style={styles.searchContainer}>
            <TouchableOpacity>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
            placeholder="Dây cáp usb"
            style={styles.searchInput}
        />
        </View>

        <TouchableOpacity style={styles.shoppingCart}>
          <FontAwesome name="shopping-cart" size={30} color="white" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ellipsisIcon}>
          <FontAwesome name="ellipsis-h" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            price={item.price}
            discount={item.discount}
            rating={item.rating}
            reviewCount={item.reviewCount}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />

       <View style={styles.footerContainer}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="sign-out" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1ba9ff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginHorizontal: 25, 
    paddingHorizontal: 5,
    height: 35,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginLeft: 10,
  },
  shoppingCart: {
    marginRight: 10, 
  },
  ellipsisIcon: {
    marginLeft: 5, 
  },
  notificationDot: {
    position: 'absolute', 
    top: -5, 
    right: -5, 
    width: 20, 
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1, 
    padding: 17,
    margin: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
  },
  info: {
    paddingTop: 10,
  },
  title: {
    fontSize: 17,
    textAlign: 'left', 
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  rating: {
    fontSize: 17,
    color: 'yellow',
  },
  reviewCount: {
    marginLeft: 4,
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5, 
  },
  discount: {
    fontSize: 12,
    color: 'red',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1ba9ff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default App;
