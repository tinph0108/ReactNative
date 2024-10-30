// screens/TaskScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest, deleteJobRequest } from '../redux/actions/jobActions';

const TaskScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJobRequest(id));
  };

  const handleAddJob = () => {
    navigation.navigate('AddJob', { job: null, name });
  };

  const handleEditJob = (job) => {
    navigation.navigate('AddJob', { job, name });
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => handleEditJob(item)}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteJob(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hi {name}, Have a great day ahead!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search job"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={jobs.filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderJobItem}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f8f8f8' 
  },
  headerText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#333' 
  },
  input: { 
    padding: 12, 
    borderWidth: 1, 
    borderColor: '#dcdcdc', 
    borderRadius: 8, 
    marginBottom: 20, 
    fontSize: 16, 
    backgroundColor: '#fff',
  },
  jobItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#e0e0e0', 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 10 
  },
  jobTitle: { 
    fontSize: 16, 
    color: '#333' 
  },
  editButton: { 
    backgroundColor: '#2196F3', 
    padding: 10, 
    borderRadius: 5, 
    marginRight: 5 
  },
  deleteButton: { 
    backgroundColor: '#FF5252', 
    padding: 10, 
    borderRadius: 5 
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 14 
  },
  addButton: { 
    position: 'absolute', 
    bottom: 20, 
    right: 20, 
    backgroundColor: '#0f0', 
    width: 50, 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 25 
  },
  addButtonText: { 
    fontSize: 24, 
    color: '#fff' 
  }
});

export default TaskScreen;
