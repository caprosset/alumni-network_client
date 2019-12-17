import {colors} from './global'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  height: 800px;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
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

