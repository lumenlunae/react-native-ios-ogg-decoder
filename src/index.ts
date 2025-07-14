// Reexport the native module. On web, it will be resolved to RNiOSOggDecoderModule.web.ts
// and on native platforms to RNiOSOggDecoderModule.ts
import RNiOSOggDecoderModule from "./RNiOSOggDecoderModule";
import * as FileSystem from "expo-file-system";

function generateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    let r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function decodeOgg(
  sourceUri: string
): Promise<string | undefined> {
  const guid = generateGuid();
  const sourcePath = `${FileSystem.cacheDirectory}/tmp-${guid}.ogg`;
  const destPath = `${FileSystem.cacheDirectory}/tmp-${guid}.wav`;
  try {
    await FileSystem.downloadAsync(sourceUri, sourcePath);
    return RNiOSOggDecoderModule.decode(sourcePath, destPath);
  } catch (e) {
    console.error("Error decoding OGG file:", e);
    return undefined;
  }
}
