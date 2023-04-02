# Update Homebrew Formula Action

<a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>

## Usage

You can now consume the action by referencing the main branch
```yaml
uses: lemonnekogh/update-homebrew-formula-action@main
with:
  tag: '0.0.2'
  url: 'https://github.com/example/tool'
  description: 'a description'
  buildType: Go
  main: 'main.go'
  homepage: 'https://github.com/example/tool'
  licenseName: 'MIT'
  formulaName: 'Tool'
  commandName: 'tool'
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

This action just create or update formula ruby file in `Formula/<name>.rb` currently, you need commit and push by another steps.

For further info, you can see `actions.yaml` currently, thank you.

## Testing
Install the dependencies

```bash
pnpm install
```

Run the tests :heavy_check_mark:

```bash
$ pnpm test

 ✓ index.test.ts (1)

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  16:30:49
   Duration  270ms (transform 64ms, setup 0ms, collect 49ms, tests 1ms)
```
