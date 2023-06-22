import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

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
