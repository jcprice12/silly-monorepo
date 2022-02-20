import { sharedSillyRetryDecorator } from './shared-silly-retry-decorator';

describe('sharedSillyRetryDecorator', () => {
  it('should work', () => {
    expect(sharedSillyRetryDecorator()).toEqual('shared-silly-retry-decorator');
  });
});
