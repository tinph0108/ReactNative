// screens/AddJob.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { createJobRequest, updateJobRequest } from '../redux/actions/jobActions';

const AddJob = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { job, name } = route.params;
  const [jobTitle, setJobTitle] = useState(job ? job.title : '');

  const handleFinish = () => {
    if (job) {
      // Nếu có job thì gọi action cập nhật công việc
      dispatch(updateJobRequest(job.id, jobTitle));
    } else {
      // Nếu không có job thì gọi action tạo công việc mới
      dispatch(createJobRequest(jobTitle));
    }
    navigation.navigate('TaskScreen', { name });
  };

  return (
    <View style={styles.container}>
      <Text>Hi {name}, {job ? 'Edit your job' : 'Add a new job'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { padding: 10, borderWidth: 1, marginBottom: 20 },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AddJob;
