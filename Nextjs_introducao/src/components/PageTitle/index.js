import Head from "next/head";

export default function PageTitle({ title, ...props }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
        </>
    )
}