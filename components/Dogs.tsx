"use client";

import {DogProps} from "@/type";
import styled from "styled-components";

const StyledDiv = styled.div`
    border: 2px solid navy;
    text-align: center;
    background-color: lightgreen;
    background-color: pink;
`
export default function Dogs(props: {data:DogProps[]}) {
    return (
        <>
            {
                props.data.map((dog: DogProps) =>
                    <StyledDiv key={dog.name}>
                        <h4>Breed: {dog.name}</h4>
                        <h4>Purpose of breeding: {dog.bred_for}</h4>
                        <h4>Temperament: {dog.temperament}</h4>
                        <h4>Lifespan: {dog.life_span}</h4>
                    </StyledDiv>
                )
            }
        </>
    )
}