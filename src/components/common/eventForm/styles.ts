export const styles = {
  page: {
    bg: "#F9FAFB",
    minHeight: "100vh",
    px: "32px",
    py: "24px",
  },

  card: {
    bg: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    px: "32px",
    py: "32px",
    maxWidth: "600px",
    mx: "auto",
  },

  title: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
    mb: "6px",
  },

  subtitle: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#6B7280",
    textAlign: "left",
    mb: "24px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#111827",
    mb: "6px",
    display: "flex",
    alignItems: "center",
    gap: "2px",
  },

  required: {
    color: "#EF4444",
    fontSize: "13px",
    fontWeight: "500",
    ml: "2px",
  },

  input: {
    fontSize: "14px",
    color: "#111827",
    bg: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    px: "14px",
    py: "10px",
    height: "42px",
    width: "100%",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
    _placeholder: {
      color: "#9CA3AF",
      fontSize: "14px",
    },
    _hover: {
      borderColor: "#D1D5DB",
    },
    _focus: {
      borderColor: "#4F46E5",
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.12)",
      outline: "none",
    },
  },

  textarea: {
    fontSize: "14px",
    color: "#111827",
    bg: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    px: "14px",
    py: "10px",
    minHeight: "110px",
    width: "100%",
    resize: "vertical",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
    _placeholder: {
      color: "#9CA3AF",
      fontSize: "14px",
    },
    _hover: {
      borderColor: "#D1D5DB",
    },
    _focus: {
      borderColor: "#4F46E5",
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.12)",
      outline: "none",
    },
  },

  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  hintText: {
    fontSize: "12px",
    color: "#9CA3AF",
    mt: "6px",
  },

  fieldGap: {
    mb: "20px",
  },

  visibilityLabel: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#111827",
    mb: "10px",
  },

  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  radioItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#111827",
  },

  radio: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "2px solid #D1D5DB",
    flexShrink: 0,
    cursor: "pointer",
    transition: "border-color 150ms ease",
    _checked: {
      borderColor: "#4F46E5",
      bg: "#4F46E5",
    },
    _focus: {
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.12)",
    },
  },

  divider: {
    border: "none",
    borderTop: "1px solid #E5E7EB",
    my: "24px",
  },

  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    mt: "24px",
  },

  btnCancel: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    bg: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    px: "24px",
    py: "10px",
    height: "42px",
    width: "100%",
    cursor: "pointer",
    transition: "background 150ms ease, border-color 150ms ease",
    _hover: {
      bg: "#F3F4F6",
      borderColor: "#D1D5DB",
    },
  },

  btnSubmit: {
    fontSize: "14px",
    fontWeight: "500",
    color: "white",
    bg: "#4F46E5",
    border: "none",
    borderRadius: "8px",
    px: "24px",
    py: "10px",
    height: "42px",
    width: "100%",
    cursor: "pointer",
    transition: "background 150ms ease",
    _hover: {
      bg: "#4338CA",
    },
    _disabled: {
      bg: "#A5B4FC",
      cursor: "not-allowed",
      _hover: { bg: "#A5B4FC" },
    },
  },
};
