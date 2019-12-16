import {colors} from './global'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  height: 800px;
  
`

export const Button = styled.button`
  ${props => props.splash && css`
    width: 100%;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
  ` }
`
