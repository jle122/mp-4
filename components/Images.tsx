"use client";

import Dogs from "./Dogs";
import {useEffect, useState} from "react";
import {DogProps} from "@/type";
import getAPI from "@/lib/getAPI"

export default function Images() {
    const [pics, setPics] = useState<DogProps[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
        const data = await getAPI();
        setPics(data);
        }
        fetchData()
        .then(() => console.log("successful call"))
        .catch((e: Error) => console.log("error:" + e));
    }, [pics.length]);

    if (pics.length === 0) {
        return (<h4>Error loading API</h4>);
    }

    return(
        <Dogs data={pics}/>
    )
}