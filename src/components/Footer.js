import styled from "styled-components"
import {PRIMARY_COLOR, SECONDARY_COLOR} from "../pages/colors";


const Footer = styled.footer`
  margin-top: auto;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 10%;
  
  padding: 20px;
  background-color: ${PRIMARY_COLOR};

  font-family: 'Roboto', serif;
  font-size: 16px;
  color: ${SECONDARY_COLOR};
`;

export {Footer}