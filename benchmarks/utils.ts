import { Suite, platform } from 'benchmark'

type AnyFunction = (...args: any[]) => any

interface BenchmarkInfo {
  /** Benchmark name */
  name: string
  /** A function to be executed */
  fn: AnyFunction
}

export function setupBenchmark(benchmarks: Array<BenchmarkInfo>): Suite {
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

  benchmarks.forEach(({ name, fn }) => {
    suite.add(name, fn)
  })

  return suite
}
