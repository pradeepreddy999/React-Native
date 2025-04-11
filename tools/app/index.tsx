import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Link href="/percentage-calculator">Percentage Calculator</Link>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
