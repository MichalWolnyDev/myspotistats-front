import React, { useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import styles from "../assets/scss/Artists.module.scss";
import Listing from "../components/Listing";
import ListingMenu from "../components/ListingMenu";
import GoBack from "../components/GoBack";
import { getAuthToken } from "../helpers/spotify";

const Artists = () => {
  const token = getAuthToken();
  const [timeRange, setTimeRange] = useState("long_term");

  const {
    response: artist,
    error,
    loading,
    refetch,
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/artists`,
    params: {
      time_range: timeRange,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const items = artist?.data.items;

  const menuButtonHandler = (param: string) => {
    setTimeRange(param);
    refetch({}); //refetch axios data
  };

  return (
    <Container>
      <GoBack />
      <ListingMenu
        menuButtonHandler={menuButtonHandler}
        timeRange={timeRange} />
      <Listing
        type={"artists"}
        data={items}
        loading={loading}
      />
    </Container>
  );
};

export default Artists;
