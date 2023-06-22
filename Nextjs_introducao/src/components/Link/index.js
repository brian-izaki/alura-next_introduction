import NextLink from 'next/link'
import { Text } from '../../theme/components'

export default function Link({ children, href, ...props }) {
    return (
        // o componente do next, alterou o nome, pois criamos um componente com o mesmo nome.
        // se href não aparecer no html, necessário usar prop passHref
        <NextLink href={href} passHref legacyBehavior {...props}>
            <Text as="a">{children}</Text>
        </NextLink>
    )
}