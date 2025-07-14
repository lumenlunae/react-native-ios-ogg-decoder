import ExpoModulesCore

public class RNiOSOggDecoderModule: Module {
    public func definition() -> ModuleDefinition {
        Name("RNiOSOggDecoder")
        
        
        Function("decode") { (sourcePath: String, destPath: String) in
            let decoder = OggDecoder()
            decoder.decode(sourcePath, destPath: destPath)
            return destPath
        }
        
    }
}
