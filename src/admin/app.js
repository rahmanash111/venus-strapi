export default {
    config: {
        locales: [],
        // Override the default theme to avoid loading Google Fonts via HTTP
        theme: {
            light: {
                colors: {
                    // Keep default colors
                },
            },
            dark: {
                colors: {
                    // Keep default colors  
                },
            },
        },
        // Override head to load Google Fonts via HTTPS
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,300italic,300&display=swap',
                },
            ],
        },
        // Disable default tutorials that might load external resources
        tutorials: false,
        notifications: { releases: false },
    },
    bootstrap() { },
};
