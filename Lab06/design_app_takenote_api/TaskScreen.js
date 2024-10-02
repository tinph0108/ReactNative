import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]); // Dùng để lưu danh sách tasks
  const [loading, setLoading] = useState(true); // Dùng để kiểm tra trạng thái loading

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task');
        const data = await response.json();
        setTasks(data); // Cập nhật dữ liệu tasks từ API
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Tắt trạng thái loading
      }
    };

    fetchTasks(); // Gọi hàm lấy dữ liệu khi component được render lần đầu
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#00CFFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
        />
        <View>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <FontAwesome name="check-square" size={20} color="green" />
            <Text style={styles.taskText}>{item.title}</Text>
            <FontAwesome name="pencil" size={20} color="red" />
          </View>
        )}
      />

      {/* Add Task Button */}
      <TouchableOpacity style={styles.addButton}>
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 12,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00CFFF',
    borderRadius: 50,
    padding: 20,
  },
});

export default TaskScreen;
