import hapi from 'hapi';

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
};

init();