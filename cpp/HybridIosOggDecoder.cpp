#include "HybridIosOggDecoder.hpp"
#include "oggHelper.h"

namespace margelo::nitro::iosoggdecoder
{

std::shared_ptr<Promise<std::optional<std::string>>> HybridIosOggDecoder::decode(const std::string &sourcePath, const std::string &destPath)
{
    // Implementation of the decode method
    // This is a placeholder; actual decoding logic should be implemented here.
    return Promise<std::optional<std::string>>::async([=]()
                                                      {
        // Simulate some asynchronous work
        oggHelper helper;
        const char * fileNameIn = sourcePath.c_str();
        const char * fileNameOut = destPath.c_str();
        bool output = helper.decode(fileNameIn, fileNameOut);
        // Return the result
        if (output == true) {
            return std::make_optional<std::string>(destPath);
        } else {
            return std::make_optional<std::string>(nullptr);
        }
    });
}

} // namespace margelo::nitro::iosoggdecoder
