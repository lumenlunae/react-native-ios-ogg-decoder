import { type HybridObject } from 'react-native-nitro-modules'

export interface IosOggDecoder extends HybridObject<{ ios: 'c++' }> {
  decode(sourcePath: string, destPath: string): Promise<string | undefined>
}
