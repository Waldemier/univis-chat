import React from 'react'

import wavesSvg from '../../assets/img/waves.svg';
import playSvg from '../../assets/img/audio-play.svg';
import pauseSvg from '../../assets/img/audio-pause.svg';

import { convertTimeDuration } from '../../utils/helpers';


export default function AudioMessage({ audio }) {

    const [play, setPlay] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        if (play) {
            setPlay(!play);
            return audioRef.current.pause();
        }
        audioRef.current.volume = "0.2";
        audioRef.current.play();
    }

    //Викликаємо один раз, при першому рендеренгу, задаючи прослуховування подій для тегу audio
    React.useEffect(() => {
        audioRef.current.addEventListener("playing", () => setPlay(true), false);
        audioRef.current.addEventListener("ended", () => {
            setPlay(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        //Прогрес програвання запису
        audioRef.current.addEventListener("timeupdate", () => {
            const duration = (audioRef.current && audioRef.current.duration) || 0; //Тривалість | if then
            setCurrentTime(audioRef.current.currentTime); //Пізніше значення цього стейту буде передано функції convert в тезі <time>
            setProgress((audioRef.current.currentTime / duration) * 100); //Вирахування відсотків процесу програвання (задаємо width в тегу з класом progress)
        }, false);
    }, [])

    return (
        <div className="message__audio">
            <audio ref={audioRef} src={audio} />
            <div className="message__audio-progress" style={{ width: progress + '%' }} />
            <div className="message__audio-container">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>{play ? <img src={pauseSvg} alt="pause svg" /> : <img src={playSvg} alt="play svg" />}</button>
                </div>
                <div className="message__audio-waves">
                    <img src={wavesSvg} alt="audio waves svg" />
                </div>
                <span className="message__audio-duration">{convertTimeDuration(currentTime)}</span>
            </div>
        </div>
    )
}
