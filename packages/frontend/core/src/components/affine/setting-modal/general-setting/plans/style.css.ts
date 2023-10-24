import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
});
export const recurringRadioGroup = style({
  width: '256px',
});

export const radioButtonDiscount = style({
  marginLeft: '4px',
  color: 'var(--affine-primary-color)',
  fontWeight: 400,
});

export const planCardsWrapper = style({
  marginLeft: 'calc(-1 * var(--setting-modal-gap-x))',
  paddingLeft: 'var(--setting-modal-gap-x)',
  paddingRight: 'calc(var(--setting-modal-gap-x) + 300px)',
  width: 'var(--setting-modal-width)',
  marginTop: '24px',
  display: 'flex',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
});

export const planCard = style({
  minHeight: '426px',
  minWidth: '258px',
  borderRadius: '16px',
  padding: '20px',
  border: '1px solid var(--affine-border-color)',
  position: 'relative',

  selectors: {
    '&:not(:last-child)': {
      marginRight: '16px',
    },
    '&::before': {
      content: '',
      position: 'absolute',
      right: 'calc(100% + var(--setting-modal-gap-x))',
      scrollSnapAlign: 'start',
    },
  },
});

export const currentPlanCard = style([
  planCard,
  {
    borderWidth: '2px',
    borderColor: 'var(--affine-primary-color)',
    boxShadow: 'var(--affine-shadow-2)',
  },
]);

export const discountLabel = style({
  color: 'var(--affine-primary-color)',
  marginLeft: '8px',
  lineHeight: '20px',
  fontSize: 'var(--affine-font-xs)',
  fontWeight: 500,
  padding: '0 4px',
  backgroundColor: 'var(--affine-blue-50)',
  borderRadius: '4px',
  display: 'inline-block',
  height: '100%',
});

export const planTitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  fontWeight: 600,
});

export const planPrice = style({
  fontSize: 'var(--affine-font-h-5)',
  marginRight: '8px',
});

export const planPriceDesc = style({
  color: 'var(--affine-text-secondary-color)',
  fontSize: 'var(--affine-font-sm)',
});

export const planAction = style({
  width: '100%',
});

export const planBenefits = style({
  marginTop: '20px',
  fontSize: 'var(--affine-font-xs)',
});

export const planBenefit = style({
  display: 'flex',
  selectors: {
    '&:not(:last-child)': {
      marginBottom: '8px',
    },
  },
});

export const planBenefitIcon = style({
  display: 'inline-block',
  marginRight: '8px',
});

export const allPlansLink = style({
  display: 'block',
  marginTop: '36px',
  color: 'var(--affine-primary-color)',
  background: 'transparent',
  borderColor: 'transparent',
  fontSize: 'var(--affine-font-xs)',
});
