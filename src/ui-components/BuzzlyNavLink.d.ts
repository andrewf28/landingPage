/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuzzlyNavLinkOverridesProps = {
    BuzzlyNavLink?: PrimitiveOverrideProps<ViewProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    Heading38631933?: PrimitiveOverrideProps<HeadingProps>;
    Heading38631935?: PrimitiveOverrideProps<HeadingProps>;
    "\uD83E\uDD86 icon \"hive\""?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Buzzly?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BuzzlyNavLinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BuzzlyNavLinkOverridesProps | undefined | null;
}>;
export default function BuzzlyNavLink(props: BuzzlyNavLinkProps): React.ReactElement;
