module.exports = {
    distDir: "../build/site",
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://tmixed.com",
                permanent: true,
            }
        ]
    }
}
