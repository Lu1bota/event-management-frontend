import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import { useState, type FC, type FormEvent } from "react";
import type { EventDraft } from "../../../store";
import type { EventRequest } from "../../../types";
import { CustomInput } from "../CustomInput";
import { styles } from "./styles";

interface EventFormProps {
  mode: "create" | "update";
  initialData?: EventDraft;
  onSubmit: (data: EventRequest) => void;
  isLoading: boolean;
  onCancel: () => void;
  onChange?: (field: keyof EventDraft, value: string) => void;
}

const EventForm: FC<EventFormProps> = ({
  mode,
  initialData,
  onSubmit,
  isLoading,
  onCancel,
  onChange,
}) => {
  const [formData, setFormData] = useState<EventDraft>(
    initialData || {
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      capacity: "",
    },
  );

  const handleChange = (field: keyof EventDraft, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (onChange) onChange(field, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dateTime = new Date(`${formData.date}T${formData.time}`);

    onSubmit({
      title: formData.title,
      description: formData.description,
      dateTime,
      location: formData.location,
      capacity: formData.capacity ? Number(formData.capacity) : undefined,
    });
  };

  return (
    <Box as="form" css={styles.card} onSubmit={handleSubmit}>
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
          inputProps={{
            placeholder: "e.g., Tech Conference 2025",
            value: formData.title,
            onChange: (e) => handleChange("title", e.target.value),
            css: styles.input,
            required: true,
          }}
        />
      </Box>

      <Box css={styles.fieldGap}>
        <Text css={styles.label}>
          Description{" "}
          <Text as="span" css={styles.required}>
            *
          </Text>
        </Text>
        <Textarea
          placeholder="Describe what makes your event special..."
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          css={styles.textarea}
          required
        />
      </Box>

      <Box css={styles.twoCol} mb="20px">
        <CustomInput
          labelName="Date"
          inputProps={{
            type: "date",
            value: formData.date,
            onChange: (e) => handleChange("date", e.target.value),
            css: styles.input,
            required: true,
          }}
        />
        <CustomInput
          labelName="Time"
          inputProps={{
            type: "time",
            value: formData.time,
            onChange: (e) => handleChange("time", e.target.value),
            css: styles.input,
            required: true,
          }}
        />
      </Box>

      <Box css={styles.fieldGap}>
        <CustomInput
          labelName="Location"
          inputProps={{
            placeholder: "e.g., Convention Center, San Francisco",
            value: formData.location,
            onChange: (e) => handleChange("location", e.target.value),
            css: styles.input,
            required: true,
          }}
        />
      </Box>

      <Box css={styles.fieldGap}>
        <CustomInput
          labelName="Capacity (optional)"
          inputProps={{
            type: "number",
            placeholder: "Leave empty for unlimited",
            value: formData.capacity,
            onChange: (e) => handleChange("capacity", e.target.value),
            css: styles.input,
            min: 1,
          }}
        />
        <Text css={styles.hintText}>
          Maximum number of participants. Leave empty for unlimited capacity.
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
        <Button type="submit" css={styles.btnSubmit} loading={isLoading}>
          {mode === "create" ? "Create Event" : "Save Changes"}
        </Button>
      </Box>
    </Box>
  );
};

export default EventForm;
