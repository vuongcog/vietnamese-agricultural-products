import { useHistory } from "react-router-dom";
const redirectLogin = ({ isPush = false, history }) => {
  const { pathname, search } = window.location;
  const new_history = `${pathname}${search}`;
  if (
    new_history !== "" &&
    new_history !== "/" &&
    !new_history.includes("/auth")
  ) {
    localStorage.setItem("history_url", new_history);
  }
  if (isPush) {
    history.push("/auth");
  } else {
    window.location.href = "/auth/login";
  }
};

export default redirectLogin;
