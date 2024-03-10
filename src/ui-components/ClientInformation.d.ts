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
export declare type ClientInformationOverridesProps = {
    ClientInformation?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    Client?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Hire your Hive"?: PrimitiveOverrideProps<TextProps>;
    "Elevate your brand strategy by tapping into a network of dedicated microinfluencers. Our platform connects you with genuine creators who have a trusted and engaged audience of 1k-10k followers. By leveraging these authentic relationships, you can drive meaningful engagement and foster trust with a wider audience. Don't overlook this valuable opportunity. Join us."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ClientInformationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClientInformationOverridesProps | undefined | null;
}>;
export default function ClientInformation(props: ClientInformationProps): React.ReactElement;
