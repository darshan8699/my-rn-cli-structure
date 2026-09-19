import React from 'react';
import { Text } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import AppModal from './modal';

describe('Modal Component', () => {
  it('renders correctly when visible with title and children', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppModal visible={true} onClose={() => {}} title="Test Dialog">
          <Text>Modal Body Content</Text>
        </AppModal>,
      );
    });
    expect(component.toJSON()).toBeTruthy();
    expect(JSON.stringify(component.toJSON())).toContain('Test Dialog');
    expect(JSON.stringify(component.toJSON())).toContain('Modal Body Content');
  });

  it('renders action buttons when provided', async () => {
    let component: any;
    await ReactTestRenderer.act(async () => {
      component = ReactTestRenderer.create(
        <AppModal
          visible={true}
          onClose={() => {}}
          title="Confirm Action"
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
        >
          <Text>Are you sure?</Text>
        </AppModal>,
      );
    });
    expect(JSON.stringify(component.toJSON())).toContain('Confirm');
    expect(JSON.stringify(component.toJSON())).toContain('Cancel');
  });
});
