import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Her kommer listen af muligheder for partnere i Danmark 
const tennisPlayers = [
  { id: 1, name: "Nina Vicic, Hørsholm Rungsted Tennis Club" },
  { id: 2, name: "Katrine Refsgaard, HIK Tennis Club" },
  { id: 3, name: "Joachim Malmstrøm, Lyngby Tennis Club" },
  { id: 4, name: "Sebastian Gadsbøll, Ishøj Tennis Club" },
  { id: 5, name: "Pernille Høpfner, PadelFun4All" },
  { id: 6, name: "Silas Canger, Hedehusene Tennis Club" },
  { id: 7, name: "Jonatan Katz, Not a Club Member" },
  { id: 8, name: "Mette Nielsen, Match Padel CPH" },
  { id: 9, name: "Ramirez Fernando, Vamoz Padel Fields" },
  { id: 10, name: "Brad Pitt, Not a Club Member" },
  { id: 11, name: "Boris, Racket Club Terminalerne" },
  { id: 12, name: "Cathrine Alkestrup, Gladsaxe Tennis & Padel Club" },
  { id: 13, name: "Kim Hansen, XPadel" },
  { id: 14, name: "Holger Rune, Padel Danmark" },
  { id: 15, name: "Clara Tauson, Holbæk Tennis & Padel Club" },
  { id: 16, name: "Morgan Templer, We Are Padel Ringsted" },
  { id: 17, name: "Martha Stemann, TIK Tennis" },
  { id: 18, name: "Victor Hansen, Vallensbæk Tennis & Padel Club" },
  { id: 19, name: "Betinna Jensen, WeDoPadel" },
  { id: 20, name: "Carsten Ørvad, Maribo Hallerne" },
];

// Her kommer funktionen for ScreenOne i form af ne FlatList, hvori man får givet en liste af forskellige tennis- og padel spillere
function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find partner</Text>
      <FlatList
        data={tennisPlayers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.playerContainer}>
            <Text style={styles.playerName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Her ses lokal styling af ScreenOne
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
  playerContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  playerName: {
    fontSize: 18,
  },
});

// Her eksporteres ScreenOne
export default ScreenOne;
