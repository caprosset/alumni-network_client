import {colors} from './global'
import styled, {css} from 'styled-components'


export const ThemeSplash = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
  font-family: Roboto;
  background-color: ${colors.darkBlue};
  padding: 80px;
  h1, h2 {
    color: white;
    margin-bottom: 20%;
  }
  .splash-titles {
    margin-bottom: 20%;
  }
  .splash-buttons {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  label {
    color: white;
  }
`;