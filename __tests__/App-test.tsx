import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {store} from '../store/store';

import App from '../App';

it('renders correctly', () => {
    const component = (
      <Provider store={store}>
        <App />
      </Provider>
    );

    render(component);
});
