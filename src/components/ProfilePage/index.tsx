import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
     EditButton,
    LocationIcon,
    CakeIcon,
    Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Wesley Santos</h1>
              <h2>@WesleySantosOficial</h2>

              <p>
                  Developer at <a href="https://www.google.com">@WesleySantosOficial</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Gravataí, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 15 de Dezembro de 1995
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>94</strong>
                  </span>
                  <span>
                    <strong>672 </strong>seguidores
                  </span>
              </Followage>
          </ProfileData>
        <Feed />
      </Container>
  );
}

export default ProfilePage;