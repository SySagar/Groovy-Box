'use strict';
(self.webpackChunkenigma_ui_kit = self.webpackChunkenigma_ui_kit || []).push([
  [463],
  {
    './stories/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colors: () => Colors,
          Sizes: () => Sizes,
          Variants: () => Variants,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/react/index.js');
      var _lib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./lib/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Button',
          component: _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
          argTypes: {
            variant: {
              control: { type: 'radio', options: ['filled', 'outlined'] },
            },
            color: {
              control: { type: 'radio', options: ['primary', 'secondary'] },
            },
            size: { control: { type: 'radio', options: ['sm', 'md', 'lg'] } },
          },
        },
        Colors = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                  { ...args, color: 'primary', children: 'primary' }
                ),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                  { ...args, color: 'secondary', children: 'secondary' }
                ),
              }),
            ],
          });
      (Colors.displayName = 'Colors'), (Colors.args = { variant: 'filled' });
      const Variants = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          },
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                { ...args, variant: 'outlined', children: 'Outlined' }
              ),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                { ...args, variant: 'filled', children: 'Filled' }
              ),
            }),
          ],
        });
      (Variants.displayName = 'Variants'),
        (Variants.args = { color: 'primary' });
      const Sizes = (args) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          },
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                { ...args, size: 'sm', children: 'Small' }
              ),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                { ...args, size: 'md', children: 'Medium' }
              ),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib__WEBPACK_IMPORTED_MODULE_1__.zx,
                { ...args, size: 'lg', children: 'Large' }
              ),
            }),
          ],
        });
      (Sizes.displayName = 'Sizes'),
        (Sizes.args = { variant: 'filled', color: 'primary' });
      const __namedExportsOrder = ['Colors', 'Variants', 'Sizes'];
      (Colors.parameters = {
        ...Colors.parameters,
        docs: {
          ...Colors.parameters?.docs,
          source: {
            originalSource:
              "(args: ButtonProps) => <div style={{\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  alignItems: 'center',\n  gap: '1rem'\n}}>\r\n    <div>\r\n      <Button {...args} color=\"primary\">\r\n        primary\r\n      </Button>\r\n    </div>\r\n    <div>\r\n      <Button {...args} color=\"secondary\">\r\n        secondary\r\n      </Button>\r\n    </div>\r\n  </div>",
            ...Colors.parameters?.docs?.source,
          },
        },
      }),
        (Variants.parameters = {
          ...Variants.parameters,
          docs: {
            ...Variants.parameters?.docs,
            source: {
              originalSource:
                "(args: ButtonProps) => <div style={{\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  alignItems: 'center',\n  gap: '1rem'\n}}>\r\n    <div>\r\n      <Button {...args} variant=\"outlined\">\r\n        Outlined\r\n      </Button>\r\n    </div>\r\n    <div>\r\n      <Button {...args} variant=\"filled\">\r\n        Filled\r\n      </Button>\r\n    </div>\r\n  </div>",
              ...Variants.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "(args: ButtonProps) => <div style={{\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  alignItems: 'center',\n  gap: '1rem'\n}}>\r\n    <div>\r\n      <Button {...args} size=\"sm\">\r\n        Small\r\n      </Button>\r\n    </div>\r\n    <div>\r\n      <Button {...args} size=\"md\">\r\n        Medium\r\n      </Button>\r\n    </div>\r\n    <div>\r\n      <Button {...args} size=\"lg\">\r\n        Large\r\n      </Button>\r\n    </div>\r\n  </div>",
              ...Sizes.parameters?.docs?.source,
            },
          },
        });
      try {
        (Colors.displayName = 'Colors'),
          (Colors.__docgenInfo = {
            description: '',
            displayName: 'Colors',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"filled"' },
                    { value: '"outlined"' },
                    { value: '"text"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Button.stories.tsx#Colors'] = {
              docgenInfo: Colors.__docgenInfo,
              name: 'Colors',
              path: 'stories/Button.stories.tsx#Colors',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Variants.displayName = 'Variants'),
          (Variants.__docgenInfo = {
            description: '',
            displayName: 'Variants',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"filled"' },
                    { value: '"outlined"' },
                    { value: '"text"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Button.stories.tsx#Variants'] = {
              docgenInfo: Variants.__docgenInfo,
              name: 'Variants',
              path: 'stories/Button.stories.tsx#Variants',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Sizes.displayName = 'Sizes'),
          (Sizes.__docgenInfo = {
            description: '',
            displayName: 'Sizes',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"filled"' },
                    { value: '"outlined"' },
                    { value: '"text"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Button.stories.tsx#Sizes'] = {
              docgenInfo: Sizes.__docgenInfo,
              name: 'Sizes',
              path: 'stories/Button.stories.tsx#Sizes',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
