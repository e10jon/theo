import Knex from 'knex'
import {Model} from 'objection'

import knexfile from '../knexfile'
import {defineTheory} from './theory'

const knex = Knex(knexfile[process.env.NODE_ENV])

Model.knex(knex)

export const Theory = defineTheory({Model})