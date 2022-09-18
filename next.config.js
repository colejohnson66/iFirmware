module.exports = {
    async redirects() {
        return [
            {
                source: "/fw/format/img3/kbag",
                destination: "/fw/format/tags/kbag",
                permanent: true,
            },
            {
                source: "/fw/format/img3/sepo",
                destination: "/fw/format/tags/sepo",
                permanent: true,
            },
            {
                source: "/fw/format/img3/type",
                destination: "/fw/format/tags/type",
                permanent: true,
            },
            {
                source: "/fw/format/img3/vers",
                destination: "/fw/format/tags/vers",
                permanent: true,
            },
        ];
    }
}
