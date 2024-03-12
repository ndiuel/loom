if (process.env.NODE_ENV == 'production') {
    module.exports = {
        plugins: [
            require("tailwindcss"),
            require("autoprefixer"),
            require("flex-gap-polyfill"),
            require("cssnano")
        ]
    };
} else {
    module.exports = {
        plugins: [
            require("tailwindcss"),
            require("flex-gap-polyfill"),
            require("autoprefixer"),
            require("cssnano")
        ]
    }
}
