type $TSFixMe = any;
type $TSFixMeFunc = (_: any) => any;
type EventHandler = (event: string, handler: function) => any;
type Awaitable<T> = T | Promise<T>;
type Nullable<T> = T | null | undefined;
type EmptyObject = Record<string, unknown>;
type VoidFunction = () => void;
type ExcludesFalse = <T>(x: T | false | null | undefined) => x is T;

declare interface Window {
  grecaptcha: any;
  web3: any;
  gtag?: any;
}

declare interface Document {
  msHidden?: any;
  mozHidden?: any;
  webkitHidden?: any;
}

declare module "react-spring/web.cjs";

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module "@basscube/logger";

declare module "reactjs-countdown-hook";
