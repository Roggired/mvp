import styled from "styled-components"
import {SECONDARY_COLOR} from "../pages/colors";



const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  min-height: 80vh;
  
  background-color: ${SECONDARY_COLOR};
`;

export {Body}