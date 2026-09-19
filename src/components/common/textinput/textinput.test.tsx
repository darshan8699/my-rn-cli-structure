import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AppTextInput from './textinput';

describe('TextInput Component', () => {
  it('renders input with label and placeholder', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppTextInput
          label="Email"
          placeholder="Enter email"
          value=""
          onChangeText={() => {}}
        />,
      );
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Email');
    expect(JSON.stringify(component.toJSON())).toContain('Enter email');
  });

  it('renders error message when error prop is provided', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppTextInput
          label="Password"
          value="123"
          error="Password too short"
          onChangeText={() => {}}
        />,
      );
    });
    const errorText = component.root.findByProps({
      testID: 'textinput-error-text',
    });
    expect(errorText).toBeTruthy();
    expect(errorText.props.children).toBe('Password too short');
  });

  it('renders password toggle button when secureTextEntry is true', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppTextInput
          label="Password"
          value="secret"
          secureTextEntry={true}
          onChangeText={() => {}}
        />,
      );
    });
    const toggle = component.root.findByProps({
      testID: 'textinput-password-toggle',
    });
    expect(toggle).toBeTruthy();
  });
});
