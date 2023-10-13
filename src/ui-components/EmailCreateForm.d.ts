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
export declare type EmailCreateFormInputValues = {
    email?: string;
};
export declare type EmailCreateFormValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailCreateFormOverridesProps = {
    EmailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailCreateFormProps = React.PropsWithChildren<{
    overrides?: EmailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmailCreateFormInputValues) => EmailCreateFormInputValues;
    onSuccess?: (fields: EmailCreateFormInputValues) => void;
    onError?: (fields: EmailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailCreateFormInputValues) => EmailCreateFormInputValues;
    onValidate?: EmailCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmailCreateForm(props: EmailCreateFormProps): React.ReactElement;
