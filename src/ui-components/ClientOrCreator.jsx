/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Flex } from "@aws-amplify/ui-react";
export default function ClientOrCreator(props) {
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
      {...getOverrideProps(overrides, "ClientOrCreator")}
      {...rest}
    >
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="1440px"
        height="546px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Dark"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
    </Flex>
  );
}
