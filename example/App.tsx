import { decodeOgg } from "react-native-ios-ogg-decoder";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [decodedResult, setDecodedResult] = useState<string | undefined>();
  useEffect(() => {
    decodeOgg("https://filesamples.com/samples/audio/ogg/sample4.ogg").then(
      setDecodedResult
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Functions">
          <Text>{decodedResult}</Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
};
