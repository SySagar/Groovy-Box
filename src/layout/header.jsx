  import React from "react";
import { cn } from "../lib/utils"
import * as styles from "./layout.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../utility/ui/navigation-menu";
import logo from '../../static/logo.png'

const components= [
  {
    title: "Button",
    href: "https://enigma-ui-kit.netlify.app/?path=/docs/components-button--docs",
    description:
      "A basic button component that should render nicely on any platform",
  },
  {
    title: "Textfield",
    href: "https://enigma-ui-kit.netlify.app/?path=/docs/components-textfield--docs",
    description:
      "Customizable TextField to tailor your input fields with ease for enhanced user experiences",
  },
]


export default function header() {
  return (
    <div
      className={styles.headerMain}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "1",
        padding: "20px",
        paddingInline: "30px",
        background: "#2E393F",
      }}
    >
      <div
        className="header-inner"
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <div
          className="logo-name"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="logo.png"
            style={{ width: "30px", height: "30px" }}
            alt=""
          />
          <h3 className="text-white font-bold text-lg">Enigma-UI</h3>
        </div>

        <div
          className="grower"
          style={{ display: "flex", flexGrow: "1" }}
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
                    <img src={logo} className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Enigma-UI
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Elevate UI effortlessly with sleek components for streamlined and stylish development.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Introduction">
                Re-usable components built using Tailwind CSS.
              </ListItem>
              <ListItem
               newTab={true}
               href="https://enigma-ui-kit.netlify.app/?path=/docs/components-button--docs" 
               title="Browse Components">
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


const ListItem = React.forwardRef(
  function({ className, title, newTab=false, children, ...props }, ref) {
    return (
      React.createElement('li', null,
        React.createElement(NavigationMenuLink, { asChild: true },
          React.createElement('a', {
            ref: ref,
            target: newTab && "_blank",
            className: cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            ),
            ...props
          },
            React.createElement('div', { className: "text-sm font-medium leading-none" }, title),
            React.createElement('p', { className: "line-clamp-2 text-sm leading-snug text-muted-foreground" }, children)
          )
        )
      )
    );
  }
);

ListItem.displayName = "ListItem";
