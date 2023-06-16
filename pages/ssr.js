import Link from "../src/components/Link"

export async function getServerSideProps() {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));

    return {
        props: {
            myValue: 'do serverSide',
        }
    }
}

export default function Ssr(props) {
    return (
        <div>
            <h1>{props.myValue}</h1>
            <Link href='/ssg'>
                ir pro staticProps
            </Link>
        </div>
    )
}