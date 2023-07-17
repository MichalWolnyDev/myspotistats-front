import React, { useState } from "react";
import useInput from "../hooks/use-input";
import Checkbox from "./UI/Checkbox";
import styles from "../assets/scss/components/Form.module.scss";
import Button from "./UI/Button";
import axios from "axios";
import { getAuthToken } from "../helpers/spotify";

interface Playlist {
  name: string,
  description: string,
  public: boolean,
  userId?: string
}

const isNotEmpty = (value: string) => value.trim() !== "";

const sendPlaylist = async (formData: Playlist) => {
  const token = getAuthToken();

  const response = await axios
    .post(
      `https://api.spotify.com/v1/users/${formData.userId}/playlists`,
      {
        name: formData.name,
        description: formData.description,
        public: formData.public,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

const CreatePlaylistForm = () => {
  const userId = localStorage.getItem("userId");
  const [isPlaylistAdded, setIsPlaylistAdded] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameHandler,
    inputBlurHandler: enteredNameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: enteredDescriptionHasError,
    valueChangeHandler: enteredDescriptionHandler,
    inputBlurHandler: enteredDescriptionBlurHandler,
    reset: resetDescription,
  } = useInput(isNotEmpty);

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    sendPlaylist({
      name: enteredName,
      description: enteredDescription,
      public: checkboxChecked,
      userId: userId!, // non-null asertion with !
    }).then((res)=> {
      setIsPlaylistAdded(true)
    });

    // resetName();
  };

  const checkboxChangeHandler = () => {
    setCheckboxChecked((prevState) => !prevState);

    console.log(checkboxChecked);
  };

  return (
    <>
      {!isPlaylistAdded && (
      <form onSubmit={formSubmission}>
      <div>
        <label htmlFor="name">Playlist name</label>
        <br />
        <input
          className={styles.form__input}
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={enteredNameBlurHandler}
        />
        {enteredNameHasError && (
          <p className={styles.form__error}>Name must not be empty</p>
        )}
      </div>
      <div>
        <label htmlFor="name">Description</label>
        <br />
        <input
          className={styles.form__input}
          type="text"
          id="description"
          value={enteredDescription}
          onChange={enteredDescriptionHandler}
          onBlur={enteredDescriptionBlurHandler}
        />
      </div>
      <div>
        <Checkbox
          label={"Public playlist"}
          value={checkboxChecked}
          id={"accessibility"}
          onChange={checkboxChangeHandler}
        />
      </div>
      <div className={styles.form__actions}>
        <Button mode="white" disabled={!formIsValid} type="submit">
          Submit
        </Button>
      </div>
    </form>
    )}
    {isPlaylistAdded && <p className={styles.form__message}>Playlist {enteredName} has been added!</p>}
    </>
  );
};

export default CreatePlaylistForm;
