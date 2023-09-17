import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Her kommer listen af tennis- og padel klubber i Danmark 
const tennisClubs = [
  { id: 1, name: "Hillerød Tennis & Padel Club" },
  { id: 2, name: "Hørsholm Rungsted Tennis Club " },
  { id: 3, name: "Lyngby Tennis Club" },
  { id: 4, name: "Padel Yard Reffen" },
  { id: 5, name: "HIK Tennis Club" },
  { id: 6, name: "Padelpadel Copenhagen" },
  { id: 7, name: "Racket Club Dragør" },
  { id: 8, name: "Match Padel CPH" },
  { id: 9, name: "Vamoz Padel Fields" },
  { id: 10, name: "ProPadel" },
  { id: 11, name: "Racket Club Terminalerne" },
  { id: 12, name: "Gladsaxe Tennis & Padel Club" },
  { id: 13, name: "XPadel" },
  { id: 14, name: "Padel Danmark" },
  { id: 15, name: "Holbæk Tennis & Padel Club" },
  { id: 16, name: "We Are Padel Ringsted" },
  { id: 17, name: "TIK Tennis" },
  { id: 18, name: "Vallensbæk Tennis & Padel Club" },
  { id: 19, name: "WeDoPadel" },
  { id: 20, name: "Maribo Hallerne" },
];

// Her defineres funktionen ved brug af FlatList for at vise den ovenstående definerede liste af klubber
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tennis and Padel Clubs in Denmark</Text>
      <FlatList
        data={tennisClubs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.clubContainer}>
            <Text style={styles.clubName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Lokal styling af HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  clubContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  clubName: {
    fontSize: 18,
  },
});

// Her eksporteres HomeScreen
export default HomeScreen;
