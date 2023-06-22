import Link from "../src/components/Link"

// consegue perceber a velocidade de performance apenas no build.
export async function getStaticProps() {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));

    return {
        props: {
            myValue: 'do staticProps',
        }
    }
}

export default function Ssg(props) {
    return (
        <div>
            <h1>{props.myValue}</h1>
            <Link href='/ssr'>
                ir pra tela com serverSideProps
            </Link>
        </div>
    )
}