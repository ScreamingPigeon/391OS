import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { V86Starter } from "v86";
import PropTypes from "prop-types";

// it is unfortunate that react router would not refresh the page automatically
// when switch to different routes, this implementation, as a result, would have
// some performance drawback
const V86Container = ({biosURL, vgaURL, hdaURL, wasmPath}) => {   
    const navigate = useNavigate();
    const [emulatorOn, setEmulatorOn] = useState(false);
    const activate = () =>{
      if(emulatorOn === true) return;
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
      setEmulatorOn(true);
    }

    const stopRun = () => {
      navigate(0);
    }

    return <div>
        <div>
          <button id="run-emulator" onClick={()=>activate()}> Run </button>
          <button id="stop-emulator" onClick={()=>stopRun()}> Stop </button>
        </div>
        <div id="screen_container">
          <div className="emulator_text"></div>
          <canvas style={{display: "none"}}></canvas>
        </div>
    </div>
};

// prop checking
V86Container.propTypes = {
    biosURL: PropTypes.string,
    vgaURL: PropTypes.string,
    hdaURL: PropTypes.string,
    wasmPath: PropTypes.string
}

export default V86Container;