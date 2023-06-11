// import { useEffect, useState } from "react";
import Link from "../src/components/Link";

// export async function getServerSideProps() {
export async function getStaticProps() {
    // esse código executa no backend, antes de renderizar o componente
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then(res => res.json())

    return {
        // esse props representa o props que o componente React irá receber... ou seja, teste e faq estarão no props do componente.
        props: {
            teste: 'teste',
            faq,
        },
    }
}

export default function FaqPage({ faq }) {
    // const [faq, setFaq] = useState([]);

    // useEffect(() => {
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    //     fetch(FAQ_API_URL)
    //         .then(res => res.json())
    //         .then(res => {
    //             setFaq(res)
    //         })
    // }, [])

    return (
        <div>
            <h1>Alura Cases - Página de perguntas FAQ</h1>
            <Link href="/">
                Ir para o Home
            </Link>

            <ul>
                {faq.map(({ question, answer }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}