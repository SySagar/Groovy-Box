import { Story } from '@storybook/react';
import { withGlobalStyles } from '../../../.storybook/decorator';

import { Chip, ChipProps } from '../..';
import { Avatar, AvatarImage, AvatarFallback } from '../..';
import { Star, Mail } from 'lucide-react';

const ChipExample = (props: ChipProps) => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip {...props}>Default</Chip>
  </div>
);

const ChipVariants = () => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip variant="filled">Filled</Chip>
    <Chip variant="outlined">Outlined</Chip>
  </div>
);

const ChipSizes = () => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip size="sm">Small</Chip>
    <Chip size="md">Medium</Chip>
    <Chip size="lg">Large</Chip>
  </div>
);

const ChipInteractions = () => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip clickable onClick={() => alert('Clicked!')}>
      Clickable
    </Chip>
    <Chip onDelete={() => alert('Delete clicked!')}>Deletable</Chip>
    <Chip href="https://ui.soumyasagar.in" target="_blank">
      Link
    </Chip>
  </div>
);

const ChipWithIcons = () => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip
      beforeChildren={
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar Image"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      }
    >
      User Chip
    </Chip>
    <Chip
      variant="outlined"
      afterChildren={<Star className="grv-h-4 grv-w-4" />}
    >
      Starred
    </Chip>
    <Chip
      beforeChildren={<Mail className="grv-h-4 grv-w-4" />}
      afterChildren={
        <span className="grv-bg-primary-foreground grv-text-primary grv-rounded-full grv-px-2 grv-text-sm">
          99+
        </span>
      }
    >
      Inbox
    </Chip>
  </div>
);

export default {
  title: 'components/Chip',
  component: ChipExample,
  decorators: [withGlobalStyles],
};

export const Default: Story<ChipProps> = (args) => <ChipExample {...args} />;
Default.args = {
  children: 'Default Chip',
  variant: 'filled',
  size: 'md',
};

export const Variants = () => <ChipVariants />;
export const Sizes = () => <ChipSizes />;
export const Interactions = () => <ChipInteractions />;
export const WithIcons = () => <ChipWithIcons />;

export const CustomStyles = () => (
  <div className="grv-flex grv-flex-wrap grv-gap-4 grv-p-4">
    <Chip className="grv-bg-blue-500 grv-text-white hover:grv-bg-blue-600">
      Custom Styled Chip
    </Chip>
  </div>
);
