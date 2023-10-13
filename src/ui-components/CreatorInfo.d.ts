/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorInfoInputValues = {
    Field1?: string;
    Field0?: string;
    email?: string;
    name?: string;
    niches?: string[];
    social_platforms?: string;
    ugc_platforms_question?: string[];
    ugc_platform_experience?: string;
    social_urls?: string[];
};
export declare type CreatorInfoValidationValues = {
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    niches?: ValidationFunction<string>;
    social_platforms?: ValidationFunction<string>;
    ugc_platforms_question?: ValidationFunction<string>;
    ugc_platform_experience?: ValidationFunction<string>;
    social_urls?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorInfoOverridesProps = {
    CreatorInfoGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    niches?: PrimitiveOverrideProps<TextFieldProps>;
    social_platforms?: PrimitiveOverrideProps<TextFieldProps>;
    ugc_platforms_question?: PrimitiveOverrideProps<TextFieldProps>;
    ugc_platform_experience?: PrimitiveOverrideProps<TextFieldProps>;
    social_urls?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorInfoProps = React.PropsWithChildren<{
    overrides?: CreatorInfoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreatorInfoInputValues) => CreatorInfoInputValues;
    onSuccess?: (fields: CreatorInfoInputValues) => void;
    onError?: (fields: CreatorInfoInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorInfoInputValues) => CreatorInfoInputValues;
    onValidate?: CreatorInfoValidationValues;
} & React.CSSProperties>;
export default function CreatorInfo(props: CreatorInfoProps): React.ReactElement;
