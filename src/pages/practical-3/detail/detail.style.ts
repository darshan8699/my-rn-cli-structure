import { StyleSheet } from 'react-native';
import {
  BorderRadius,
  Colors,
  FontSize,
  Spacing,
  verticalScale,
} from '../../../common/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: verticalScale(10),
    minHeight: verticalScale(54),
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backIconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  backIcon: {
    fontSize: FontSize.lg,
    color: Colors.primary,
    fontWeight: '700',
  },
  headerBarTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  headerPlaceholder: {
    width: 40,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: verticalScale(40),
  },
  headerCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: verticalScale(16),
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: verticalScale(4),
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    marginBottom: verticalScale(12),
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  badge: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: verticalScale(5),
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    color: Colors.primary,
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
  legendCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: Colors.border,
  },
  legendTitle: {
    fontSize: FontSize.xs,
    fontWeight: '700',
    color: Colors.textMuted,
    marginBottom: verticalScale(8),
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  legendColorBox: {
    width: 14,
    height: 14,
    borderRadius: 4,
    borderWidth: 1,
  },
  legendText: {
    fontSize: FontSize.xs,
    color: Colors.text,
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
  },
  box: {
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    minHeight: verticalScale(80),
    marginBottom: verticalScale(12),
  },
  // Color State 0 (Default / As it is)
  boxState0: {
    backgroundColor: Colors.white,
    borderColor: '#CBD5E1',
  },
  boxText0: {
    color: '#1E293B',
  },
  // Color State 1 (First Click - Indigo)
  boxState1: {
    backgroundColor: '#4F46E5',
    borderColor: '#4338CA',
  },
  boxText1: {
    color: Colors.white,
  },
  // Color State 2 (Second Click - Emerald)
  boxState2: {
    backgroundColor: '#10B981',
    borderColor: '#059669',
  },
  boxText2: {
    color: Colors.white,
  },
  boxValue: {
    fontSize: FontSize.lg,
    fontWeight: '800',
    marginVertical: 2,
  },
  buttonRow: {
    flexDirection: 'column',
    gap: Spacing.md,
    marginTop: verticalScale(10),
  },
});
