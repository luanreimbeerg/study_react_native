import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type ParticpantProps = {
  name: string;
  onRemove: () => void;
};

export function Particpant(props: ParticpantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
