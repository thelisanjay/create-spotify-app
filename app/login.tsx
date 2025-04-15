import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    router.replace('/landing');
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title} type="title">
        Login
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#a0a0a0"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleSubmit} color="#0a7ea4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
});

export default LoginPage;