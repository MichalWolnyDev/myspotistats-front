import useAudio from '../../hooks/use-audio'
import PlayButton from '../Svg/PlayButton';


const Player = ({url}) => {
  const [playing, toggle] = useAudio(url);


  return (
    <PlayButton onClick={toggle} isPlaying={playing}/>
  )
}

export default Player