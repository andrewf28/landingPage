/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Alert, Flex } from "@aws-amplify/ui-react";
export default function KnowMore(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "KnowMore")}
      {...rest}
    >
      <Alert
        width="750px"
        height="unset"
        shrink="0"
        variation="default"
        isDismissible={false}
        hasIcon={false}
        children="We’d love to build a product that you’ll love. Let us know how we can cater to you!"
        {...getOverrideProps(overrides, "Alert")}
      ></Alert>
    </Flex>
  );
}
