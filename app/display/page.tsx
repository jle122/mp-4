"use client";

import Images from "../../components/Images";
import Loading from "../../components/Loading";
import {Suspense} from "react";

export default function Display() {
    return (
        <Suspense fallback={<main><Loading/></main>}>
            <Images/>
        </Suspense>
    )
}