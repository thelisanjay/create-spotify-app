import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface ServiceItem {
  id: string;
  name: string;
}

const serviceData: ServiceItem[] = [
  { id: '1', name: 'TV' },
  { id: '2', name: 'Audio' },
  { id: '3', name: 'Computers' },
];

const LandingPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title} type="title">Electronic Services</ThemedText>
      <FlatList
        data={serviceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ThemedText style={styles.itemText} >{item.name}</ThemedText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 20,
    color:"black"
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  itemText: {
    fontSize: 18,
  },
});

export default LandingPage;