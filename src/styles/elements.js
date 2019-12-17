import {colors} from './global'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  height: 100%;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`
export const SearchStyle = styled.div`
  width: 100%;
  height: 75px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  ${'' /* border: 1px solid ${colors.grey}; */}
  position: fixed;
  top: 0;
  overflow: hidden;
  background-color: white;
  div.top-logo {
    width: 20%
  } 
  img {
    width: 60px;
    height: 60px;
  }
  form {
    width: 80%;
  }
  form input {
    background-color: ${colors.lightGrey};
    border-bottom: 1px solid ${colors.grey};
    padding: 5px 10px;
    height: 38px;
    width: 85%;
    font-size: 1rem;
  }
` 

export const SearchfiltersStyle = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${colors.grey};
  box-sizing: border-box;
  h3 {
    width: 30%
    text-align: center
  }
  form {
    width: 75%;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  form select {
    font-size: 0.8rem;
  }
  
` 
export const NavbarStyle = styled.div`
  border-bottom: 1px solid ${colors.grey};
  ul {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8rem;
  } 
  a {
    text-decoration: none;
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

