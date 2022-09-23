const [...args] = process.argv.slice(2)
const [benchmarkFile, ...rest] = args

function filePath(fileName: string) {
  let filePath = benchmarkFile

  if (!filePath.endsWith('.ts')) {
    filePath = `${filePath}.ts`
  }

  return `../benchmarks/${filePath}`
}

async function run() {
  const { suite } = await import(filePath(benchmarkFile))
  suite.run()
}

run()

export {}
