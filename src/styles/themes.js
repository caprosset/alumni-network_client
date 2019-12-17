import {colors} from './global'
import styled, {css} from 'styled-components'


export const ThemeSplash = styled.div`
  display: flex;
  font-family: Roboto;
  align-content: center;
  text-align: center;
  flex-direction: column;
  background-color: ${colors.darkBlue};
  padding: 80px;
  height: 1000px;
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

export const ThemeResults = styled.div`
  margin-top: 75px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`