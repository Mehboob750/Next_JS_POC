import AudioPlayer from "../components/MusicSystem/AudioPlayer";

const AudioList = () => {
    let audio = new Audio();
    const songs = ["Aabad.mp3", "Birthday.mp3", "Tora.mp3"]
    return ( 
        <>
        <h1>Music Player</h1>
        <ol>
            {songs.map((song,index)=>(
                <li key={index}>{song}<AudioPlayer src={song} audio={audio} index={index} /></li>
            ))}
        </ol>
        </>
    );
}
 
export default AudioList;