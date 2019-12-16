import {colors} from './global'
import styled, {css} from 'styled-components'


export const ThemeSplash = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
  font-family: Roboto;
  background-color: #1E2434;
  padding: 80px;
  h1, h2{
    color: white;
    margin-bottom: 20%;
  }
  .splash-titles {
    margin-bottom: 40%;
  }
  .splash-buttons {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;