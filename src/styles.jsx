import styled from "styled-components";

export const Container = styled.div`
    background-color: #0d1e7fb3;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Screen = styled.div`
    border: 3px solid #eee;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    height: 600px;
    min-width: 340px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: #fff;
`

export const Picture = styled.img`
    background-image: url(${props => props.src});
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 60px);
    width: 100%;
    transition: opacity 0.4s ease-out;
    opacity: ${props => props.opacity};
`

export const Bar = styled.nav`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`

export const List = styled.ul`
    background-color: #fff;
    display: flex;
    align-items: baseline;
    list-style-type: none;
    height: 60px;
`

export const Button = styled.li`
    color: ${props => props.color};
    cursor: pointer;
    flex: 1;
    padding: 12px;
    text-align: center;
`

export const Text = styled.p`
    font-size: 12px;
`




