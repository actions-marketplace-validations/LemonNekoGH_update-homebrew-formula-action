import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';
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

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '100';
  const ip = path.join(__dirname, 'index.ts');
  const result = cp.execSync(`ts-node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
