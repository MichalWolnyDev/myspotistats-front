import React, { useState } from "react";
import styles from "../assets/scss/components/Listing.module.scss";
import Button from "./UI/Button";
import TrackDetails from "./TrackDetails";
import Loader from "./UI/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";



const Listing = ({ data, loading, type }: {data: any, loading: boolean, type: string}) => {
  const [showDetails, setShowDetails] = useState(null);

  const showDetailsHandler = (index: number) => {
    setShowDetails((prev) => {
      return prev === index ? null : index;
    });
  };

  let playListData = [];

  if (type == "playlist") {
    playListData = data?.map((item: any) => item.track);
    data = playListData;
  }

  return (
    <div className={styles.listing}>
      <div className={styles.listing__wrap}>
        {loading && <Loader />}
        {!loading &&
          data &&
          data.map((item:any, id: string) => (
            <div key={id} className={styles.listing__item}>
              <div className={styles.listing__row}>
                <div className={styles.listing__number}>
                  <p>{id + 1}</p>
                </div>
                <div className={styles.listing__image}>
                  {type == "artists" && (
                    <LazyLoadImage
                      alt={item.name}
                      src={item.images[0]?.url}
                      effect="opacity"
                    />
                  )}
                  {(type == "tracks" || type == "playlist") && (
                    <LazyLoadImage
                      alt={item.name}
                      src={item.album.images[0]?.url}
                      effect="opacity"
                    />
                  )}
                </div>
                <div className={styles.listing__details}>
                  {type == "tracks" ||
                    (type == "playlist" && (
                      <p>{item.artists.map((artist: any) => artist.name + " ")}</p>
                    ))}
                  <h1 className={styles.listing__name}>{item.name}</h1>

                  <div className={styles.listing__cta}>
                    <div className={styles["listing__cta-row"]}>
                      <a href={item.external_urls.spotify} target="_blank">
                        <Button>
                          {type == "tracks" || type == "playlist"
                            ? "Listen on Spotify"
                            : "Check on Spotify"}
                        </Button>
                      </a>
                    </div>
                    {(type == "tracks" || type == "playlist") && (
                      <div className={styles["listing__cta-row"]}>
                        <Button onClick={() => showDetailsHandler(id)}>
                          {showDetails === id ? "Hide details" : "Show details"}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {showDetails === id && <TrackDetails item={item} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Listing;
