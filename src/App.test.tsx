import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);

  // Assuming App renders a component with text 'Hello, world!'
  const helloWorldElement = getByText(/Hello World!/i);
  expect(helloWorldElement).toBeInTheDocument();
});
