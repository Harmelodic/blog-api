import categoryService from '../../src/category/service';

const mockData = [
  'Category 1',
  'Category 2',
];

jest.mock('../../src/category/repository', () => ({
  fetchAll: async () => mockData,
}));

describe('Category Service Tests', () => {
  it('returns all categories', () => {
    categoryService.fetchAll().then((received) => {
      expect(received).toEqual(mockData);
    });
  });
});
