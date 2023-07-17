import { redirect } from "react-router-dom";

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    const expiration = Number(urlParams.get('expires_in'))
    const now = new Date();

    accessToken !== null && localStorage.setItem('accessToken', accessToken)
    refreshToken !== null && localStorage.setItem('refreshToken', refreshToken);
    expiration !== null && localStorage.setItem('expiration', String(now.getTime() + expiration * 1000));

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiration: expiration
    }
}

export const accessToken = getAccessToken();

export const isTokenExpired = () => {
    const storedExpirationTime = localStorage.getItem('expiration');
    const now = new Date();

    // let temp = new Date(Number(storedExpirationTime))
    // console.log('czas wygasniecia: ' + temp)
    // console.log(now + " " + now.getTime())

    if (now.getTime() > Number(storedExpirationTime)) {
        return true; // token expired
    }

    return false;
}

export const getAuthToken = () => {
    const token = localStorage.getItem('accessToken');
    const refresh_token = localStorage.getItem('refreshToken')

    if (!token) {
        return null;
    }

    const tokenExpired = isTokenExpired();
    // console.log('istokenexpired: ' + tokenExpired)


    if (tokenExpired) {
        // window.location.href = `http://localhost:8080/login?refresh_token=${refresh_token}`
        window.location.href = `https://myspoti-backend.netlify.app/api/login?refresh_token=${refresh_token}`
    }

    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const chechkAuthLoader = () => {
    const token = getAuthToken();

    if (token === null) {
        return redirect('/');
    }

    return null;
}
