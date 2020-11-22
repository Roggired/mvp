import styled from "styled-components"
import {PRIMARY_COLOR, SECONDARY_COLOR} from "../pages/colors";


const RootView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${SECONDARY_COLOR};
  
  min-height: 100vh;
  min-width: 100%;
`;

export {RootView}