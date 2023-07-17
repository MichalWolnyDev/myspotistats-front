import React, { useEffect } from 'react'
import styles from '../assets/scss/Dashboard.module.scss'
import Container from '../components/UI/Container'
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import { useDispatch } from 'react-redux';
import { profileActions } from '../store/profile';
import useAxios from '../hooks/use-axios';
import { getAuthToken } from "../helpers/spotify";


const dashboardMenu = [
  {
    title: 'Your profile',
    link: '/profile'
  },
  {
    title: 'Top artists',
    link: '/artists'
  },
  {
    title: 'Top tracks',
    link: '/tracks'
  },
  {
    title: 'Your playlists',
    link: '/playlists'
  },
  {
    title: 'Search',
    link: '/search'
  }
]


const Dashboard = () => {

  const token = getAuthToken();
  const dispatch = useDispatch();

  const { response: user, error, loading } = useAxios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me',
      headers: {
          'Authorization': 'Bearer ' + token
      }
  });

  const userPayload = user?.data;

  localStorage.setItem('userId', userPayload?.id);

  useEffect(() => {
    dispatch(profileActions.setProfile(userPayload))
  }, [userPayload])


  return (
    <Container>
      <section className={styles.dashboard__menu}>
        {dashboardMenu.map((item, id) => (
          <Link to={item.link} key={id}>
            <Card title={item.title} />
          </Link>
        ))}
      </section>
    </Container>
  )
}

export default Dashboard