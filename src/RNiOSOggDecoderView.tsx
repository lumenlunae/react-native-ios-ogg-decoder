import { requireNativeView } from 'expo';
import * as React from 'react';

import { RNiOSOggDecoderViewProps } from './RNiOSOggDecoder.types';

const NativeView: React.ComponentType<RNiOSOggDecoderViewProps> =
  requireNativeView('RNiOSOggDecoder');

export default function RNiOSOggDecoderView(props: RNiOSOggDecoderViewProps) {
  return <NativeView {...props} />;
}
