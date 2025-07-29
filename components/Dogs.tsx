"use client";

import {DogProps} from "@/type";
import styled from "styled-components";
import Image from "next/image";

const StyledDiv = styled.div`
    border: 2px solid navy;
    text-align: center;
    background-color: lightgreen;
    background-color: pink;
`
export default function Dogs(props: {data:DogProps[]}) {
    // image requires width and height as properties
    // dog.image.url is only accessible to those with an API key. The other attributes can be accessed without one.
    return (
        <>
            {
                props.data.map((dog: DogProps) =>
                    <StyledDiv key={dog.name}>
                        <Image src={dog.image.url} alt="" width={200} height={100}/>
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