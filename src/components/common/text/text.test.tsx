import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AppText from './text';

describe('Text Component', () => {
  it('renders correctly with default body variant', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(<AppText>Hello World</AppText>);
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Hello World');
  });

  it('renders heading variants', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppText variant="h1" weight="bold">
          Heading 1
        </AppText>,
      );
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Heading 1');
  });

  it('renders custom color and alignment', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppText color="#EF4444" align="center">
          Centered Error
        </AppText>,
      );
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Centered Error');
  });
});
