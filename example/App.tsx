import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IosOggDecoder } from 'react-native-ios-ogg-decoder';

function App(): React.JSX.Element {
  const [testDecoder, setTestDecoder] = useState<string | undefined>(undefined);
  useEffect(() => {
    const decode = async () => {
      try {
        const result = await IosOggDecoder.decode(
          'path/to/source.ogg',
          'path/to/destination.wav',
        );
        setTestDecoder(result);
      } catch (error) {
        console.error('Decoding failed:', error);
      }
    };
    decode();
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
