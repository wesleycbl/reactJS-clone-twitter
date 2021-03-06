import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomManu, 
    HomeIcon, 
    SearchIcon,
    BellIcon, 
    EmailIcon 
} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Wesley Santos</strong>
                  <span>612 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomManu>
              <HomeIcon  className="active"/>
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomManu> 
      </Container>
  );
}

export default Main;