/**
 * @see https://web.dev/structured-clone/
 */

import { setupBenchmark } from './utils'
import { cloneDeep } from 'lodash-es'

const obj = {
  id: 1,
  name: 'John Doe',
  hasLicense: true,
  job: {
    title: 'Software Engineer',
    address: {
      street: '123 Main St',
      city: 'San Francisco',
    },
  },
  phoneNumbers: [
    {
      type: 'home',
      number: '123-456-7890',
    },
    {
      type: 'work',
      number: '123-456-7890',
    },
  ],
}

function useJSONParseStringify() {
  return JSON.parse(JSON.stringify(obj))
}

function useLodashCloneDeep() {
  return cloneDeep(obj)
}

function useStructuredClone() {
  return structuredClone(obj)
}

setupBenchmark([
  { name: 'JSON.parse(JSON.stringify())', fn: useJSONParseStringify },
  { name: 'Lodash.cloneDeep()', fn: useLodashCloneDeep },
  { name: 'structuredClone()', fn: useStructuredClone },
]).run()
