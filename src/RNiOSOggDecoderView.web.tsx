import * as React from 'react';

import { RNiOSOggDecoderViewProps } from './RNiOSOggDecoder.types';

export default function RNiOSOggDecoderView(props: RNiOSOggDecoderViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
