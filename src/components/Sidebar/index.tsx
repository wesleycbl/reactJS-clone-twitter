import React from 'react';
/* animação de scroll do twitter*/
import StickBox from 'react-sticky-box';
import List from '../List';
import FallowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container,SearchWrapper,SearchInput,SearchIcon,Body } from './styles';

const Sidebar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon />
          </SearchWrapper>

          <StickBox>
            <Body>
                
                <List title="Talvez você curta" elements={[
                    <FallowSuggestion name="Thomas Eric" nickname="@Repercuuuull"/>,
                    <FallowSuggestion name="Thyago Araujo"nickname="@Tata"/>,
                    <FallowSuggestion name="Douglas Pouey"nickname="@Doug"/>
                ]}/>

                <List title="O que está acontecendo" elements={[
                    <News/>,
                    <News />,
                    <News />,
                    <News />,
                    <News />,
                    <News/>
                ]}/>
            </Body>
          </StickBox>
          
      </Container>
  );
}

export default Sidebar;