import React, { useCallback, useEffect, useState, useRef } from "react";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import SearchInput from "../components/Search/SearchInput";
import { debounce } from "lodash";
import axios, {AxiosResponse} from "axios";
import { getAuthToken } from "../helpers/spotify";
import ArtistResult from "../components/Search/ArtistResult";
import ArtistTracks from "../components/Search/ArtistTracks";
import AlbumResult from "../components/Search/AlbumResult";
import styles from "../assets/scss/Search.module.scss";
import Card from "../components/Search/Card";
import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";

interface Album {
  external_urls: {
    spotify: string
  },
  id: string
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AxiosResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = getAuthToken();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      const fetchSearchData = async () => {
        setIsLoading(true);
        const response = await axios
          .get("https://api.spotify.com/v1/search", {
            params: {
              q: query,
              type: "album,artist,playlist,track,show,episode",
            },
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            setResults(res);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });

        return response;
      };

      fetchSearchData();
    } else {
      mounted.current = true;
    }
  }, [query]);

  const queryChangeHandler = (e: any) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(queryChangeHandler, 500),
    []
  );

  if (results != null) {
    console.log(results);
  }

  // const albumsByArtist = results.data.albums.items.map(album => )

  return (
    <Container>
       <GoBack />
       <br />
      <SearchInput onQueryChange={debouncedChangeHandler} />
      {results && (
        <div className={styles.results}>
          <div className={styles.results__header}>
            <h1>Best results:</h1>
          </div>
          <br />
          <div className={`${styles.results__wrap} ${styles["results__wrap-mobile"]}`}>
            <Card className={styles["results__card--sm"]}>
              <ArtistResult data={results.data.artists?.items[0]} />
            </Card>
            <Card className={styles["results__card"]}>
              <ArtistTracks data={results.data.tracks?.items} />
            </Card>
          </div>
          <br /><br />
          <h3>Albums:</h3>
          <br />
          <div
            className={`${styles.results__wrap} ${styles["results__wrap-fw"]}`}
          >
            {results.data.albums?.items.map((album: Album) => (
              <Link
                className={styles["results__card--md"]}
                to={album.external_urls.spotify}
                target="_blank"
                key={album.id}
              >
                <Card>
                  <AlbumResult data={album} />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default Search;
