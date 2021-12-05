import styled from 'styled-components';

import fundo from '../../assets/images/fundo.svg'


export const Container = styled.div`
background-image: url(${fundo});
background-repeat: no-repeat;
height: 100vh;

.Desc{
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 48px;
    color: rgba(225, 225, 225, 1);
;
}

.Boxs{
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2em;
}

.Big{

}

.Box{
    display: flex;
    flex-wrap: wrap;
    width: 45em;

    margin-top: 1.5em;
}
`