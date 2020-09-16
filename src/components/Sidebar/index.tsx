import React from 'react';
import List from '../List';
import FallowSuggestion from '../FollowSuggestion';
import { Container,SearchWrapper,SearchInput,SearchIcon,Body } from './styles';

const Sidebar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon />
          </SearchWrapper>

          <Body>
             <List title="Talvez você curta" elements={[
                 <FallowSuggestion name="Douglas Pouey"nickname="@Doug"/>
             ]}/>
             <List title="Talvez você curta" elements={[
                 <FallowSuggestion name="Thyago Araujo"nickname="@Tata"/>
             ]}/>
             <List title="Talvez você curta" elements={[
                 <FallowSuggestion name="Thomas Eric" nickname="@Repercuuuull"/>
             ]}/>
          </Body>
      </Container>
  );
}

export default Sidebar;