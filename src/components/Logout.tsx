import Button from "./UI/Button";

const logoutButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiration");

  window.location.href = "/";
};

interface Logout {
  mode?: string
}

const Logout = (props: Logout) => {
  return <Button onClick={logoutButtonHandler} mode={props?.mode || ""}>Logout</Button>;
};

export default Logout;
