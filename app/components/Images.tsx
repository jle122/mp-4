"use client";
import Dogs from "./Dogs";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {DogProps} from "@/type";

export default function Images() {
    const [pics, setPics] = useState<DogProps[]>([]);
    const DOG_API_KEY = process.env.DOG_API_KEY;

    useEffect(() => {
        async function fetchData(): Promise<void> {
        const data = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${DOG_API_KEY}`);
        const dog: DogProps[] = await data.json();
        setPics(dog);
        }
        fetchData()
        .then(() => console.log("successful call"))
        .catch((e: Error) => console.log("error:" + e));
    }, [pics.length]);

    return(
        <>
            <Dogs data={pics}/>
        </>
    )
}