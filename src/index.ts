import { NitroModules } from 'react-native-nitro-modules'
import type { IosOggDecoder as IosOggDecoderSpec } from './specs/ios-ogg-decoder.nitro'

export const IosOggDecoder =
  NitroModules.createHybridObject<IosOggDecoderSpec>('IosOggDecoder')