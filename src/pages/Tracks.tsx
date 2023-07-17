import React, { useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import styles from "../assets/scss/Tracks.module.scss";
import Listing from "../components/Listing";
import ListingMenu from "../components/ListingMenu";
import GoBack from "../components/GoBack";
import { getAuthToken } from "../helpers/spotify";

const Tracks = () => {
  const token = getAuthToken();
  const [timeRange, setTimeRange] = useState("long_term");

  const {
    response: track,
    error,
    loading,
    refetch,
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/tracks`,
    params: {
      time_range: timeRange,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const items = track?.data.items;

  console.log(items);

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
        type={"tracks"}
        data={items}
        loading={loading}
      />
    </Container>
  );
};

export default Tracks;
