/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlsWorkOverridesProps = {
    PlsWork?: PrimitiveOverrideProps<ViewProps>;
    "ante-hamersmit-gi1f13S1-64-unsplash 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PlsWorkProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PlsWorkOverridesProps | undefined | null;
}>;
export default function PlsWork(props: PlsWorkProps): React.ReactElement;
