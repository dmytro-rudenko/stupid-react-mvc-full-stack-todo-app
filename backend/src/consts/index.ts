import config from '../knexfile';

const environment = 'development'
const environmentConfig = config[environment];

export {
    environment,
    environmentConfig
}