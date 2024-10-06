import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getLanguages } from './languageMenu'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Language = {
  index: number;
  languageName: string;
  flag: string;
  vocabWords: any[]; // You can create a type for vocabWords if necessary
};

type RootStackParamList = {
  Home: undefined;
  VocabScreen: { languageName: string; vocabWords: any[] };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const languages = getLanguages();

  const handlePress = (languageName: string, vocabWords: any[]) => {
    navigation.navigate('VocabScreen', { languageName, vocabWords });
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.header}>Language Vocab Learner</Text>
        <Text style={styles.subheader}>Which language would you like to learn?</Text>
        <ScrollView contentContainerStyle={styles.languageList} showsVerticalScrollIndicator={false}>
          {languages.map((language: Language) => (
            <TouchableOpacity
              key={language.index}
              style={styles.languageButton}
              onPress={() => handlePress(language.languageName, language.vocabWords)}
            >
              <Image source={{ uri: language.flag }} style={styles.flag} resizeMode="contain" />
              <Text style={styles.languageText}>{language.languageName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  header: {
    fontSize: 40,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    marginTop: 40,
    textAlign: "center",
  },
  languageList: {
    alignItems: "center",
    paddingVertical: 20,
  },
  languageButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  flag: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  languageText: {
    fontSize: 20,
    textAlign: "center",
  },
});
