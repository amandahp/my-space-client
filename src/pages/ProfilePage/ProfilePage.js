import { Header } from "../../components";
import * as S from "./Profile.styles";
import { FormProfile, Card } from "../../components";
import React from 'react'


export const ProfilePage = () => {
  return (
    <>
      <Header />
      <S.Profile>
        <h1>My Profile</h1>
        <Card>
          <FormProfile />
        </Card>
      </S.Profile>
    </>
  );
};
