import { sharedSillyLogDecorator } from './shared-silly-log-decorator';

describe('sharedSillyLogDecorator', () => {
  it('should work', () => {
    expect(sharedSillyLogDecorator()).toEqual('shared-silly-log-decorator');
  });
});
