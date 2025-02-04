import { StyleSheet, View, TextInput, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {

  return (
    <View style={[styles.container]}>
      <TextInput keyboardType='email-address' placeholder='Email' style={[styles.inputContainer]} />
      <TextInput placeholder='Username' style={[styles.inputContainer]} />
      <TextInput secureTextEntry placeholder='Password' style={[styles.inputContainer]} />
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <Button title='Submit' color={'black'} onPress={() => console.log('Sumitted')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginTop: 100,

  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'skyblue',
    borderCurve: 'continuous',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
