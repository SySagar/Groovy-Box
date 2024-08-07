import React, { ReactNode } from 'react';
import { cn } from '../lib/utils';
import * as styles from './layout.module.css';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../utility/ui/navigation-menu';

const components = [
  {
    title: 'Button',
    href: 'https://groovy-box.netlify.app/?path=/docs/components-button--docs',
    description:
      'A basic button component that should render nicely on any platform',
  },
  {
    title: 'Textfield',
    href: 'https://groovy-box.netlify.app/?path=/docs/components-textfield--docs',
    description:
      'Customizable TextField to tailor your input fields with ease for enhanced user experiences',
  },
];

export default function Header() {
  return (
    <div
      // @ts-ignore
      className={styles.headerMain}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
        padding: '20px',
        paddingInline: '30px',
        background: '#E9EFE7',
      }}
    >
      <div
        className="header-inner"
        style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
      >
        <div
          className="logo-name"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="logo.png"
            style={{ width: 'auto', height: '30px' }}
            alt=""
          />
        </div>

        <div
          className="grower"
          style={{ display: 'flex', flexGrow: '1' }}
        ></div>

        {/* <div
          className="quick-links"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link className={styles.link} to="/">
            Components
          </Link>
          <Link className={styles.link} to="/">
            Docs
          </Link>
          <Link className={styles.link} to="/">
            About
          </Link>
        </div> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Classics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2  ">
                  {components.map((component) => (
                    <ListItem
                      newTab={true}
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <img src={'logo.png'} className="h-[60px] w-32 pb-6" />
                        <p className="text-sm leading-tight text-muted-foreground">
                          Elevate UI effortlessly with sleek components for
                          streamlined and stylish development.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>

                  <ListItem
                    newTab={true}
                    href="https://groovy-box.netlify.app/?path=/docs/components-button--docs"
                    title="Browse Components"
                  >
                    How to install dependencies and structure your app.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

interface ListItemProps {
  newTab?: boolean;
  children: ReactNode;
}

type ListItemCombinedProps = ListItemProps &
  React.ComponentPropsWithoutRef<'a'>;

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemCombinedProps>(
  function (
    { className, title, newTab = false, children, href, ...props },
    ref
  ) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            target={newTab ? '_blank' : '_self'}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';
