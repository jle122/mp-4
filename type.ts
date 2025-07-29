export type DogProps = {
    image: { // property is only accessible to users with an API key. Image is a nested object
        url : string
    },
    name : string,
    bred_for : string,
    life_span : string,
    temperament : string,
}