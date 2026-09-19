import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Button from './button';

describe('Button Component', () => {
  it('renders primary button correctly with label', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <Button label="Click Me" onPress={() => {}} />
      );
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Click Me');
  });

  it('renders outline and secondary variants', async () => {
    let outlineComp: any;
    let secComp: any;
    await ReactTestRenderer.act(async () => {
      outlineComp = ReactTestRenderer.create(
        <Button label="Outline" variant="outline" onPress={() => {}} />
      );
      secComp = ReactTestRenderer.create(
        <Button label="Secondary" variant="secondary" onPress={() => {}} />
      );
    });
    expect(outlineComp.toJSON()).toBeTruthy();
    expect(secComp.toJSON()).toBeTruthy();
  });

  it('renders loading state indicator', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <Button label="Loading" loading={true} onPress={() => {}} />
      );
    });
    const root = component.root;
    const indicator = root.findByProps({ testID: 'button-loading-indicator' });
    expect(indicator).toBeTruthy();
  });

  it('handles disabled state', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <Button label="Disabled" disabled={true} onPress={() => {}} />
      );
    });
    expect(component.toJSON()).toBeTruthy();
  });
});
