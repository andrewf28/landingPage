/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Creator } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorUpdateFormInputValues = {
    email?: string;
    name?: string;
    niches?: string[];
    social_platforms?: string;
    ugc_platforms_question?: string[];
    ugc_platform_experience?: string;
    social_urls?: string[];
    marketing_emails?: boolean;
};
export declare type CreatorUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    niches?: ValidationFunction<string>;
    social_platforms?: ValidationFunction<string>;
    ugc_platforms_question?: ValidationFunction<string>;
    ugc_platform_experience?: ValidationFunction<string>;
    social_urls?: ValidationFunction<string>;
    marketing_emails?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorUpdateFormOverridesProps = {
    CreatorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    niches?: PrimitiveOverrideProps<TextFieldProps>;
    social_platforms?: PrimitiveOverrideProps<TextFieldProps>;
    ugc_platforms_question?: PrimitiveOverrideProps<TextFieldProps>;
    ugc_platform_experience?: PrimitiveOverrideProps<TextFieldProps>;
    social_urls?: PrimitiveOverrideProps<TextFieldProps>;
    marketing_emails?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CreatorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreatorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creator?: Creator;
    onSubmit?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onSuccess?: (fields: CreatorUpdateFormInputValues) => void;
    onError?: (fields: CreatorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onValidate?: CreatorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorUpdateForm(props: CreatorUpdateFormProps): React.ReactElement;
