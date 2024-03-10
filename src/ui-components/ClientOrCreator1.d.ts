/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type ClientOrCreator1OverridesProps = {
    ClientOrCreator1?: PrimitiveOverrideProps<FlexProps>;
    ClientOrCreator?: PrimitiveOverrideProps<FlexProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    Button38521023?: PrimitiveOverrideProps<ButtonProps>;
    Button38521017?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ClientOrCreator1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClientOrCreator1OverridesProps | undefined | null;
}>;
export default function ClientOrCreator1(props: ClientOrCreator1Props): React.ReactElement;
