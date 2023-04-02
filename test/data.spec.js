import { filterRole } from '../src/data.js';
import { createRolesCards, getRoles, createDiv, createChampionsCards} from '../src/main.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('filterRole', () => {
  it('is a function', () => {
    expect(typeof filterRole).toBe('function');
  });

  it('returns `filterRole`', () => {
    expect(filterRole()).toBe('OMG');
  });
});
