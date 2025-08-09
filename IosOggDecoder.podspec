require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "IosOggDecoder"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => min_ios_version_supported, :visionos => 1.0 }
  s.source       = { :git => "https://github.com/matt/react-native-ios-ogg-decoder.git", :tag => "#{s.version}" }

  s.source_files = [
    # Implementation (Swift)
    "ios/**/*.{swift}",
    # Autolinking/Registration (Objective-C++)
    "ios/**/*.{m,mm}",
    # Implementation (C++ objects)
    "cpp/**/*.{hpp,cpp,h}",
  ]

  if ENV['USE_FRAMEWORKS']
    exclude_source_file_name = [
      'ios/ogg.xcframework/ios-arm64_x86_64-simulator/ogg.framework/Headers/*.h ios/ogg.xcframework/ios-arm64/ogg.framework/Headers/*.h ios/ogg.xcframework/ios-arm64_x86_64-maccatalyst/ogg.framework/Versions/A/Headers/*.h ios/ogg.xcframework/mac-arm64_x86_64/ogg.framework/Versions/A/Headers/*.h ios/vorbis.xcframework/ios-arm64_x86_64-simulator/vorbis.framework/Headers/*.h ios/vorbis.xcframework/ios-arm64/vorbis.framework/Headers/*.h ios/vorbis.xcframework/ios-arm64_x86_64-maccatalyst/vorbis.framework/Versions/A/Headers/*.h ios/vorbis.xcframework/mac-arm64_x86_64/vorbis.framework/Versions/A/Headers/*.h'
    ]


    # Wasn't able to get a build on my main app working without these xcconfig flags
    # https://github.com/mrousavy/nitro/issues/591
    s.pod_target_xcconfig = {
      "HEADER_SEARCH_PATHS" => [
        "${PODS_ROOT}/RCT-Folly",
      ],
      "GCC_PREPROCESSOR_DEFINITIONS" => "$(inherited) FOLLY_NO_CONFIG FOLLY_CFG_NO_COROUTINES",
      "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",
      "EXCLUDED_SOURCE_FILE_NAMES" => exclude_source_file_name.join(" ")
    }
  else
    s.pod_target_xcconfig = {
      "HEADER_SEARCH_PATHS" => [
        "${PODS_ROOT}/RCT-Folly",
      ],
      "GCC_PREPROCESSOR_DEFINITIONS" => "$(inherited) FOLLY_NO_CONFIG FOLLY_CFG_NO_COROUTINES",
      "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",
    }
  end

  load 'nitrogen/generated/ios/IosOggDecoder+autolinking.rb'
  add_nitrogen_files(s)

  s.dependency 'React-jsi'
  s.dependency 'React-callinvoker'
  s.vendored_frameworks = 'frameworks/ogg.xcframework', 'frameworks/vorbis.xcframework'
  
  install_modules_dependencies(s)
end
