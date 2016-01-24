describe('Fan menu component suite', function() {
  var fanMenuService = null;

  /**
   * Inject the main module and the service before each spec
   */
  beforeEach(function() {
    module('projects.fanMenu');

    /**
     * Inject the service
     */
    inject(function(_FanMenuService_) {
      fanMenuService = _FanMenuService_;
    });
  });

  it('Service loaded', function() {
    expect(fanMenuService).not.toBe(null);
  });

  it('Say hello', function() {
    expect(fanMenuService.sayHello()).toEqual('Hello from the fan menu');
  });
});
