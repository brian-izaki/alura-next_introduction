import Link from "../src/components/LInk";

export default function NotFoundPage() {
    return (
        <div>
            <h1>Erro 404 - página não encontrada</h1>
            <Link href="/">
                Ir para o Home
            </Link>
        </div>
    )
}