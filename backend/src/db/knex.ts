// src/db/knex.ts
import knex from 'knex';
import { environmentConfig } from '../consts';

const connection = knex(environmentConfig);

export default connection;