import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = ({ goBack }) => {
  const history = useHistory();
  return (
    <div className="header">
      {goBack ? (
        <IconButton onClick={() => history.replace(goBack)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
          <img
            className="header__img"
            alt="Trade-Urself logo"
            src="https://www.flaticon.es/svg/vstatic/svg/4072/4072931.svg?token=exp=1611723664~hmac=1390a4517d0ccc8d6ef437a4e5169d8d"
          />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
