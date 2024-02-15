
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';


const App = () => {

  const [first, setFirstInput] = useState("");
  const [second, setSecondInput] = useState("");
  const [theoperator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  //Color state for + operator
  const [Buttoncolorplus, setButtoncolorplus] = useState('#FF9D00');
  const [Textcolorplus, setTextcolorplus] = useState("#fff");
  //Color state for - operator
  const [Buttoncolorminus, setButtoncolorminus] = useState('#FF9D00');
  const [Textcolorminus, setTextcolorminus] = useState("#fff");
  //Color state for * operator
  const [Buttoncolorproduct, setButtoncolorproduct] = useState('#FF9D00');
  const [Textcolorproduct, setTextcolorproduct] = useState("#fff");
  //Color state for / operator
  const [Buttoncolordivide, setButtoncolordivide] = useState('#FF9D00');
  const [Textcolordivide, setTextcolordivide] = useState("#fff");

  //Function for resetting states
  const clear = () => {
    setFirstInput("");
    setSecondInput("");
    setOperator("");
    setButtoncolorplus('#FF9D00');
    setButtoncolorminus('#FF9D00');
    setButtoncolorproduct('#FF9D00');
    setButtoncolordivide('#FF9D00');
    setTextcolorplus("#fff");
    setTextcolorminus("#fff");
    setTextcolorproduct("#fff");
    setTextcolordivide("#fff");
    setResult(0);
  }

  //Function for clearing states except result state
  const semiClear = () => {
    setFirstInput("");
    setSecondInput("");
    setOperator("");
  }

  //Function for handling user input including digits
  const handleInput = (value: string) => {
    setButtoncolorplus('#FF9D00');
    setButtoncolorminus('#FF9D00');
    setButtoncolorproduct('#FF9D00');
    setButtoncolordivide('#FF9D00');

    setTextcolorplus("#fff");
    setTextcolorminus("#fff");
    setTextcolorproduct("#fff");
    setTextcolordivide("#fff");

    if (first.length < 9) {
      setFirstInput(first + value);
    }
  }

  //Function for storing given operators
  const storeOperation = (operator: string) => {
    switch (operator) {
      case "+":
        setButtoncolorplus("#fff");
        setTextcolorplus('#FF9D00');
        break;
      case "-":
        setButtoncolorminus("#fff");
        setTextcolorminus('#FF9D00');
        break;
      case "*":
        setButtoncolorproduct("#fff");
        setTextcolorproduct('#FF9D00');
        break;
      case "/":
        setButtoncolordivide("#fff");
        setTextcolordivide('#FF9D00');
        break;
      default:
        setButtoncolorplus('#FF9D00');
        setButtoncolorminus('#FF9D00');
        setButtoncolorproduct('#FF9D00');
        setButtoncolordivide('#FF9D00');

        setTextcolorplus("#fff");
        setTextcolorminus("#fff");
        setTextcolorproduct("#fff");
        setTextcolordivide("#fff");
        break;
    }

    setOperator(operator);
    if (second.length !== 0) {
      console.log("you can only make 1 operation at a time");
      console.log("resetting the machine");
      clear();
    }
    else if (first.length !== 0) {
      setResult(0);
      setSecondInput(first);
      setFirstInput("");
    }
    else if (result !== 0) {
      setSecondInput(result.toString())
    }
    else {
      setSecondInput(first);
      setFirstInput("");
    }
  }

  const calculate = () => {
    switch (theoperator) {
      case "+":
        semiClear();
        setResult(parseFloat(second) + parseFloat(first));

        break;
      case "-":
        semiClear();
        setResult(parseFloat(second) - parseFloat(first));

        break;
      case "*":
        semiClear();
        setResult(parseFloat(second) * parseFloat(first));

        break;
      case "/":
        if (parseFloat(first) == 0) {
          clear();
          console.log("Err:0");
          break;
        }
        semiClear();
        setResult(parseFloat(second) / parseFloat(first));

        break;
      case "%":
        semiClear();
        setResult(parseFloat(second) % parseFloat(first));

        break;
      default:
        clear();
        break;
    }
  }


  const DisplayFirst = () => {

    if (first.length !== 0) {
      return (<Text style={{ color: "#ddd", fontSize: 30 }}>{second + theoperator + first}</Text>);
    }
    else if (second.length !== 0 && first.length === 0) {
      return (<Text style={{ color: "#ddd", fontSize: 30 }}>{second + theoperator + first}</Text>);
    }
  }
  const DisplayResult = () => {
    return (
      <Text style={{ color: "white" }}> = {result.toString().substring(0, 5)} </Text>
    );
  }
  return (
    <View style={styles.container}>

      {/* <Text style={styles.display}>{input}</Text>
      
      */}




      <View>
        {DisplayFirst()}
      </View>



      <Text style={[{ fontSize: 60 }, { color: "white", marginBottom: 30 }]}> = {result.toString().substring(0, 9)} </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ccc" }]} onPress={() => clear()}>
          <Text style={[styles.buttonText, { color: "#000" }]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ccc" }]} onPress={() => setResult(result / 2.0)}>
          <Text style={[styles.buttonText, { color: "#000" }]}>½</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ccc" }]} onPress={() => storeOperation('%')}>
          <Text style={[styles.buttonText, { color: "#000" }]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonOperator, { backgroundColor: Buttoncolordivide }]} onPress={() => storeOperation('/')} >
          <Text style={[styles.buttonOperatorText, { color: Textcolordivide }]}>/</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonOperator, { backgroundColor: Buttoncolorproduct }]} onPress={() => storeOperation('*')} >
          <Text style={[styles.buttonOperatorText, { color: Textcolorproduct }]}>x</Text>
        </TouchableOpacity>
      </View>




      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonOperator, { backgroundColor: Buttoncolorminus }]} onPress={() => storeOperation('-')} >
          <Text style={[styles.buttonOperatorText, { color: Textcolorminus }]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPressIn={() => handleInput('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonOperator, { backgroundColor: Buttoncolorplus }]} onPress={() => storeOperation('+')} >
          <Text style={[styles.buttonOperatorText, { color: Textcolorplus }]}>+</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { width: 155 }]} onPress={() => handleInput('0')}>
          <Text style={[styles.buttonText, { right: 40 }]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput('.')}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => calculate()}>
          <Text style={styles.buttonOperatorText}>=</Text>
        </TouchableOpacity>
      </View>



    </View>


  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  textStyle: {
    fontSize: 40,
    color: "white",
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonRow: {

    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    color: "#fff",
    margin: 7,
    borderRadius: 50,
  },


  buttonText: {
    fontSize: 50,
    color: "#fff",
  },

  buttonOperator: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9D00',
    margin: 5,
    borderRadius: 50,
  },

  buttonOperatorText: {
    color: "#fff",
    fontSize: 40,
  }


}
);

export default App;



