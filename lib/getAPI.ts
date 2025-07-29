import {DogProps} from "@/type";

const DOG_API_KEY = process.env.DOG_API_KEY;

export default async function getAPI(): Promise<DogProps[]> {
        const data = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${DOG_API_KEY}`);
        const dogs = await data.json();
        return dogs;
}