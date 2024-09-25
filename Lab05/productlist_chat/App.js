import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
    image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'LTD Food',
    image: 'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGSVCRBM-OyR5ykjE0~Jz6EwVb65SzPI9Yzn6LEgzHCOThAvjOOfReEgYW1hiv0MzzYMpYm3m~KURCx0OdveAsj2mhnnOz1C-yuSNAz-JFpaAHvAOiFMy7oil98VudQWNR60YvwOaJBmnaQEepxcUwCC4efWXypp5YldhE8RzeIWUlr4MgrcSADBtEmjxFcQvAMTP18o7MNQenlfK9aSryPmm1tg0kqgDUFXq~VSl5QX1hLx5pVSM4Rja9X7Q22lhpEo832yWox~M6C6Y2j8PN6BEmsvtWQ~TTb0eE0TwKw2FtrsVu6CL5NljJ0WgLvqt394jxGCSH92~zAfYcSUUg__',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngVv61KvYLuwfDqXVB~9pWl3vzTyjSk5qqO9BW73xl-zTYkL7d73C1-QF5bw5zQqU0d-MJGpt7iXezrH0sgqWVRXYN-RtR5ELhWh5DzdC8xkvMFJ7ReNyyNeU-xwfF3r-x-tQ-8NkI9nBDeqrKcQUuTwpyJODimt6Eyd-jyp9M9cew92UjtBNmXH85t1zbNX~HPfHTr643qx6KT1IPRtQH-Q1kGOQdFjjML71A9EKqKR3ncFmK-JrPXANbkP9Itn9laAg0qm8oUUqGPuvXWYZbbLSCoG~EeObFOSSzbxl5S3QMqb0Lnuv2TtFWmT7pC-hg2D-4ZoTiCqoqJdAR97vQ__',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    image: 'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1vzvKjBJRPkyPrN~d7yaEUl~XfmwH4SFswQm0XlPNmVE77MOQ~ZVJUf3QJzq6F6elJFtXf6GjQUdjFeYJA0PS4XdfkIfdxcKj5zSt-Isf6JItVjMbZzP0OEuk9Yk4TpYRN-tsrKk6VmT8mQ0I7ywPb2HSoVOrR4X-3SFzhuxc2Rz0egnk~CAZRdKBuE5QqYGdbNNL3-g8WhxZvZGwg99Jj9AcpiiglSgfy~FXZCBGNPSq-QGMTr5ndu1jSscTYmpIqs3rvFrOUsVjI~KIeiquMkBxlMN9hU-m7abQ4Of5c8Pi1VExqwQpqhlBbja~dBq47-Ku~Qrb0p6-nQhPnpQw__',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
    image: 'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXbqaFt2pvUo5DNAia~PINg5s8BE2xrLD6p~zeMjjD8zvAw-eo~B71pJ1ToMIsHdcSwpmGFetI2FgvbVGZEjZrd~FQ2ePhkWzHloW5G2HE8f3vW6s6TeTo~ZbHIf8ElbQr2H~4-MOutqwmYfz9zPnHKLtnNiJEipmN9KYo1b9rIlK3o3cc16k9wm-FaRWHHPrSzyAkQ-DFwOdOVAfi~gfpvSnr6hkywxrP9De~Oux9EPmlyU9RcvqPE9uO8O6RVgxg02Y4I4PkEowXW0xJWQpeUGDRuBeH~YDZe9BVC~TODvuG3lVMiTVLfP8l9cPArA0YNZVzhtfHnAY1NsCk6pPA__',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    image: 'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jAXIrKI2oXPQjv1QPcrPEouZAfPVHPeu~F69yN71iTvuT3AvfDZeRIC1WhIayK5lUt7bd6b3a-h7cROoLIQnZdDRacmbCQUVTiAP9loC5hZRatZ9muLcPs5YUN0Kfj9QTcwq8l-oFnIkT4PwXW97B-z8BDOcMDBnRBHTiY3C31XWXi5AhJcu~3znYWEHqd63Kfg8PYmQjjz4jPvu6y3fmnod-TaIFrSfEvn0cmMWSUjMpS2w2-3HCq29fTZ0Rq9QxmlL4ucY~pMJQgMvXX~cvp980ka~zOLmpvYmeOUR0MFdeyBmq9YvMoJLyHhHbI4v8Ymke9PNxxdY25ErPXJQDQ__',
  },
   {
    id: '7',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://picsum.photos/200',
  },
   {
    id: '8',
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    image: 'https://picsum.photos/200',
  },
   {
    id: '9',
    name: 'Hiểu lòng con trẻ',
    shop: 'Long Book',
    image: 'https://picsum.photos/200',
  },
   {
    id: '10',
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    image: 'https://picsum.photos/200',
  },

];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>Shop: {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/48/000000/left.png' }} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/48/000000/shopping-cart.png' }} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    <Text style={styles.infoText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
      </Text>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.productList}
      />

      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/48/000000/menu.png' }} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/48/000000/home.png' }} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/48/000000/exit.png' }} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00ADEF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 50, 
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
  },
  productList: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#FFF',
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 20,
    color: '#333',
  },
  shopName: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00ADEF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 3, 
    paddingBottom: 20
  },
   infoText: {
    fontSize: 16,
    marginVertical: 10, 
    paddingHorizontal: 20,
    backgroundColor: 'none'
  },
});

export default App;
