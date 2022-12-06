import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import * as S from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    removeCookie("token");
  };

  const handleMySpace = () => {
    navigate("/my-space");
  };

  return (
    <S.Header>
      <h1 className="div1">
        <img src="/images/logo.png" alt="logo my space" />
      </h1>
      <ul>
        <li>
          <button className="mySpace" onClick={handleMySpace}>
            My Space
          </button>
        </li>
        <li>
          <button className="myProfile" onClick={handleProfile}>
            My Profile
          </button>
        </li>
        <li>
          <button className="logout" onClick={handleLogout}>
            LOGOUT
          </button>
        </li>
      </ul>
    </S.Header>
  );
};
