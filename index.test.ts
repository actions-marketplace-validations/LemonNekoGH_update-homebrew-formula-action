import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '100';
  const ip = path.join(__dirname, 'index.ts');
  const result = cp.execSync(`ts-node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
