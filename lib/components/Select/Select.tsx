import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import classnames from "classnames";
import React, { ForwardedRef } from 'react';

type OptionProps = {
    value: string;
    label: string;
}

type SelectProps = {
    options: OptionProps[];
}

export default function SelectDemo({options}:SelectProps) {

    return(
        <div>
            
        <Select.Root aria-label="Food">

        <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Select a Vegetable…" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
    <Select.Content className='SelectContent '>
      {/* <Select.Separator /> */}

      <Select.Viewport className="SelectViewport bg-primary-700">
      <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Group className=''>

        <Select.Label className='bg-secondary-300'>Vegetables</Select.Label>{
            options.map((option: any) => (
                <SelectItem className='text-primaryText' value={option.value}>{
                    option.label
                }</SelectItem>
                ))
            }
            </Select.Group>
    
      </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
    </Select.Content>
    </Select.Portal>
  </Select.Root>
            </div>
    )
};

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Select.Item> {
    children: React.ReactNode;
  }
  
  const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    return (
      <Select.Item className={classnames("SelectItem", className)} {...rest} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });
  