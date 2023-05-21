import { V86Starter } from "v86";
import PropTypes from "prop-types";

const activate = (biosURL, vgaURL, hdaURL, wasmPath) =>{
    window.emulator = new V86Starter({
      wasm_path: wasmPath,
      memory_size: 32 * 1024 * 1024,
      vga_memory_size: 4 * 1024,
      screen_container: document.getElementById("screen_container"),
      bios: {
        url: biosURL,
      },
      vga_bios: {
        url: vgaURL,
      },
      hda: {
        url: hdaURL,
      },
      autostart: true,
    });
  }

const EmulatorContainer = ({biosURL, vgaURL, hdaURL, wasmPath}) => {    
    return <div>
        <div>
          <button id="run-emulator" onClick={()=>activate(biosURL, vgaURL, hdaURL, wasmPath)}> Run </button>
        </div>
        <div id="screen_container">
        <div className="emulator_text"></div>
        <canvas style={{display: "none"}}></canvas>
        </div>
    </div>
};

// prop checking
EmulatorContainer.propTypes = {
    biosURL: PropTypes.string,
    vgaURL: PropTypes.string,
    hdaURL: PropTypes.string,
    wasmPath: PropTypes.string
}

export default EmulatorContainer;