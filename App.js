import React from "react";
import Home from "./src/telas/Home/index"
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return <SafeAreaView style={styles.tela}>
    <Home />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  tela:{
    flex: 1
  }
})