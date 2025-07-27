import {DogProps} from "@/type";
import Image from 'next/image';

export default function Dogs(props: {data:DogProps[]}) {
    return (
        <>
            {
                props.data.map((dog: DogProps) =>
                    <div key={dog.name}>
                        <h4>Breed: {dog.name}</h4>
                        <h4>Purpose of breeding: {dog.bred_for}</h4>
                        <h4>Temperament: {dog.temperament}</h4>
                        <h4>Lifespan: {dog.life_span}</h4>
                    </div>
                )
            }
        </>
    )
}