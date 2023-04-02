interface BasicFormula {
  version?: string // reuqired unless tag specified
  tag?: string // if specified, will use git to checkout
  sha256?: string // reuqired unless tag specified
  description: string
  formulaName: string // ruby class name
  commandName: string // binrary name
  url: string // repository url
  homepage: string
  licenseName: string
}

enum BuildType {
  GO = 'Go'
}

interface GoFormula extends BasicFormula {
  buildType: BuildType
  main: string // relative path from main.go to repository root
  ldflags?: string
}

type Formula = GoFormula

const generateFormula = (f: Formula) => {
  if (!f.tag && !f.version && !f.sha256) {
    throw new Error('version and sha256 is required when tag is not specified.')
  }

  return `class ${f.formulaName} < Formula
  desc "${f.description}"
  homepage "${f.homepage}"
  url "${f.url}" ${f.tag ? ', :using => :git' : ''} ${f.tag ? `, :tag => "${f.tag}"` : ''}
  license "${f.licenseName}"
  ${f.version ? `version: "${f.version}"` : ''}
  ${f.sha256 ? `sha256: "${f.sha256}"` : ''}

  ${f.buildType === BuildType.GO ? 'depends_on "go" => :build' : ''}

  def install
    ${f.buildType === BuildType.GO ? `system "go", "build", *std_go_args(ldflags: "-s -w ${f.ldflags}"), "${f.main}"` : ''}
  end
end
`
}

export type {
  GoFormula,
  Formula
}

export {
  generateFormula,
  BuildType
}
