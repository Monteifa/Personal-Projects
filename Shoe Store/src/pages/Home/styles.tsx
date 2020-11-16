import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scrollHeader: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    ...FONTS.largeTitleBold,
  },

  trendingContainer: {
    height: 240,
    marginTop: SIZES.radius,
  },

  recentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: SIZES.padding,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  },

  recentContainerShadow: {
    elevation: 10,
  },

  recentCategory: {
    width: 70,
    marginLeft: SIZES.base,
  },

  label: {
    width: '100%',
    height: '100%',
  },

  itemList: {
    flex: 1,
    paddingBottom: SIZES.padding,
  },

  blur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeModalButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  modalContainer: {
    justifyContent: 'center',
    width: '85%',
    borderRadius: 10,
  },

  imageModal: {
    width: '90%',
    height: 170,
    transform: [{ rotate: '-15deg' }],
  },

  itemName: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body2,
  },

  itemType: {
    marginTop: SIZES.base / 2,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body3,
  },

  itemPrice: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h1,
  },
  addToBagButton: {
    width: '100%',
    height: 70,
    marginTop: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  addToBagButtonText: {
    color: COLORS.white,
    ...FONTS.largeTitleBold,
  },
});

export default styles;
