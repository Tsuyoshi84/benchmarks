import { Suite, platform } from 'benchmark'

type AnyFunction = (...args: any[]) => any

interface Function {
  /** Benchmark name */
  name: string
  /** A function to be executed */
  fn: AnyFunction
}

export function setupBenchmark(
  funcs: Array<Function> | Array<AnyFunction>
): Suite {
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
    if (typeof func === 'function') {
      suite.add(func.name, func)
    } else {
      suite.add(func.name, func.fn)
    }
  })

  return suite
}
