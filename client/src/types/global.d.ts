// types/global.d.ts
import type { ReactNode } from "react";
import { GroupProps } from "@react-three/fiber";


declare global {

    
  type Locale = (typeof routing.locales)[number];

  type LocaleParams = { locale: string };

  // type LocaleLayoutProps = {
  //   children: ReactNode;
  //   params: LocaleParams;
  // };

}

export interface NavbarProps {
  children?:
    | ReactElement<{ visible: boolean }>
    | ReactElement<{ visible: boolean }>[];
  className?: string;
}

export interface NavBodyProps {
  children?: ReactNode;
  className?: string;
  visible: boolean;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export interface MobileNavProps {
  children?: ReactNode;
  className?: string;
  visible?: boolean;
}

export interface MobileNavHeaderProps {
  children?: ReactNode;
  className?: string;
}

export interface MobileNavMenuProps {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

// export interface NavbarButtonProps extends React.ComponentPropsWithoutRef<"a"> {
//   href?: string;
//   as?: React.ElementType;
//   children?: React.ReactNode;
//   className?: string;
//   variant?: "primary" | "secondary" | "dark" | "gradient";
// }

export type NavbarButtonProps<T extends React.ElementType = "a"> = {
  as?: T;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;



export type NavControllersProps = {
  isAuthonticated: boolean;
};

export type ObjectProps = GroupProps & {
  onLoad: () => void;
  path: string;
};