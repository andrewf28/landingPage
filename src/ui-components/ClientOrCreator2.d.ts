/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientOrCreator2OverridesProps = {
    ClientOrCreator2?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla turpis. Praesent eu ullamcorper dui, nec varius justo. Fusce nec ante ac purus varius venenatis vitae eu nunc. Suspendisse potenti. Quisque euismod ligula in justo commodo, id fermentum purus efficitur. Nulla id lectus nulla. Nunc at vehicula dolor, eu cursus metus. Sed tincidunt sapien quis nisi auctor, non malesuada justo fermentum. Nulla facilisi. Pellentesque ac malesuada nulla, et vehicula arcu.38541258"?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    Button38541244?: PrimitiveOverrideProps<ButtonProps>;
    Button38541248?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "For Creators"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla turpis. Praesent eu ullamcorper dui, nec varius justo. Fusce nec ante ac purus varius venenatis vitae eu nunc. Suspendisse potenti. Quisque euismod ligula in justo commodo, id fermentum purus efficitur. Nulla id lectus nulla. Nunc at vehicula dolor, eu cursus metus. Sed tincidunt sapien quis nisi auctor, non malesuada justo fermentum. Nulla facilisi. Pellentesque ac malesuada nulla, et vehicula arcu.38541257"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "For Clients"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ClientOrCreator2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ClientOrCreator2OverridesProps | undefined | null;
}>;
export default function ClientOrCreator2(props: ClientOrCreator2Props): React.ReactElement;
