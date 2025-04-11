import PercentageCalculator from "@/components/PercentageCalculator";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

const Percentage = () => {
  const navigate = useNavigation();

  useEffect(() => {
    navigate.setOptions({ headerTitle: "Percentage Calculator" });
  }, []);

  return <PercentageCalculator />;
};

export default Percentage;
