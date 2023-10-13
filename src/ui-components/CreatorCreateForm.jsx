/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Creator } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CreatorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    name: "",
    niches: [],
    social_platforms: "",
    ugc_platforms_question: [],
    ugc_platform_experience: "",
    social_urls: [],
    marketing_emails: false,
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [name, setName] = React.useState(initialValues.name);
  const [niches, setNiches] = React.useState(initialValues.niches);
  const [social_platforms, setSocial_platforms] = React.useState(
    initialValues.social_platforms
  );
  const [ugc_platforms_question, setUgc_platforms_question] = React.useState(
    initialValues.ugc_platforms_question
  );
  const [ugc_platform_experience, setUgc_platform_experience] = React.useState(
    initialValues.ugc_platform_experience
  );
  const [social_urls, setSocial_urls] = React.useState(
    initialValues.social_urls
  );
  const [marketing_emails, setMarketing_emails] = React.useState(
    initialValues.marketing_emails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setName(initialValues.name);
    setNiches(initialValues.niches);
    setCurrentNichesValue("");
    setSocial_platforms(initialValues.social_platforms);
    setUgc_platforms_question(initialValues.ugc_platforms_question);
    setCurrentUgc_platforms_questionValue("");
    setUgc_platform_experience(initialValues.ugc_platform_experience);
    setSocial_urls(initialValues.social_urls);
    setCurrentSocial_urlsValue("");
    setMarketing_emails(initialValues.marketing_emails);
    setErrors({});
  };
  const [currentNichesValue, setCurrentNichesValue] = React.useState("");
  const nichesRef = React.createRef();
  const [
    currentUgc_platforms_questionValue,
    setCurrentUgc_platforms_questionValue,
  ] = React.useState("");
  const ugc_platforms_questionRef = React.createRef();
  const [currentSocial_urlsValue, setCurrentSocial_urlsValue] =
    React.useState("");
  const social_urlsRef = React.createRef();
  const validations = {
    email: [{ type: "Required" }],
    name: [{ type: "Required" }],
    niches: [],
    social_platforms: [],
    ugc_platforms_question: [],
    ugc_platform_experience: [],
    social_urls: [],
    marketing_emails: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          name,
          niches,
          social_platforms,
          ugc_platforms_question,
          ugc_platform_experience,
          social_urls,
          marketing_emails,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Creator(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreatorCreateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        placeholder="johndoe@buzzly.xyz"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              name,
              niches,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        placeholder="John Doe"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name: value,
              niches,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches: values,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            values = result?.niches ?? values;
          }
          setNiches(values);
          setCurrentNichesValue("");
        }}
        currentFieldValue={currentNichesValue}
        label={"Niches"}
        items={niches}
        hasError={errors?.niches?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("niches", currentNichesValue)
        }
        errorMessage={errors?.niches?.errorMessage}
        setFieldValue={setCurrentNichesValue}
        inputFieldRef={nichesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Niches"
          isRequired={false}
          isReadOnly={false}
          placeholder="SkinCare, Outdoors, Makeup, etc..."
          value={currentNichesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.niches?.hasError) {
              runValidationTasks("niches", value);
            }
            setCurrentNichesValue(value);
          }}
          onBlur={() => runValidationTasks("niches", currentNichesValue)}
          errorMessage={errors.niches?.errorMessage}
          hasError={errors.niches?.hasError}
          ref={nichesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "niches")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Social platforms"
        isRequired={false}
        isReadOnly={false}
        placeholder="Instagram, Twitter, TikTok etc.."
        value={social_platforms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches,
              social_platforms: value,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            value = result?.social_platforms ?? value;
          }
          if (errors.social_platforms?.hasError) {
            runValidationTasks("social_platforms", value);
          }
          setSocial_platforms(value);
        }}
        onBlur={() => runValidationTasks("social_platforms", social_platforms)}
        errorMessage={errors.social_platforms?.errorMessage}
        hasError={errors.social_platforms?.hasError}
        {...getOverrideProps(overrides, "social_platforms")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches,
              social_platforms,
              ugc_platforms_question: values,
              ugc_platform_experience,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            values = result?.ugc_platforms_question ?? values;
          }
          setUgc_platforms_question(values);
          setCurrentUgc_platforms_questionValue("");
        }}
        currentFieldValue={currentUgc_platforms_questionValue}
        label={
          "Have you worked with any other UGC focused platforms. If so which ones?"
        }
        items={ugc_platforms_question}
        hasError={errors?.ugc_platforms_question?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "ugc_platforms_question",
            currentUgc_platforms_questionValue
          )
        }
        errorMessage={errors?.ugc_platforms_question?.errorMessage}
        setFieldValue={setCurrentUgc_platforms_questionValue}
        inputFieldRef={ugc_platforms_questionRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Have you worked with any other UGC focused platforms. If so which ones?"
          isRequired={false}
          isReadOnly={false}
          placeholder="Pearpop, Collabstr, Grin, etc..."
          value={currentUgc_platforms_questionValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ugc_platforms_question?.hasError) {
              runValidationTasks("ugc_platforms_question", value);
            }
            setCurrentUgc_platforms_questionValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ugc_platforms_question",
              currentUgc_platforms_questionValue
            )
          }
          errorMessage={errors.ugc_platforms_question?.errorMessage}
          hasError={errors.ugc_platforms_question?.hasError}
          ref={ugc_platforms_questionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ugc_platforms_question")}
        ></TextField>
      </ArrayField>
      <TextField
        label="If you answered yes to the previous question, how was your experience?"
        isRequired={false}
        isReadOnly={false}
        value={ugc_platform_experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience: value,
              social_urls,
              marketing_emails,
            };
            const result = onChange(modelFields);
            value = result?.ugc_platform_experience ?? value;
          }
          if (errors.ugc_platform_experience?.hasError) {
            runValidationTasks("ugc_platform_experience", value);
          }
          setUgc_platform_experience(value);
        }}
        onBlur={() =>
          runValidationTasks("ugc_platform_experience", ugc_platform_experience)
        }
        errorMessage={errors.ugc_platform_experience?.errorMessage}
        hasError={errors.ugc_platform_experience?.hasError}
        {...getOverrideProps(overrides, "ugc_platform_experience")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls: values,
              marketing_emails,
            };
            const result = onChange(modelFields);
            values = result?.social_urls ?? values;
          }
          setSocial_urls(values);
          setCurrentSocial_urlsValue("");
        }}
        currentFieldValue={currentSocial_urlsValue}
        label={"Social urls"}
        items={social_urls}
        hasError={errors?.social_urls?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("social_urls", currentSocial_urlsValue)
        }
        errorMessage={errors?.social_urls?.errorMessage}
        setFieldValue={setCurrentSocial_urlsValue}
        inputFieldRef={social_urlsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Social urls"
          isRequired={false}
          isReadOnly={false}
          placeholder="instagram.com/johndoe1/ ..."
          value={currentSocial_urlsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.social_urls?.hasError) {
              runValidationTasks("social_urls", value);
            }
            setCurrentSocial_urlsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("social_urls", currentSocial_urlsValue)
          }
          errorMessage={errors.social_urls?.errorMessage}
          hasError={errors.social_urls?.hasError}
          ref={social_urlsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "social_urls")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Can we send you exciting emails about Buzzly?"
        defaultChecked={false}
        isDisabled={false}
        isChecked={marketing_emails}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              name,
              niches,
              social_platforms,
              ugc_platforms_question,
              ugc_platform_experience,
              social_urls,
              marketing_emails: value,
            };
            const result = onChange(modelFields);
            value = result?.marketing_emails ?? value;
          }
          if (errors.marketing_emails?.hasError) {
            runValidationTasks("marketing_emails", value);
          }
          setMarketing_emails(value);
        }}
        onBlur={() => runValidationTasks("marketing_emails", marketing_emails)}
        errorMessage={errors.marketing_emails?.errorMessage}
        hasError={errors.marketing_emails?.hasError}
        {...getOverrideProps(overrides, "marketing_emails")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
