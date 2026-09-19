import { StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, Spacing, rf } from '../common/theme';

const styles = StyleSheet.create({
  tabIconEmoji: {
    fontSize: rf(20),
  },
  tabBarLabel: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.medium,
    marginTop: 2,
  },
  tabBar: {
    backgroundColor: Colors.surface,
    borderTopColor: Colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: Spacing.xs,
  },
});

export default styles;
