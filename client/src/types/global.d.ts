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
  // onLoad: () => void;
  path: string;
  productId?: number;
  // onProgress?: (productId: number, progress: number) => void;
  // onError?: (productId: number, error: string) => void;
  // speed: Float;
};


export type ProductType =
  | "men"
  | "women"
  | "kids"
  | "footwear"
  | "athleticwear"
  | "accessories"
  | "hero";

export interface CommonProps {
  enableOrbitControls?: boolean;
  enableZoom?: boolean;
  lockVerticalOrbit?: boolean;
  productType?: ProductType;
  enableFloating?: boolean;
  enableRotation?: boolean;
}

type EnvironmentPreset =
  | "studio"
  | "sunset"
  | "park"
  | "night"
  | "dawn"
  | "city"
  | "warehouse"
  | "apartment"
  | "forest"
  | "lobby";


  export type Position3D = [number, number, number];


  export interface ViewSceneProps {
    boxColor: string;
    ProductPosition?: Position3D;
  }


  export interface ColorOption {
    id: string;
    name: string;
    color: string;
    path?: string;
  }

  export interface ProductsType {
    id: number;
    name: string;
    description: string;
    price: string;
    productImg: string;
    originalPrice: string;
    path: string;
    sizes: string[];
    colors: ColorOption[];
    category?: string;
  }

  export type ProductProps = {
    product: ProductsType;
  };


  export type ProductDetailsProps = {
    product: ProductsType;
    setCurrentPath?: (path: string) => void;
  };


  export type LoaderProps = {
    id: number;
    productImg: string;
    progresse?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };


  export interface IconSwitcherProps {
    toggleRenderType: () => void;
    renderType: boolean;
  }