import { PreparationTimePipe } from './util-preparation-time.pipe';

describe('Preparation time pipe', () => {
  let pipe: PreparationTimePipe;

  beforeEach(() => {
    pipe = new PreparationTimePipe();
  });

  test('should format preparation time', () => {
    expect(pipe.transform(75)).toBe('1h 15m');
  });

  test('should not display hours', () => {
    expect(pipe.transform(30)).toBe('30m');
  });

  test('should throw error if time is smaller than 1', () => {
    const transformNegativeTime = () => {
      pipe.transform(-10);
    };

    expect(transformNegativeTime).toThrow();
  });
});
