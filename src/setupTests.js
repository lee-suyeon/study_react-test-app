// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

// before test
beforeAll(() => server.listen());

// 다른 테스트에 영향X
afterEach(() => server.resetHandlers());

// 테스트 종료 후 서버 clean up
afterEach(() => server.close());