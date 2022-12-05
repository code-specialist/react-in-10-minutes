export interface ICatFact {
    fact: string
}

export default function CatFact({ fact }: ICatFact) {
    return (
        <>
            <li>{fact}</li>
        </>
    )
}