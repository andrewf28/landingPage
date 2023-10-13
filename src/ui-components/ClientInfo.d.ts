/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientInfoOverridesProps = {
    ClientInfo?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ClientInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClientInfoOverridesProps | undefined | null;
}>;
export default function ClientInfo(props: ClientInfoProps): React.ReactElement;
