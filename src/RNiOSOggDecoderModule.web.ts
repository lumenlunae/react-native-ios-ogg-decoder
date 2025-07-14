import { registerWebModule, NativeModule } from 'expo';

import { RNiOSOggDecoderModuleEvents } from './RNiOSOggDecoder.types';

class RNiOSOggDecoderModule extends NativeModule<RNiOSOggDecoderModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(RNiOSOggDecoderModule, 'RNiOSOggDecoderModule');
