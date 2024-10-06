import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type VocabWord = {
  original: string;
  english: string;
};

// Define a type for your route parameters
type VocabScreenRouteProp = RouteProp<{ VocabScreen: { languageName: string; vocabWords: VocabWord[] } }, 'VocabScreen'>;

// Define your component props
type Props = {
  route: VocabScreenRouteProp;
};

export default function VocabScreen({ route }: Props) {
  const { languageName, vocabWords } = route.params;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>{languageName} Vocabulary</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {vocabWords.map((word, index) => (
            <View key={index} style={styles.vocabItem}>
              <Text style={styles.original}>{word.original}</Text>
              <Text style={styles.english}>{word.english}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  vocabItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  original: {
    fontSize: 20,
  },
  english: {
    fontSize: 18,
    color: 'gray',
  },
  scrollContainer: {
    paddingBottom: 16, // Add padding if needed
  },
});
