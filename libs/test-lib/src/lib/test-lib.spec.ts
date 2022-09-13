import { testLib } from './test-lib';

describe('testLib', () => {
  it('should work', () => {
    expect(testLib({ is: 'test-lib' })).toEqual('test-lib');
  });
});
