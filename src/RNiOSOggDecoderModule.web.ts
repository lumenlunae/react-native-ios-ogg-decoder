import { registerWebModule, NativeModule } from "expo";

class RNiOSOggDecoderModule extends NativeModule {
  decode(sourcePath: string, destPath: string): Promise<string | undefined> {
    return Promise.resolve(undefined);
  }
}

export default registerWebModule(
  RNiOSOggDecoderModule,
  "RNiOSOggDecoderModule"
);
