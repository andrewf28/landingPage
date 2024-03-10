/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function NavBarHeader2(props) {
  const { overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({ type: "url", url: "/" });
  const forClientsOnClick = useNavigateAction({ type: "url", url: "/clients" });
  const forCreatorsOnClick = useNavigateAction({
    type: "url",
    url: "/creators",
  });
  const aboutUsOnClick = useNavigateAction({ type: "url", url: "/about" });
  const contactOnClick = useNavigateAction({ type: "url", url: "/contact" });
  const blogOnClick = useNavigateAction({ type: "url", url: "/blog" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader2")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="60.76px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, '\uD83E\uDD86 icon "hive"')}
        >
          <Icon
            width="60.76px"
            height="60px"
            viewBox={{ minX: 0, minY: 0, width: 60.759521484375, height: 60 }}
            paths={[
              {
                d: "M60.4026 15.1767L53.6521 1.84333C53.0783 0.713333 51.9104 0 50.6312 0L33.755 0C32.4758 0 31.3079 0.713333 30.7341 1.84333L24.9186 13.3333L10.1283 13.3333C8.84905 13.3333 7.68122 14.0467 7.10742 15.1767L0.356932 28.51C-0.118977 29.4467 -0.118977 30.5533 0.356932 31.4933L7.10742 44.8267C7.68122 45.9533 8.84905 46.6667 10.1283 46.6667L24.9186 46.6667L30.7375 58.1567C31.3079 59.2867 32.4758 60 33.755 60L50.6312 60C51.9104 60 53.0783 59.2867 53.6521 58.1567L60.4026 44.8233C60.8785 43.8867 60.8785 42.78 60.4026 41.84L54.4047 30L60.3992 18.1567C60.8751 17.22 60.8751 16.1133 60.4026 15.1767ZM35.8409 6.66667L48.5453 6.66667L53.6082 16.6667L48.5453 26.6667L35.8409 26.6667L30.778 16.6667L35.8409 6.66667ZM7.1513 30L12.2142 20L24.9186 20L29.9815 30L24.9186 40L12.2142 40L7.1513 30ZM48.5453 53.3333L35.8409 53.3333L30.778 43.3333L35.8409 33.3333L48.5453 33.3333L53.6082 43.3333L48.5453 53.3333Z",
                fill: "rgba(255,228,51,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            onClick={() => {
              vectorOnClick();
            }}
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="For Clients"
          onClick={() => {
            forClientsOnClick();
          }}
          {...getOverrideProps(overrides, "For Clients")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="For Creators"
          onClick={() => {
            forCreatorsOnClick();
          }}
          {...getOverrideProps(overrides, "For Creators")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About Us"
          onClick={() => {
            aboutUsOnClick();
          }}
          {...getOverrideProps(overrides, "About Us")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          onClick={() => {
            contactOnClick();
          }}
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Blog"
          onClick={() => {
            blogOnClick();
          }}
          {...getOverrideProps(overrides, "Blog")}
        ></Text>
      </Flex>
    </Flex>
  );
}
