module.exports = ({
    local: {
        baseURL : 'http://localhost:8080/',
        launchOptions: { headless: false },
        timeout: 5000,
        username: 'admin@gmail.com',
        password: 'admin'
    },
    test: {},
    prod: {}
})[process.env.TESTENV || 'local'];