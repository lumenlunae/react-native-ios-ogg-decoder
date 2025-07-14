#import "OggDecoder.h"
#import "oggHelper.h"
@implementation OggDecoder

- (bool)decode:(NSString *)sourcePath destPath:(NSString *)destPath {
  // Implement the decoding logic here
    oggHelper helper;
    
    const char *fileNameIn = [sourcePath UTF8String];
    const char *filenameOut = [destPath UTF8String];
    
    bool output = helper.decode(fileNameIn, filenameOut);
    return output;
}

@end
