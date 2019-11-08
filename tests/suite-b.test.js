const { logger, task } = require('./util');

describe('suite B', () => {
  logger.log('suite B:d');

  beforeAll(() => logger.log('suite B:d:ba'));
  beforeEach(() => logger.log('suite B:d:be'));
  afterEach(() => logger.log('suite B:d:ae'));
  afterAll(() => logger.log('suite B:d:aa'));
  
  test('suite B:d:t1', async () => {
    const result = task();
    logger.log('suite B:d:t1');
    await expect(result).resolves.toBe(true);
  });

  test('suite B:d:t2', async () => {
    const result = task();
    logger.log('suite B:d:t2');
    await expect(result).resolves.toBe(true);
  });

  describe('suite B:d1', () => {
    logger.log('suite B:d1');

    beforeAll(() => logger.log('suite B:d1:ba'));
    beforeEach(() => logger.log('suite B:d1:be'));
    afterEach(() => logger.log('suite B:d1:ae'));
    afterAll(() => logger.log('suite B:d1:aa'));

    test('suite B:d1:t1', async () => {
      const result = task();
      logger.log('suite B:d1:t1');
    await expect(result).resolves.toBe(true);
    });

    test('suite B:d1:t2', async () => {
      const result = task();
      logger.log('suite B:d1:t2');
    await expect(result).resolves.toBe(true);
    });
  });

  test('suite B:d:t3', async () => {
    const result = task();
    logger.log('suite B:d:t3');
    await expect(result).resolves.toBe(true);
  });

  describe('suite B:d2', () => {
    logger.log('suite B:d2');

    test('suite B:d2:t1', async () => {
      const result = task();
      logger.log('suite B:d2:t1');
    await expect(result).resolves.toBe(true);
    });

    test('suite B:d2:t2', async () => {
      const result = task();
      logger.log('suite B:d2:t2');
    await expect(result).resolves.toBe(true);
    });
  });

  test('delay', async () => {
    await expect(task(2000)).resolves.toBe(true);
  });
});
