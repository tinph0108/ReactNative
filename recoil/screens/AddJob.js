// screen/AddJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { jobListState } from '../recoil/jobAtom';
import axios from 'axios';

const AddJob = ({ route, navigation }) => {
  const { job, name } = route.params;
  const [jobTitle, setJobTitle] = useState(job ? job.title : '');
  const [jobs, setJobs] = useRecoilState(jobListState);

  const handleFinish = async () => {
    if (job) {
      await axios.put(`https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job/${job.id}`, { title: jobTitle });
      setJobs(jobs.map((j) => (j.id === job.id ? { ...j, title: jobTitle } : j)));
    } else {
      const response = await axios.post('https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job', { title: jobTitle });
      setJobs([...jobs, response.data]);
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
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default AddJob;
