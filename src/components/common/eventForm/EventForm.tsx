import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import { Formik, Form as FormikForm } from "formik";
import type { FC } from "react";
import * as Yup from "yup";
import type { EventDraft } from "../../../store";
import type { EventRequest } from "../../../types";
import { styles } from "./styles";
import { CustomInput } from "../CustomInput";

interface EventFormProps {
  mode: "create" | "update";
  initialData?: EventDraft;
  onSubmit: (data: EventRequest) => void;
  isLoading: boolean;
  onCancel: () => void;
  onChange?: (field: keyof EventDraft, value: string) => void;
}

const eventSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Event title is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  location: Yup.string().required("Location is required"),
  capacity: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .min(1, "Capacity must be at least 1"),
});

const shouldShowError = (
  error: string | undefined,
  touched: boolean | undefined,
  submitCount: number,
) => !!error && (touched || submitCount > 0);

const getErrorProps = (
  field: keyof EventDraft,
  errors: Record<string, string | undefined>,
  touched: Record<string, boolean | undefined>,
  submitCount: number,
) => {
  const isErrorVisible = shouldShowError(
    errors[field],
    touched[field],
    submitCount,
  );
  return {
    isErrorTextVisible: isErrorVisible,
    errorText: errors[field],
    fieldRootProps: { invalid: isErrorVisible },
  };
};

const EventForm: FC<EventFormProps> = ({
  mode,
  initialData,
  onSubmit,
  isLoading,
  onCancel,
  onChange,
}) => {
  const defaultValues: EventDraft = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
  };

  return (
    <Formik<EventDraft>
      initialValues={initialData || defaultValues}
      validationSchema={eventSchema}
      enableReinitialize
      onSubmit={(values) => {
        const dateTime = new Date(`${values.date}T${values.time}`);

        onSubmit({
          title: values.title,
          description: values.description,
          dateTime,
          location: values.location,
          capacity: values.capacity ? Number(values.capacity) : undefined,
        });
      }}
    >
      {({ errors, touched, submitCount, getFieldProps, handleSubmit }) => {
        const createChangeHandler =
          (field: keyof EventDraft) =>
          (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            getFieldProps(field).onChange(e);
            if (onChange) onChange(field, e.target.value);
          };

        return (
          <FormikForm onSubmit={handleSubmit} noValidate>
            <Box css={styles.card}>
              <Text as="h2" css={styles.title}>
                {mode === "create" ? "Create New Event" : "Update Event"}
              </Text>
              <Text css={styles.subtitle}>
                {mode === "create"
                  ? "Fill in the details to create an amazing event"
                  : "Update the details of your event"}
              </Text>

              <Box css={styles.fieldGap}>
                <CustomInput
                  labelName="Event Title"
                  {...getErrorProps("title", errors, touched, submitCount)}
                  inputProps={{
                    ...getFieldProps("title"),
                    onChange: createChangeHandler("title"),
                    placeholder: "e.g., Tech Conference 2025",
                    css: styles.input,
                  }}
                />
              </Box>

              <Box css={styles.fieldGap}>
                <Text css={styles.label}>
                  Description
                  <Text as="span" css={styles.required}>
                    *
                  </Text>
                </Text>
                <Textarea
                  {...getFieldProps("description")}
                  onChange={createChangeHandler("description")}
                  placeholder="Describe what makes your event special..."
                  css={styles.textarea}
                  aria-invalid={shouldShowError(
                    errors.description,
                    touched.description,
                    submitCount,
                  )}
                />
                {shouldShowError(
                  errors.description,
                  touched.description,
                  submitCount,
                ) && <Text css={styles.errorText}>{errors.description}</Text>}
              </Box>

              <Box css={styles.twoCol} mb="20px">
                <CustomInput
                  labelName="Date"
                  {...getErrorProps("date", errors, touched, submitCount)}
                  inputProps={{
                    ...getFieldProps("date"),
                    onChange: createChangeHandler("date"),
                    type: "date",
                    css: styles.input,
                  }}
                />
                <CustomInput
                  labelName="Time"
                  {...getErrorProps("time", errors, touched, submitCount)}
                  inputProps={{
                    ...getFieldProps("time"),
                    onChange: createChangeHandler("time"),
                    type: "time",
                    css: styles.input,
                  }}
                />
              </Box>

              <Box css={styles.fieldGap}>
                <CustomInput
                  labelName="Location"
                  {...getErrorProps("location", errors, touched, submitCount)}
                  inputProps={{
                    ...getFieldProps("location"),
                    onChange: createChangeHandler("location"),
                    placeholder: "e.g., Convention Center, San Francisco",
                    css: styles.input,
                  }}
                />
              </Box>

              <Box css={styles.fieldGap}>
                <CustomInput
                  labelName="Capacity (optional)"
                  {...getErrorProps("capacity", errors, touched, submitCount)}
                  inputProps={{
                    ...getFieldProps("capacity"),
                    onChange: createChangeHandler("capacity"),
                    type: "number",
                    placeholder: "Leave empty for unlimited",
                    min: 1,
                    css: styles.input,
                  }}
                />
                <Text css={styles.hintText}>
                  Maximum number of participants. Leave empty for unlimited
                  capacity.
                </Text>
              </Box>

              <Box css={styles.divider} />

              <Box css={styles.footer}>
                <Button
                  type="button"
                  css={styles.btnCancel}
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  css={styles.btnSubmit}
                  loading={isLoading}
                >
                  {mode === "create" ? "Create Event" : "Save Changes"}
                </Button>
              </Box>
            </Box>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default EventForm;
