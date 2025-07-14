import { NativeModule, requireNativeModule } from 'expo';

import { RNiOSOggDecoderModuleEvents } from './RNiOSOggDecoder.types';

declare class RNiOSOggDecoderModule extends NativeModule<RNiOSOggDecoderModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RNiOSOggDecoderModule>('RNiOSOggDecoder');
