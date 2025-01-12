import { Text } from '../..';

export default {
    title: 'Components/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
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
            defaultValue: '#2A2C35',
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
};


export const Default = () => (
    <Text
        variant="heading-1"
        alignment="left"
        color="#2A2C35"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
);

// Combined Story
export const AllVariants = () => {
    return (
        <>
            {/* Body-1 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="body-1" color="#2A2C35">
                    body-1
                </Text>
            </div>

            {/* Body-2 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="body-2" color="#2A2C35">
                    body-2
                </Text>
            </div>

            {/* Body-3 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="body-3" color="#2A2C35">
                    body-3
                </Text>
            </div>

            {/* Button-1 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="button-1" color="#2A2C35">
                    Button-1
                </Text>
            </div>

            {/* Button-2 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="button-2" color="#2A2C35">
                    Button-2
                </Text>
            </div>

            {/* Heading-1 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-1" color="#2A2C35">
                    Heading-1
                </Text>
            </div>

            {/* Heading-2 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-2" color="#2A2C35">
                    Heading-2
                </Text>
            </div>

            {/* Heading-3 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-3" color="#2A2C35">
                    Heading-3
                </Text>
            </div>

            {/* Heading-4 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-4" color="#2A2C35">
                    Heading-4
                </Text>
            </div>

            {/* Heading-5 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-5" color="#2A2C35">
                    Heading-5
                </Text>
            </div>

            {/* Heading-6 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="heading-6" color="#2A2C35">
                    Heading-6
                </Text>
            </div>

            {/* Label-1 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="label-1" color="#2A2C35">
                    label-1
                </Text>
            </div>

            {/* Label-2 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="label-2" color="#2A2C35">
                    label-2
                </Text>
            </div>

            {/* Subtitle-1 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="subtitle-1" color="#2A2C35">
                    subtitle-1
                </Text>
            </div>

            {/* Subtitle-2*/}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="subtitle-2" color="#2A2C35">
                    subtitle-2
                </Text>
            </div>

            {/* Subtitle-3 */}
            <div style={{ marginBottom: '20px' }}>
                <Text variant="subtitle-3" color="#2A2C35">
                    subtitle-3
                </Text>
            </div>
        </>
    );
};


export const withTailwind = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <Text className="grv-text-[#f0a000] grv-underline" variant="heading-1">
                With extensible tailwind classes
            </Text>
        </div>
    );
};

export const withTailwindAndVariant = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <Text variant="heading-1" className="grv-text-error-700">
                with tailwind classes and variant
            </Text>
        </div>
    );
};

export const withTailwindAndVariant2 = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <Text
                variant="heading-1"
                className="grv-text-[#a0c] grv-text-[10px] grv-font-light"
            >
                with tailwind classes and variant
            </Text>
        </div>
    );
};

export const AlignmentCenter = () => (
    <Text
        variant="body-1"
        alignment="center"
        color="#2A2C35"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
);

// Alignment Left
export const AlignmentLeft = () => (
    <Text
        variant="body-1"
        alignment="left"
        color="#2A2C35"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </Text>
);

// Alignment Right
export const AlignmentRight = () => (
    <Text
        variant="body-1"
        alignment="right"
        color="#2A2C35"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </Text>
);

// Alignment Justify
export const AlignmentJustify = () => (
    <Text
        variant="body-1"
        alignment="justify"
        color="#2A2C35"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </Text>
);

// Max Lines Example
export const MaxLinesEllipsis = () => (
    <Text
        variant="body-2"
        alignment="left"
        color="#2A2C35"
        maxLines={2}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </Text>
);

// As Child Example
export const AsChildExample = () => (
    <Text
        variant="body-1"
        asChild={true}
        alignment="center"
        color="#2A2C35"
    >
        <h1>This is heading 1</h1>
    </Text>
);