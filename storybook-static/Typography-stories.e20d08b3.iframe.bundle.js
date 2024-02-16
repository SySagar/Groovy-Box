'use strict';
(self.webpackChunkenigma_ui_kit = self.webpackChunkenigma_ui_kit || []).push([
  [516],
  {
    './stories/Typography.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AlignmentCenterStory: () => AlignmentCenterStory,
          AlignmentJustifyStory: () => AlignmentJustifyStory,
          AlignmentLeftStory: () => AlignmentLeftStory,
          AlignmentRightStory: () => AlignmentRightStory,
          AllVariants: () => AllVariants,
          Body2MaxLinesEllipsis: () => Body2MaxLinesEllipsis,
          ColorStory: () => ColorStory,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          asChild: () => asChild,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/react/index.js');
      var _lib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./lib/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Text',
          component: _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: {
                type: 'select',
                options: [
                  'body-1',
                  'body-2',
                  'body-3',
                  'button-1',
                  'button-2',
                  'button-3',
                  'heading-1',
                  'heading-2',
                  'heading-3',
                  'heading-4',
                  'heading-5',
                  'heading-6',
                  'label-1',
                  'label-2',
                  'label-2-strong',
                  'label-3',
                  'subtitle-1',
                  'subtitle-2',
                  'subtitle-3',
                ],
              },
              defaultValue: 'body-1',
              description: 'The variant of the Text component.',
            },
            alignment: {
              control: {
                type: 'select',
                options: ['left', 'right', 'center', 'justify'],
              },
              defaultValue: 'left',
              description: 'The text alignment of the Text component.',
            },
            color: {
              control: 'color',
              defaultValue: '#35FF1F',
              description: 'The color of the text in the Text component.',
            },
            asChild: {
              control: 'text',
              description:
                'The type of child element to render within the Text component.',
            },
            children: {
              control: 'text',
              description: 'The text content of the Text component.',
            },
          },
        },
        Template = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
            { ...args }
          );
      Template.displayName = 'Template';
      const Default = Template.bind({});
      Default.args = {
        variant: 'heading-1',
        alignment: 'left',
        color: '#35FF1F',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      };
      const AllVariants = () =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'body-1',
                      color: '#35FF1F',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'body-2',
                      color: '#35FF1F',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'body-3',
                      color: '#35FF1F',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'button-1',
                      color: '#35FF1F',
                      children: 'Click Me',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-1',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-2',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-3',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-4',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-5',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'heading-6',
                      color: '#35FF1F',
                      children: 'Lorem Ipsum',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'label-1',
                      color: '#35FF1F',
                      children: 'Label Text',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'label-2',
                      color: '#35FF1F',
                      children: 'Label Text',
                    }
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  style: { marginBottom: '20px' },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _lib__WEBPACK_IMPORTED_MODULE_1__.xv,
                    {
                      variant: 'subtitle-1',
                      color: '#35FF1F',
                      children: 'Subtitle Text',
                    }
                  ),
                }),
              ],
            }
          ),
        ColorStory = Template.bind({});
      ColorStory.args = {
        variant: 'body-1',
        alignment: 'center',
        color: '#2a52be',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      };
      const AlignmentCenterStory = Template.bind({});
      AlignmentCenterStory.args = {
        variant: 'body-1',
        alignment: 'center',
        color: '#35FF1F',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      };
      const AlignmentLeftStory = Template.bind({});
      AlignmentLeftStory.args = {
        variant: 'body-1',
        alignment: 'left',
        color: '#35FF1F',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      };
      const AlignmentRightStory = Template.bind({});
      AlignmentRightStory.args = {
        variant: 'body-1',
        alignment: 'right',
        color: '#35FF1F',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      };
      const AlignmentJustifyStory = Template.bind({});
      AlignmentJustifyStory.args = {
        variant: 'body-1',
        alignment: 'justify',
        color: '#35FF1F',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      };
      const Body2MaxLinesEllipsis = Template.bind({});
      Body2MaxLinesEllipsis.args = {
        variant: 'body-2',
        alignment: 'left',
        color: '#35FF1F',
        width: 400,
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        maxLines: 2,
      };
      const asChild = Template.bind({});
      asChild.args = {
        variant: 'body-1',
        asChild: !0,
        alignment: 'center',
        color: '#35FF1F',
        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'h1',
          { children: 'This is heading 1' }
        ),
      };
      const __namedExportsOrder = [
        'Default',
        'AllVariants',
        'ColorStory',
        'AlignmentCenterStory',
        'AlignmentLeftStory',
        'AlignmentRightStory',
        'AlignmentJustifyStory',
        'Body2MaxLinesEllipsis',
        'asChild',
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Text {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (AllVariants.parameters = {
          ...AllVariants.parameters,
          docs: {
            ...AllVariants.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <>\r\n      {/* Body-1 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="body-1" color="#35FF1F">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Body-2 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="body-2" color="#35FF1F">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Body-3 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="body-3" color="#35FF1F">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Button-1 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="button-1" color="#35FF1F">\r\n          Click Me\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-1 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-1" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-2 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-2" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-3 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-3" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-4 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-4" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-5 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-5" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Heading-6 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="heading-6" color="#35FF1F">\r\n          Lorem Ipsum\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Label-1 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="label-1" color="#35FF1F">\r\n          Label Text\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Label-2 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="label-2" color="#35FF1F">\r\n          Label Text\r\n        </Text>\r\n      </div>\r\n\r\n      {/* Subtitle-1 */}\r\n      <div style={{\n      marginBottom: \'20px\'\n    }}>\r\n        <Text variant="subtitle-1" color="#35FF1F">\r\n          Subtitle Text\r\n        </Text>\r\n      </div>\r\n    </>;\n}',
              ...AllVariants.parameters?.docs?.source,
            },
          },
        }),
        (ColorStory.parameters = {
          ...ColorStory.parameters,
          docs: {
            ...ColorStory.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...ColorStory.parameters?.docs?.source,
            },
          },
        }),
        (AlignmentCenterStory.parameters = {
          ...AlignmentCenterStory.parameters,
          docs: {
            ...AlignmentCenterStory.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...AlignmentCenterStory.parameters?.docs?.source,
            },
          },
        }),
        (AlignmentLeftStory.parameters = {
          ...AlignmentLeftStory.parameters,
          docs: {
            ...AlignmentLeftStory.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...AlignmentLeftStory.parameters?.docs?.source,
            },
          },
        }),
        (AlignmentRightStory.parameters = {
          ...AlignmentRightStory.parameters,
          docs: {
            ...AlignmentRightStory.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...AlignmentRightStory.parameters?.docs?.source,
            },
          },
        }),
        (AlignmentJustifyStory.parameters = {
          ...AlignmentJustifyStory.parameters,
          docs: {
            ...AlignmentJustifyStory.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...AlignmentJustifyStory.parameters?.docs?.source,
            },
          },
        }),
        (Body2MaxLinesEllipsis.parameters = {
          ...Body2MaxLinesEllipsis.parameters,
          docs: {
            ...Body2MaxLinesEllipsis.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...Body2MaxLinesEllipsis.parameters?.docs?.source,
            },
          },
        }),
        (asChild.parameters = {
          ...asChild.parameters,
          docs: {
            ...asChild.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...asChild.parameters?.docs?.source,
            },
          },
        });
      try {
        (Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Typography.stories.tsx#Default'] =
              {
                docgenInfo: Default.__docgenInfo,
                name: 'Default',
                path: 'stories/Typography.stories.tsx#Default',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ColorStory.displayName = 'ColorStory'),
          (ColorStory.__docgenInfo = {
            description: '',
            displayName: 'ColorStory',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#ColorStory'
            ] = {
              docgenInfo: ColorStory.__docgenInfo,
              name: 'ColorStory',
              path: 'stories/Typography.stories.tsx#ColorStory',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AlignmentCenterStory.displayName = 'AlignmentCenterStory'),
          (AlignmentCenterStory.__docgenInfo = {
            description: '',
            displayName: 'AlignmentCenterStory',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#AlignmentCenterStory'
            ] = {
              docgenInfo: AlignmentCenterStory.__docgenInfo,
              name: 'AlignmentCenterStory',
              path: 'stories/Typography.stories.tsx#AlignmentCenterStory',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AlignmentLeftStory.displayName = 'AlignmentLeftStory'),
          (AlignmentLeftStory.__docgenInfo = {
            description: '',
            displayName: 'AlignmentLeftStory',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#AlignmentLeftStory'
            ] = {
              docgenInfo: AlignmentLeftStory.__docgenInfo,
              name: 'AlignmentLeftStory',
              path: 'stories/Typography.stories.tsx#AlignmentLeftStory',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AlignmentRightStory.displayName = 'AlignmentRightStory'),
          (AlignmentRightStory.__docgenInfo = {
            description: '',
            displayName: 'AlignmentRightStory',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#AlignmentRightStory'
            ] = {
              docgenInfo: AlignmentRightStory.__docgenInfo,
              name: 'AlignmentRightStory',
              path: 'stories/Typography.stories.tsx#AlignmentRightStory',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AlignmentJustifyStory.displayName = 'AlignmentJustifyStory'),
          (AlignmentJustifyStory.__docgenInfo = {
            description: '',
            displayName: 'AlignmentJustifyStory',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#AlignmentJustifyStory'
            ] = {
              docgenInfo: AlignmentJustifyStory.__docgenInfo,
              name: 'AlignmentJustifyStory',
              path: 'stories/Typography.stories.tsx#AlignmentJustifyStory',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Body2MaxLinesEllipsis.displayName = 'Body2MaxLinesEllipsis'),
          (Body2MaxLinesEllipsis.__docgenInfo = {
            description: '',
            displayName: 'Body2MaxLinesEllipsis',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/Typography.stories.tsx#Body2MaxLinesEllipsis'
            ] = {
              docgenInfo: Body2MaxLinesEllipsis.__docgenInfo,
              name: 'Body2MaxLinesEllipsis',
              path: 'stories/Typography.stories.tsx#Body2MaxLinesEllipsis',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (asChild.displayName = 'asChild'),
          (asChild.__docgenInfo = {
            description: '',
            displayName: 'asChild',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Typography.stories.tsx#asChild'] =
              {
                docgenInfo: asChild.__docgenInfo,
                name: 'asChild',
                path: 'stories/Typography.stories.tsx#asChild',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
