import { test, expect } from 'bun:test';

import INVOICES from './invocies.json';
import PLAYS from './plays.json';
import statement from './statement';

const expectedText = `청구 내역 (고객명: BigCo)
  Hamlet: $650.00 (55석)
  As You Like It: $580.00 (35석)
  Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점`

test('statement', () => {


    const result = statement(INVOICES[0], PLAYS);
    expect(result).toBe(expectedText);

    console.log(result)
});