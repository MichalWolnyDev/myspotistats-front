import styles from "../assets/scss/components/CurrentlyPlaying.module.scss";
import useAxios from "../hooks/use-axios";
import { getAuthToken } from "../helpers/spotify";

const CurrentlyPlaying = () => {
  const token = getAuthToken();

  const {
    response: currentlyPlaying,
    error,
    loading,
    refetch,
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/player/currently-playing`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const song = currentlyPlaying?.data.item;

  return <>
    {song && <div className={styles.player}>
        <p className={styles.player__title}>
            Recently played:
        </p>
        <div className={styles.player__wrap}>
            <div className={styles.player__album}>
                <img src={song.album.images[0].url} alt={song.album.name} />
            </div>
            <div className={styles.player__song}>
                <p className={styles['player__song-artist']}>
                    {song.artists[0].name}
                </p>
                <p className={styles['player__song-name']}>
                    {song.name}
                </p>
            </div>
        </div>
    </div>}
  </>;
};

export default CurrentlyPlaying;
