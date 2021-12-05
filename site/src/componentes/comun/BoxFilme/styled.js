import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 background: rgba(170, 10, 10, 1);
width: 20em;

border-radius: 16px 16px 0px 0px;

padding: 5px;
margin: .8em .8em;

.Espe{
padding: 2em 1em;
}

.Nome{
    padding-bottom: 2.8em;
    color: rgba(255, 202, 118, 1);

    font-size: 20px;
}

.Idioma, .Cla{
    color: rgba(255, 255, 255, 1);
    font-size: 16px ;
}
`;