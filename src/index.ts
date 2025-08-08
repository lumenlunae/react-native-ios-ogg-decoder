import { NitroModules } from 'react-native-nitro-modules'
import NitroFS from 'react-native-nitro-fs'
import type { IosOggDecoder as IosOggDecoderSpec } from './specs/ios-ogg-decoder.nitro'

function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    let r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const IosOggDecoder =
  NitroModules.createHybridObject<IosOggDecoderSpec>('IosOggDecoder')

export async function decodeOgg(
  sourceUri: string
): Promise<string | undefined> {
  const guid = generateGuid()
  const sourcePath = `${NitroFS.CACHE_DIR}/tmp-${guid}.ogg`
  const destPath = `${NitroFS.CACHE_DIR}/tmp-${guid}.wav`
  try {
    await NitroFS.downloadFile(sourceUri, sourcePath)
    return IosOggDecoder.decode(sourcePath, destPath)
  } catch (e) {
    console.error('Error decoding OGG file:', e)
    return undefined
  }
}
