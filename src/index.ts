// Reexport the native module. On web, it will be resolved to RNiOSOggDecoderModule.web.ts
// and on native platforms to RNiOSOggDecoderModule.ts
export { default } from './RNiOSOggDecoderModule';
export { default as RNiOSOggDecoderView } from './RNiOSOggDecoderView';
export * from  './RNiOSOggDecoder.types';
