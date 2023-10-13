/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KnowMoreOverridesProps = {
    KnowMore?: PrimitiveOverrideProps<FlexProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type KnowMoreProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: KnowMoreOverridesProps | undefined | null;
}>;
export default function KnowMore(props: KnowMoreProps): React.ReactElement;
