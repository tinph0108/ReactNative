import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Modal, Button, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TaskScreen = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTasks(); 
    });
    return unsubscribe;
  }, [navigation]);

  const handleAddTask = async () => {
    if (newTask.trim() === '') return;

    const newTaskObject = { title: newTask };

    try {
      const response = await fetch('https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTaskObject),
      });

      if (response.ok) {
        const addedTask = await response.json();
        setTasks([...tasks, addedTask]);
        setNewTask('');
        setModalVisible(false);
      } else {
        console.error('Failed to add new task:', response.status);
        Alert.alert('Error', 'Failed to add new task.');
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Alert.alert('Error', 'Something went wrong while adding the task.');
    }
  };

  const handleEditTask = async () => {
    if (newTask.trim() === '') return;

    const updatedTask = { title: newTask };

    try {
      const response = await fetch(`https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task/${taskToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTaskFromApi = await response.json();
        setTasks(tasks.map(task => (task.id === taskToEdit.id ? updatedTaskFromApi : task)));
        setNewTask('');
        setTaskToEdit(null);
        setEditMode(false);
        setModalVisible(false);
      } else {
        console.error('Failed to edit task:', response.status);
        Alert.alert('Error', 'Failed to edit task.');
      }
    } catch (error) {
      console.error("Error editing task:", error);
      Alert.alert('Error', 'Something went wrong while editing the task.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== taskId));
      } else {
        console.error('Failed to delete task:', response.status);
        Alert.alert('Error', 'Failed to delete task.');
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      Alert.alert('Error', 'Something went wrong while deleting the task.');
    }
  };

  const openEditModal = (task) => {
    setNewTask(task.title);
    setTaskToEdit(task);
    setEditMode(true);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#00CFFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <FontAwesome name="check-square" size={20} color="green" />
            <Text style={styles.taskText}>{item.title}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => openEditModal(item)}>
                <FontAwesome name="pencil" size={20} color="red" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <FontAwesome name="trash" size={20} color="gray" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddJob')} // Điều hướng tới AddJobScreen
      >
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Enter task title"
            style={styles.modalInput}
            value={newTask}
            onChangeText={setNewTask}
          />
          <Button title={editMode ? "Save Task" : "Add Task"} onPress={editMode ? handleEditTask : handleAddTask} />
          <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 40,
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
  iconContainer: {
    flexDirection: 'row',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00CFFF',
    borderRadius: 50,
    padding: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInput: {
    backgroundColor: 'white',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  }
});

export default TaskScreen;
