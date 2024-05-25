import { DarkTheme } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";

export default function HomeScreen() {
  const [valor, setValor] = useState("");
  function numero(operacao: string) {
    const atual = valor + "" + operacao;
    console.log(atual);
    setValor(atual);
  }

  function limpar() {
    setValor("");
  }

  function calcular() {
    const resultado = eval(valor);
    setValor(resultado);
  }

  return (
    <View style={styles.calculadora}>

      <View style={styles.tela}>
      <Text style={styles.telaTexto}> {valor} 2 + 2 = 5 </Text>
      </View>

      <View style={styles.calculadoraBotoes}>
      <View style={styles.operadores}>
        <Pressable style={styles.button} onPress={() => numero("+")}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("-")}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("/")}>
          <Text style={styles.text}>/</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("*")}>
          <Text style={styles.text}>*</Text>
        </Pressable>
      </View>

      <View style={styles.botoesNumeros}>
      <Pressable style={styles.button} onPress={() => numero("1")}>
          <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("2")}>
          <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("3")}>
          <Text style={styles.text}>3</Text>
        </Pressable>
      </View>

      <View style={styles.botoesNumeros}>
      <Pressable style={styles.button} onPress={() => numero("4")}>
          <Text style={styles.text}>4</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("5")}>
          <Text style={styles.text}>5</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("6")}>
          <Text style={styles.text}>6</Text>
        </Pressable>
      </View>

      <View style={styles.botoesNumeros}>
      <Pressable style={styles.button} onPress={() => numero("7")}>
          <Text style={styles.text}>7</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("8")}>
          <Text style={styles.text}>8</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("9")}>
          <Text style={styles.text}>9</Text>
        </Pressable>
      </View>

      <View style={styles.botoesNumeros}>
      <Pressable style={styles.button} onPress={() => numero("1")}>
          <Text style={styles.text}>0</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => numero("2")}>
          <Text style={styles.text}>.</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => limpar()}>
          <Text style={styles.text}>CA</Text>
        </Pressable>
      </View>

      <View style={styles.botaoIgual}>
      <Pressable style={styles.button} onPress={() => calcular()}>
          <Text style={styles.text}>=</Text>
      </Pressable>

       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculadora: {
    backgroundColor: "#282f3b",
  },
  tela: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    minHeight: 300,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  telaTexto: {
    margin: 10,
    fontSize: 25,
    color: 'black'
  },
  calculadoraBotoes: {
    width: 400,
    minHeight: 550
  },
  operadores: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "auto",
    minHeight: 80,
  },
  botoesNumeros: {
    width: '100%',
    minHeight: 90,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  botaoIgual: {
    display: "flex",
    width: "auto",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexGrow: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#282f3b",
  },
  text: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
});
