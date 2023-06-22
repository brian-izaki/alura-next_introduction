const nextConfig = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/pergunta',
                destination: '/faq',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig