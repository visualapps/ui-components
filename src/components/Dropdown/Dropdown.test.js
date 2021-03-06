import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';

import 'jest-styled-components';
import { withTheme } from '../../utils/theme';

import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  const items = [
    {
      value: 'first-thing',
      label: 'First Thing',
    },
    {
      value: 'second-thing',
      label: 'Second Thing',
    },
    {
      value: 'third-thing',
      label: 'Super long thing, this should get truncated',
    },
  ];

  describe('snapshots', () => {
    it('renders default', () => {
      const tree = renderer
        .create(withTheme(<Dropdown items={items} />))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders a placeholder', () => {
      const tree = renderer
        .create(
          withTheme(<Dropdown placeholder="Select an item" items={items} />)
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('is extendable', () => {
    // Make sure a styled-component gets exported
    expect(typeof styled(Dropdown)).toEqual('function');
    expect(Dropdown.displayName).toEqual('Dropdown');
  });
});
