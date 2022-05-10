import styled from 'styled-components'

type ContainerPros = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerPros) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    boder-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        font-size: 20px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));