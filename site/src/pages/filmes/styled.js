import styled from 'styled-components';

import fundo from '../../assets/images/fundo.svg'

export const Container = styled.div`

background-image: url(${fundo});
background-repeat: no-repeat;
background-size: cover;

/* height: 100vh; */
.cima{
    display: flex;
}

.desc{
    display: flex;
    align-items:center;

    font-size: 40px;
    color: rgba(225, 225, 225, 1);

    padding: 1.8em 0em 1em 4em;
}

.Boxs{
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    /* width: 45em; */

    padding: 2em 2em 2em 1em;
}
`