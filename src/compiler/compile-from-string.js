import * as compiler from '@riotjs/compiler/essential'

export function compileFromString(string, options) {
  return compiler.compile(string, options)
}
