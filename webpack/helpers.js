import path from 'path'

// Returns absolute paths relative to the package root.
export const resolve = (...args) => (
  path.resolve(process.cwd(), ...args)
)

// Returns true for paths that match our sources.
export const ours = (absolute) => (
  absolute.startsWith(resolve('src'))
)

// Returns true for paths matching vendor sources.
export const theirs = (absolute) => (
  !ours(absolute)
)
