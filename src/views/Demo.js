import V86Container from '../components/V86Container';
import bios from '../emulatorFiles/seabios.bin'
import vgabios from '../emulatorFiles/vgabios.bin'
import mp3 from '../osImg/mp3.img'
import v86wasm from '../emulatorFiles/v86.wasm'

const Demo = () => {
    return (<div className="content-container">
        <h1>Demo</h1>
        <V86Container biosURL={bios} vgaURL={vgabios} hdaURL={mp3} wasmPath={v86wasm}/>
    </div>);
}

export default Demo;