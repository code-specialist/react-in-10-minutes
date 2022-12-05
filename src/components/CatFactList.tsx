import { useEffect, useState } from "react";
import CatFact, { ICatFact } from "./CatFact";

interface IMeowFactResponse {
    data: string[]
}


export default function CatFactList() {
    const [catFacts, setCatFacts] = useState<ICatFact[]>([])

    useEffect(() => {
        getCatFacts()
    }, [])

    async function getCatFacts() {
        fetch("https://meowfacts.herokuapp.com/?count=10 ")
            .then(response => response.json() as Promise<IMeowFactResponse>)
            .then(json => json.data)
            .then(entries => entries.map(entry => { return { fact: entry } }))
            .then(setCatFacts)
    }

    return (
        <>
            <h1>Cat Fact List</h1>
            <ul>
                {catFacts.map(CatFact)}
            </ul>
        </>
    )
}