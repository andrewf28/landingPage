/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CreatorInformationOverridesProps = {
    CreatorInformation?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    Creator?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Monetize your audience"?: PrimitiveOverrideProps<TextProps>;
    "Unlock your earning potential with just 1k followers! Dive into our exclusive marketplace designed for microinfluencers like you, and connect with brands eager to collaborate. Elevate your passion, monetize your influence, and create authentic brand partnerships today. Join us! \uD83D\uDD25\uD83D\uDE80"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreatorInformationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CreatorInformationOverridesProps | undefined | null;
}>;
export default function CreatorInformation(props: CreatorInformationProps): React.ReactElement;
