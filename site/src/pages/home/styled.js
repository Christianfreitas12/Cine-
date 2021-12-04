import styled from 'styled-components';

 import fundo from '../../assets/images/fundo.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;

background-image: url(${fundo});
background-repeat: no-repeat;

height: 100vh;
.top{
    display: flex;
    flex-direction: column;
    align-items: center;
 
    /* margin-top: -5em; */
    padding: 4.5em;
    img{
        height: 6em;
    }
}

.Des{
  color: rgba(225, 225, 225, 1);
  font-size: 60px;
}

button{
    padding: 1em 0em;
    margin-top: 3em;
    border-radius: 1.5em;
    font-size: 28px;
    width: 7em;

    border: none;
    color: #ffffff;
    background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
    box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);

    cursor: pointer;
;
}

`






