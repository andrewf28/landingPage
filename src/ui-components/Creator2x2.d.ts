/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Features2x2Props } from "./Features2x2";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type Creator2x2OverridesProps = {
    Creator2x2?: PrimitiveOverrideProps<FlexProps>;
    Features2x2?: Features2x2Props;
} & EscapeHatchProps;
export declare type Creator2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    Box?: String;
} & {
    overrides?: Creator2x2OverridesProps | undefined | null;
}>;
export default function Creator2x2(props: Creator2x2Props): React.ReactElement;
