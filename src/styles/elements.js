import {colors} from './global'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  div.top-logo {
    width: 20%
  } 
  img {
    width: 50px;
    height: 50px;
  }
  form {
    width: 80%;
  }
  form input {
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    padding: 5px 10px;
    height: 38px;
    width: 80%
  }
` 


export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div, select {
    width: 80%;
    margin: 10px 0;
  }
  div input {
    width: 100%;
  }
  div input, select {
    font-size: 1rem;
  }
`

export const Button = styled.button`
  ${props => props.splash && css`
    font-family: Roboto;
    font-size: 1.1rem;
    width: 80%;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
  ` }
`

