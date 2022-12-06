import Image from "next/image";
import styles from "./AudioPlayer.module.css"
let current = null
const AudioPlayer = ({src,audio,index}) => {
   console.log('index',index,audio)
    var play = false
    
    const handlePlayClick=()=>{
        audio.src = src;
        audio.play();
        current = src
        console.log("handlePlayClick=====>current",index,current)
    }
    const handlePauseClick=()=>{
        audio.pause();
        play = false
    }
    const handleSpeed = (e)=>{
        console.log('e',e, src)
        current === src && (audio.playbackRate = e.target.value)
    }
    return ( 
        <div className={styles.audioContainer}>
            {current === null && <img src="Vector.png" onClick={()=>handlePlayClick()} />}
            {current !== null && <img src="pause.png" onClick={()=>handlePauseClick()} />}
            <input type="range" id="vol" name="vol" min="0.5" max="1.5" step="0.25" onChange={(e)=>handleSpeed(e)}></input>
            {/* <select className={styles.speedlist} onChange={(e)=>handleSpeed(e)}>
            <option value="1">change speed</option>
            <option value=".5">.5</option>
            <option value="1">Normal</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            </select>*/}
        </div>
    );
}
 
export default AudioPlayer;