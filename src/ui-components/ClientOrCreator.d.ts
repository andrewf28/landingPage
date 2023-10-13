/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout1Props } from "./HeroLayout1";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientOrCreatorOverridesProps = {
    ClientOrCreator?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout1?: HeroLayout1Props;
} & EscapeHatchProps;
export declare type ClientOrCreatorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClientOrCreatorOverridesProps | undefined | null;
}>;
export default function ClientOrCreator(props: ClientOrCreatorProps): React.ReactElement;
