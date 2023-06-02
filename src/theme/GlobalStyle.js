export default function GlobalStyle() {
    return (
        // necessário o atributo global
        <style global jsx>{`
            body {
                font-family: sans-serif;
            }
        `}</style>
    )
}