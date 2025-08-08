import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { decodeOgg } from 'react-native-ios-ogg-decoder';

function App(): React.JSX.Element {
  const [testDecoder, setTestDecoder] = useState<string | undefined>(undefined);
  useEffect(() => {
    decodeOgg('https://filesamples.com/samples/audio/ogg/sample4.ogg').then(
      setTestDecoder,
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{testDecoder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'green',
  },
});

export default App;
