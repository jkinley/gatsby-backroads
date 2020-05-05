import styled from 'styled-components'

const color = 'blue';

const Button = styled.button`
    color: ${props => props.color};
    background-color: ${color};
    font-size: ${props => (props.big?"2rem":"1rem")};
    padding: 0.5rem 1rem;
    border-radius: 3px;
    margin: 1rem;
    outline: none;
`
export default Button