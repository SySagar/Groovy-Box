// SelectDemo.stories.js

import React from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Check } from "lucide-react"
import { Meta, StoryObj } from '@storybook/react';
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectScrollDownButton,SelectScrollUpButton,SelectSeparator,SelectTrigger,SelectValue } from '../lib'; // Import your custom Select component
import { SelectIcon } from '@radix-ui/react-select';



// type SelectComponentStory = StoryObj<typeof CustomSelect>;

const options = [
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'carrot', label: 'Carrot' },
    { value: 'lettuce', label: 'Lettuce' },
    { value: 'corn', label: 'Corn' },
    { value: 'cucumber', label: 'Cucumber' },
    { value: 'spinach', label: 'Spinach' },
    { value: 'peas', label: 'Peas' },
    { value: 'cabbage', label: 'Cabbage' }
    ];

const Test =()=> (
        <div className=''> 
        <Select aria-label="Food">

        <SelectTrigger style={{
            width: '200px' 
        }} className="SelectTrigger flex flex-row items-center justify-center max-w-40" aria-label="Food">
      <SelectValue placeholder="Select a Vegetable…" />
      <SelectIcon className="SelectIcon">
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>

    <SelectContent className='SelectContent bg-primary-700 w-24'>
      {/* <Select.Separator /> */}

     
      <SelectScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectGroup className=''>

        <SelectLabel className='bg-secondary-300 text-primaryText'>Vegetables</SelectLabel>{
            options.map((option: any) => (
                <SelectItem className='text-primaryText' value={option.value}>{
                    option.label
                }</SelectItem>
                ))
            }
            </SelectGroup>
    
        <SelectScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </SelectScrollDownButton>
    </SelectContent>
  </Select>
            </div>
    )

    export default {
        title: 'Components/Select',
        component: Test,
      } as Meta;

      export const Default = () => <Test />;
    