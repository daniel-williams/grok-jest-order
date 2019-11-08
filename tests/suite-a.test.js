const { logger, task } = require('./util');

describe('suite A', () => {
  logger.log('suite A:d');

  beforeAll(() => logger.log('suite A:d:ba'));
  beforeEach(() => logger.log('suite A:d:be'));
  afterEach(() => logger.log('suite A:d:ae'));
  afterAll(() => logger.log('suite A:d:aa'));
  
  test('A:d:t1', async () => {
    const result = task();
    logger.log('suite A:d:t1');
    await expect(result).resolves.toBe(true);
  });

  test('A:d:t2', async () => {
    const result = task();
    logger.log('suite A:d:t2');
    await expect(result).resolves.toBe(true);
  });

  describe('suite A:d1', () => {
    logger.log('suite A:d1');

    beforeAll(() => logger.log('suite A:d1:ba'));
    beforeEach(() => logger.log('suite A:d1:be'));
    afterEach(() => logger.log('suite A:d1:ae'));
    afterAll(() => logger.log('suite A:d1:aa'));

    test('A:d1:t1', async () => {
      const result = task();
      logger.log('suite A:d1:t1');
    await expect(result).resolves.toBe(true);
    });

    test('A:d1:t2', async () => {
      const result = task();
      logger.log('suite A:d1:t2');
    await expect(result).resolves.toBe(true);
    });
  });

  test('A:d:t3', async () => {
    const result = task();
    logger.log('suite A:d:t3');
    await expect(result).resolves.toBe(true);
  });

  describe('suite A:d2', () => {
    logger.log('suite A:d2');

    test('A:d2:t1', async () => {
      const result = task();
      logger.log('suite A:d2:t1');
    await expect(result).resolves.toBe(true);
    });

    test('A:d2:t2', async () => {
      const result = task();
      logger.log('suite A:d2:t2');
    await expect(result).resolves.toBe(true);
    });
  });

  test('delay', async () => {
    await expect(task(2000)).resolves.toBe(true);
  });
});
