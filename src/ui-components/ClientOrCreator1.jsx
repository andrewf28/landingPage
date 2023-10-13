/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ClientOrCreator1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ClientOrCreator1")}
      {...rest}
    >
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "ClientOrCreator")}
      ></Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 441")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 442")}
        >
          <Flex
            gap="32px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 439")}
          >
            <Flex
              gap="32px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 440")}
            >
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="primary"
                children="Client"
                {...getOverrideProps(overrides, "Button38521023")}
              ></Button>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="primary"
                children="Creator"
                {...getOverrideProps(overrides, "Button38521017")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
