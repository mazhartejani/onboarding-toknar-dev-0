import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { styles } from "../../../../assets/global-styles";
import theme from "../../../../styles/theme";

interface VerificationContactDetailsFormProps {
  form: {
    businessEmail: string;
    phone: string;
  };
  handleChange: (field: "businessEmail" | "phone", value: string) => void;
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) =>
  /^\+?\d{7,15}$/.test(phone.replace(/\s/g, ""));

const VerificationContactDetailsForm: React.FC<VerificationContactDetailsFormProps> = ({
  form,
  handleChange,
}) => {
  const [touched, setTouched] = useState<{ businessEmail: boolean; phone: boolean }>({
    businessEmail: false,
    phone: false,
  });

  const emailError =
    touched.businessEmail && !validateEmail(form.businessEmail)
      ? "Please enter a valid email address"
      : "";

  const phoneError =
    touched.phone && !validatePhone(form.phone)
      ? "Please enter a valid phone number"
      : "";

  return (
    <Box>
      <Typography
        component={"h3"}
        marginBottom={4}
        fontSize={"18px"}
        fontWeight={"bold"}
        sx={{ color: theme.palette.text.primary }}
      >
        Contact Details
      </Typography>

      <Grid container spacing={3}>
        {/* Business Email */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!emailError}>
            <Typography sx={styles.inputLabel}>Business Email</Typography>
            <OutlinedInput
              required
              id="business-email"
              name="business-email"
              sx={styles.formField}
              placeholder="johndoe@invoix.com"
              value={form.businessEmail}
              onChange={(e) => handleChange("businessEmail", e.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, businessEmail: true }))
              }
            />
            {emailError && (
              <FormHelperText error>{emailError}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Phone */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!phoneError}>
            <Typography sx={styles.inputLabel}>Phone</Typography>
            <OutlinedInput
              required
              id="phone"
              name="phone"
              sx={styles.formField}
              placeholder="+44 1234 567890"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            />
            {phoneError && (
              <FormHelperText error>{phoneError}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerificationContactDetailsForm;