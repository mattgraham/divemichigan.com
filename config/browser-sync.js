module.exports = {
    debugInfo: true,
    files: [
        '/assets/stylesheets/*.css',
        '/**/*.html'
    ],
    ghostMode: {
        forms: true,
        links: true,
        scroll: true
    },
    server: {
        baseDir: 'html'
    }
};
