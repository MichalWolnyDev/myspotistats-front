import React, { useEffect, useState } from "react";
import Container from "../components/UI/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from '../assets/scss/Playlists.module.scss'
import Loader from "../components/UI/Loader";
import GoBack from "../components/GoBack";
import Button from '../components/UI/Button'
import Modal from "../components/UI/Modal";
import CreatePlaylistForm from "../components/CreatePlaylistForm";
import { getAuthToken } from "../helpers/spotify";

const Playlists = () => {
  const token = getAuthToken();
  const id = localStorage.getItem('userId')
  const [playlists, setPlaylists] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await axios
          .get(`https://api.spotify.com/v1/users/${id}/playlists`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setPlaylists(response?.data);

          })
          .catch((err) => console.log(err));

      }

    };

    fetchData();
  }, [id, token]);

  const newPlaylistButtonHandler = () => {
    setShowForm(true);
  }

  const closeNewPlaylistHandler = () => {
    setShowForm(false);
  }

  return <Container>
    <GoBack />
    {showForm && 
    <Modal title={"Add a new playlist"} onCloseModal={closeNewPlaylistHandler}>
      <CreatePlaylistForm />
    </Modal>
    }
    <div className={styles.playlist}>
      <div className={styles.playlist__header}>
        <h1>
          Your playlists
        </h1>
        <br />
        <Button onClick={newPlaylistButtonHandler}>Add new playlist</Button>
      </div>
      {playlists.items?.length > 0 ? playlists.items.map((item, id) => (
        <Link key={id} to={`${item.id}`} state={
          { title: item.name }
        }>
          <div className={styles.playlist__item}>
            <p >{item.name}</p>
          </div>
        </Link>
      )) : <Loader />}
    </div>
  </Container>;
};

export default Playlists;
