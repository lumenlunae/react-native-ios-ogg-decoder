require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'RNiOSOggDecoder'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = {
    :ios => '15.1',
    :tvos => '15.1'
  }
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/lumenlunae/react-native-ios-ogg-decoder' }
  s.dependency 'ExpoModulesCore'
  s.vendored_frameworks = 'Frameworks/ogg.xcframework', 'Frameworks/vorbis.xcframework'

  # Swift/Objective-C compatibility
  s.compiler_flags = '-x objective-c++ -std=c++11'
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }
  
  if !$ExpoUseSources&.include?(package['name']) && ENV['EXPO_USE_SOURCE'].to_i == 0 && File.exist?("#{s.name}.xcframework") && Gem::Version.new(Pod::VERSION) >= Gem::Version.new('1.10.0')
    s.source_files = "src/**/*.h"
    s.vendored_frameworks = "#{s.name}.xcframework"
  else
    s.source_files = "src/**/*.{h,m,mm,swift,hpp,c,cpp}"
    s.private_header_files = "src/OggDecoderObjC/**/*.h"
    s.public_header_files = "src/OggDecoder.h"
  end

end
