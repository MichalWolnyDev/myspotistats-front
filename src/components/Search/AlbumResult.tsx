import styles from "../../assets/scss/search/AlbumResult.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";



const AlbumResult = (props: SearchResult) => {
  return (
    <div className={styles.album} title={props.data.name}>
      <div className={styles.album__cover}>
        <LazyLoadImage
          alt={props.data.name}
          src={props.data.images![0]?.url}
          effect="opacity"
        />
      </div>
      <h4 className={styles.album__title}>
        {props.data.name}
      </h4>
      <p>
        {props.data.artists![0]?.name}
      </p>
    </div>
  );
};

export default AlbumResult;
