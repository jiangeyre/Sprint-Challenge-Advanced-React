import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

afterEach(rtl.cleanup);

test('App renders without crashing.', () => {
  rtl.render(<App />);
});

test('Toggle exists in the doc.', () => {
  const cont = rtl.render(<App />);
  const toggle = cont.queryByText(/toggle dark mode/i);

  expect(toggle).toBeInTheDocument();
});

test('Toggle fires successfully.', () => {
  const container = rtl.render(<App />);
  const toggle = container.queryByText(/toggle dark mode/i);

  rtl.fireEvent.click(toggle);
});

it('Page contains the text - players.', () => {
  const head = rtl.render(<App />);
  expect(head.getByText(/players/i));
});