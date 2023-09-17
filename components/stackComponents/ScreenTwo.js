import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Her ses funktionen for profile settings i ScreenTwo
function ScreenTwo() {
  const [name, setName] = useState("Nina Vicic");
  const [email, setEmail] = useState("nina@gmail.com");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [tennisClub, setTennisClub] = useState("");
  const [ranking, setRanking] = useState("");

  const handleSave = () => {
    // Her forekommer implementeringslogikken for at gemme profile settings.
    // Heruodver er 'picker' installeret, hvori man kan vælge i en af kategorierne. 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
    console.log("Age:", age);
    console.log("Tennis Club:", tennisClub);
    console.log("Ranking:", ranking);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>

        <Text style={styles.heading}>Profile Settings</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tennis Club"
        value={tennisClub}
        onChangeText={(text) => setTennisClub(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ranking"
        value={ranking}
        onChangeText={(text) => setRanking(text)}
      />
<Button title="Save" onPress={handleSave} />
    </View>
  );
}


// Her kommer lokal styling for ScreenTwo 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    fontSize: 10,
    paddingVertical: 8,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

});

// Her eksporteres ScreenTwo
export default ScreenTwo;
