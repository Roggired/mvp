import styled from "styled-components"
import {PRIMARY_COLOR, SECONDARY_COLOR} from "../pages/colors";


const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 10%;
  
  padding: 20px;
  background-color: ${PRIMARY_COLOR};

  font-family: 'Roboto', serif;
  font-size: 30px;
  font-weight: bold;
  color: ${SECONDARY_COLOR};
`;

export {HeaderStyle}