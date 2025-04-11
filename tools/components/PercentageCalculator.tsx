import { useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const PercentageCalculator = () => {
  const [pastValue, setPastValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const [percentageChange, setPercentageChange] = useState<null | number>(null);

  const handlePercentageCalculation = () => {
    let p_val = parseFloat(pastValue.trim());
    let c_val = parseFloat(currentValue.trim());

    if (isNaN(p_val) || isNaN(c_val)) {
      setPercentageChange(null);
      return;
    }

    let perc_change = ((c_val - p_val) / p_val) * 100;
    setPercentageChange(parseFloat(perc_change.toFixed(2)));
  };

  return (
    <SafeAreaView style={styles.container}>
      {percentageChange && (
        <View style={{ paddingBottom: 10 }}>
          <Text style={{ fontSize: 15 }}>
            Percentage Change :{" "}
            <Text style={{ fontWeight: "bold" }}>{percentageChange} %</Text>
          </Text>
        </View>
      )}
      <View style={styles.valueContainer}>
        <Text>Past Value : </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={pastValue}
          // onChangeText={setPastValue}
          onChangeText={(p) => {
            setPastValue(p);
            if (isNaN(parseFloat(p))) setPercentageChange(null);
          }}
        />
      </View>
      <View style={styles.valueContainer}>
        <Text>Current Value : </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={currentValue}
          // onChangeText={setCurrentValue}
          onChangeText={(c) => {
            setCurrentValue(c);
            if (isNaN(parseFloat(c))) setPercentageChange(null);
          }}
        />
      </View>
      <Pressable onPress={handlePercentageCalculation} style={styles.button}>
        <Text style={styles.buttonText}>Calculate</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PercentageCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    paddingBottom: 10,
    justifyContent: "flex-end",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "gray",
    padding: 5,
    height: 30,
    width: 150,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 5,
    borderRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    color: "#fff",
  },
});
