import styled from 'styled-components';

 import fundo from '../../assets/images/fundo.svg'

export const Container = styled.div`
background-image: url(${fundo});
background-repeat: no-repeat;
/* background-size: cover; */

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

.Boxs{
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 2em 8em 0em 8em;
}

.BoxHo{
    display: flex;
    flex-wrap: wrap;

    width: 35em;
    /* padding: ; */
}
`
