import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import "../App.css";
import ProfileSummary from "./ProfileSummary";
export default function Navi() {
  const { authState } = useSelector((state) => state.auth);
  return (
    <div>
      <Menu fixed="top"  size="large">
          <Menu.Item>
            <img alt="logo" src="https://icon-library.net/images/human-resources-icon-png/human-resources-icon-png-1.jpg" />
          </Menu.Item>
          <Menu.Item as={NavLink} to={`/homepage`} name="Ana Sayfa" />
          <Menu.Item as={NavLink} to={`/blabla`} name="İş İlanları" />
          <Menu.Item as={NavLink} to={`/blablabla`} name="Akış" />

          {authState.authenticated ? (
            <Menu.Menu position="right">
              <ProfileSummary firstName={authState.user.firstName} lastName={authState.user.lastName}></ProfileSummary>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  primary
                  className="mr-3"
                  as={NavLink}
                  to={`/login`}
                >
                  Giriş Yap
                </Button>
                <Button basic primary as={NavLink} to={`/register`}>
                  Kayıt Ol
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button basic color="red" as={NavLink} to={`/register`}>
                  İş Veren
                </Button>
              </Menu.Item>
            </Menu.Menu>
          )}
      </Menu>
    </div>
  );
}