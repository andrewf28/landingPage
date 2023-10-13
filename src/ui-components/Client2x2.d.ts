/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Features2x2Props } from "./Features2x2";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Client2x2OverridesProps = {
    Client2x2?: PrimitiveOverrideProps<FlexProps>;
    Features2x2?: Features2x2Props;
} & EscapeHatchProps;
export declare type Client2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Client2x2OverridesProps | undefined | null;
}>;
export default function Client2x2(props: Client2x2Props): React.ReactElement;
