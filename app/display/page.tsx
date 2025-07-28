"use client";

import Images from "../../components/Images";
import {Suspense} from "react";
import Loading from "../../components/Loading"

export default function Display() {
    return (
        <Suspense fallback={<main><Loading/></main>}>
                    <Images/>
        </Suspense>
    )
}