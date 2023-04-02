import { BuildType, generateFormula } from './formula';

test("generate formula", () => {
  it('tag', () => {
    const f = generateFormula({
      tag: '0.0.2',
      url: 'https://github.com/example/tool',
      description: 'a description',
      buildType: BuildType.GO,
      main: 'main.go',
      homepage: 'https://github.com/example/tool',
      licenseName: 'MIT',
      formulaName: 'Tool',
      commandName: 'tool'
    })

    expect(f).toBe(`class Tool < Formula
  desc "a description"
  homepage "https://github.com/example/tool"
  url "https://github.com/example/toole", :using => :git, :tag => '0.0.2'
  license "MIT"
  
  depends_on "go" => :build
  
  def install
    system "go", "build", *std_go_args(ldflags: "-s -w "), "main.go"
  end
end
`)
  })
})
