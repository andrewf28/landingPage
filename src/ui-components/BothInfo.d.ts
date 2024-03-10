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
export declare type BothInfoOverridesProps = {
    BothInfo?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Buzzly\u2019s Magic"?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Collaborate and Drive Sales with a proven Strategy"?: PrimitiveOverrideProps<TextProps>;
    "Elevate your brand's voice in two powerful ways! Connect with passionate microinfluencers or let us help you find the perfect talent to curate and manage dedicated branded accounts. Experience seamless integration with your main brand presence, and reward those amplifying your message with a lucrative slice of the profits. Dive in, whether you're a creator or a brand, and amplify your reach with us! \uD83C\uDF1F\uD83D\uDD17"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type BothInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BothInfoOverridesProps | undefined | null;
}>;
export default function BothInfo(props: BothInfoProps): React.ReactElement;
