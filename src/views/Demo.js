import V86Container from '../components/V86Container';
import bios from '../emulatorFiles/seabios.bin'
import vgabios from '../emulatorFiles/vgabios.bin'
import mp3 from '../osImg/mp3.img'
import v86wasm from '../emulatorFiles/v86.wasm'

const Demo = () => {
    return (<div className="content-container">
        <h2>Demo</h2>
        <div>This is an online demo of 391OS.</div>
        <div>Click "Run" to start the emulator, "Stop" to end the program </div>
        <div>You can read the tips below before you start</div>
        <V86Container biosURL={bios} vgaURL={vgabios} hdaURL={mp3} wasmPath={v86wasm}/>
        <p>
            Helpful Information: <br/>
            Ctrl + L: Clear the screen <br/>
            Alt + F1, F2, F3: Swtich between 3 different terminals <br/>
            
            Notes: <br />
            - If you do not see the prompt 391OS, press "Enter" <br />
            - Because it does not have signal implemented, some terminal key combinations, eg "Ctrl+C", will not work. <br />
            - You can run up to 8 process <br />           
            - Type "exit" to end shell program, but you cannot end the base shell program in each terminal <br/>
            - Pingpong is not a stoppable program. If you want to stop it, use the "Stop" button on the top <br/>
            - Current supported program: ls, cat, grep, pingpong, fish, counter
        </p>
    </div>);
}

export default Demo;