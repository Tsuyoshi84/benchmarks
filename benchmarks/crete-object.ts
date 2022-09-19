import { setupBenchmark } from './utils'

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

function useObjectCreate() {
  return Object.create({ name, age })
}

function useJsonParse() {
  return JSON.parse(`{"name":"${name}","age":${age}}`)
}

setupBenchmark([
  { name: 'Class          ', fn: useClass },
  { name: 'Object literal ', fn: useObjectLiteral },
  { name: 'Object.create()', fn: useObjectCreate },
  { name: 'JSON.parse()   ', fn: useJsonParse },
]).run()
