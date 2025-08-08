#include <jni.h>
#include "IosOggDecoderOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::iosoggdecoder::initialize(vm);
}
