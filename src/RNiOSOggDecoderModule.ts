import { NativeModule, requireNativeModule } from "expo";

declare class RNiOSOggDecoderModule extends NativeModule {
  decode(sourcePath: string, destPath: string): Promise<string | undefined>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RNiOSOggDecoderModule>("RNiOSOggDecoder");
