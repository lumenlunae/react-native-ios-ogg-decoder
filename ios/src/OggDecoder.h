//
//  OggDecoder.h
//  
//
//  Created by Arkadiusz Pituła on 10/04/2022.
//

#ifndef OggDecoder_h
#define OggDecoder_h

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN


@interface OggDecoder : NSObject

- (bool)decode:(NSString *)sourcePath destPath:(NSString *)destPath;

@end

NS_ASSUME_NONNULL_END

#endif /* OggDecoder_h */
