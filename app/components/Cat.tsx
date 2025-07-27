import {CatProps} from "@/type";
import Image from 'next/image';

export default function Cats(props: {data:CatProps[]}) {
    return (
        <div>
            {
                props.data.map((cat: CatProps) =>
                    <div>
                        <Image src={cat.url} alt=""/>
                        <h4>{cat.id}</h4>
                    </div>
                )
            }
        </div>
    )
}