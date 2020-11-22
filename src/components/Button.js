import styled from "styled-components"
import {SECONDARY_COLOR, PRIMARY_COLOR, INVERTED_COLOR} from "../pages/colors";

const Button = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  
  border-radius: 5px;
  border-color: ${SECONDARY_COLOR};
  background: ${INVERTED_COLOR};
  color: ${SECONDARY_COLOR};
  
  font-family: 'Roboto', serif;
  font-size: 16px;
  font-weight: bold;
  
  padding: 7px;
  
  outline: none;
  
  :hover {
     border-color: ${INVERTED_COLOR};
     background: ${SECONDARY_COLOR};
     color: ${INVERTED_COLOR};
  }
`;

export {Button}