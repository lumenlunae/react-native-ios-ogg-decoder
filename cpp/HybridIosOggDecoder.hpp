#pragma once
#include <vector>
#include "HybridIosOggDecoderSpec.hpp"

namespace margelo::nitro::iosoggdecoder
{
    class HybridIosOggDecoder : public HybridIosOggDecoderSpec
    {
    public:
        HybridIosOggDecoder() : HybridObject(TAG), HybridIosOggDecoderSpec() {}

        std::shared_ptr<Promise<std::optional<std::string>>> decode(const std::string &sourcePath, const std::string &destPath) override;
    };
} // namespace margelo::nitro::iosoggdecoder
