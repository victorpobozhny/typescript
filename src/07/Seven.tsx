import {FC, useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: string
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {
        model: string
    }
}




export const Seven: FC<PropsType> = ({title, man, ...restProps}) => {

    const [state, setState] = useState<string>('hello')



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div><div>
                {restProps.car.model}
            </div><div>
                {man.name}
            </div>
        </div>
    )
}