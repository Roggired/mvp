import styled from "styled-components"
import {INVERTED_COLOR} from "../pages/colors";


const Logo = styled.h1`
  font-family: 'Roboto', serif;
  font-size: 45px;
  font-weight: bold;
  
  margin: 0 50px 0;
  
  :first-letter {
      color: ${INVERTED_COLOR};
  }
`;

export {Logo}