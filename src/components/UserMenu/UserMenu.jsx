import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.header}>
      <p> Welcome, {user.name} </p>
      <button type="button" className={css.btn} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
