const createTypographyClass = (
  className,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing = 'normal',
) => ({
  [className]: {
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily: 'Inter, sans-serif',
    letterSpacing,
  },
});

export const groovyFontFamily = {
  Inter: ['Inter', 'sans-serif'],
};

export const customTypographyClasses = {
  ...createTypographyClass('.typo-body-1', '16px', '24px', '400'),
  ...createTypographyClass('.typo-body-2', '14px', '20px', '400'),
  ...createTypographyClass('.typo-body-3', '12px', '16px', '400'),
  ...createTypographyClass('.typo-button-1', '16px', '26px', '500', '0.1px'),
  ...createTypographyClass('.typo-button-2', '14px', '20px', '500'),
  ...createTypographyClass('.typo-button-3', '12px', '16px', '500'),
  ...createTypographyClass('.typo-heading-1', '28px', '36px', '400'),
  ...createTypographyClass('.typo-heading-2', '24px', '30px', '600'),
  ...createTypographyClass('.typo-heading-3', '20px', '26px', '600'),
  ...createTypographyClass('.typo-heading-4', '18px', '24px', '600'),
  ...createTypographyClass('.typo-heading-5', '16px', '22px', '600'),
  ...createTypographyClass('.typo-heading-6', '14px', '20px', '600'),
  ...createTypographyClass('.typo-label-1', '14px', '20px', '400', '-0.24px'),
  ...createTypographyClass('.typo-label-2', '12px', '16px', '400'),
  ...createTypographyClass('.typo-label-2-strong', '12px', '16px', '500'),
  ...createTypographyClass('.typo-label-3', '10px', '12px', '400'),
  ...createTypographyClass('.typo-subtitle-1', '16px', '22px', '500', '0.1px'),
  ...createTypographyClass('.typo-subtitle-2', '14px', '20px', '500'),
  ...createTypographyClass('.typo-subtitle-3', '12px', '16px', '500'),
};
