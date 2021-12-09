import styled from 'styled-components';

 import fundo from '../../assets/images/fundo.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background-image: url(${fundo});
background-repeat: no-repeat;

height: 120vh;

.cima{
    display: flex;
}

.desc{
    display: flex;
    align-items:center;

    font-size: 40px;
    color: rgba(225, 225, 225, 1);

    padding: .7em 0em 0em 4em;
}

`






