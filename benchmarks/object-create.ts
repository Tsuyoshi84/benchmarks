import { setupBenchmark } from '../src/utils'

const name = 'John'
const age = 20

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

function useClass() {
  return new Person(name, age)
}

function useObjectLiteral() {
  return { name, age }
}

function useJsonParse() {
  return JSON.parse(`{"name":"${name}","age":${age}}`)
}

export const suite = setupBenchmark([
  { name: 'Class', fn: useClass },
  { name: 'Object literal', fn: useObjectLiteral },
  { name: 'JSON.parse()', fn: useJsonParse },
])
