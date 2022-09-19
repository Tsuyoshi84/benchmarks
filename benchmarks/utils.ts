import { Suite, platform } from 'benchmark'

type AnyFunction = (...args: any[]) => any

interface BenchmarkInfo {
  /** Benchmark name */
  name: string
  /** A function to be executed */
  fn: AnyFunction
}

export function setupBenchmark(funcs: Array<BenchmarkInfo>): Suite {
  var suite = new Suite({
    onStart: function () {
      console.log(`\nStart benchmark on ${platform.description}\n`)
      console.log('Benchmarking...\n')
    },
    onCycle: function (event) {
      console.log(String(event.target))
    },
    onComplete: function () {
      console.log('\nFastest is ' + this.filter('fastest').map('name'))
    },
    async: true,
  })

  funcs.forEach((func) => {
    suite.add(func.name, func.fn)
  })

  return suite
}
