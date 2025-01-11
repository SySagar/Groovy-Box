import { withGlobalStyles } from '../../../.storybook/decorator';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../..';

const Test = () => (
    <div className="grv-w-80">
        <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Accordion 1</AccordionTrigger>
                <AccordionContent>Content 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Accordion 2</AccordionTrigger>
                <AccordionContent>Content 2</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Accordion 3</AccordionTrigger>
                <AccordionContent>Content 3</AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
);

const withTailwind = () => {
    return (
        <div className="grv-w-80">
            <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1" className='grv-border-b-0'>
                    <AccordionTrigger>Accordion 1</AccordionTrigger>
                    <AccordionContent>Content 1</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default {
    title: 'components/Accordion',
    component: Test,
    decorators: [withGlobalStyles],
};

export const Default = () => <Test />;
export const WithTailwind = () => withTailwind();
