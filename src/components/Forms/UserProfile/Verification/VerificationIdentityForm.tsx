import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { FileUpload } from "../../../../components";
import { styles } from "../../../../assets/global-styles";
import { Dayjs } from "dayjs";
import theme from "../../../../styles/theme";
import { validateCountry, validateDate, validateDocumentNumber } from "../../../../helper/helper";

type DocumentType = "Passport" | "Driving License";

interface VerificationInfo {
  documentType: DocumentType;
  documentNumber: string;
  documentCountry: string;
  issuingDate: Dayjs | null;
  expirationDate: Dayjs | null;
}

interface VerificationIdentityBlockProps {
  form: VerificationInfo;
  handleChange: (field: keyof VerificationInfo, value: string | Dayjs | null) => void;
}

const VerificationIdentityForm: React.FC<VerificationIdentityBlockProps> = ({
  form,
  handleChange,
}) => {
  const [touched, setTouched] = useState({
    documentNumber: false,
    documentCountry: false,
    issuingDate: false,
    expirationDate: false,
  });

  const documentNumberError =
    touched.documentNumber && !validateDocumentNumber(form.documentNumber)
      ? "Please enter a valid document number"
      : "";

  const documentCountryError =
    touched.documentCountry && !validateCountry(form.documentCountry)
      ? "Please select a country"
      : "";

  const issuingDateError =
    touched.issuingDate && !validateDate(form.issuingDate)
      ? "Please select a valid issuing date"
      : "";

  const expirationDateError =
    touched.expirationDate && !validateDate(form.expirationDate)
      ? "Please select a valid expiration date"
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
        Identity Verification
      </Typography>

      <Grid container spacing={3}>
        {/* Document type */}
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth>
            <Typography sx={styles.inputLabel}>Document type</Typography>
            <Select
              labelId="document-type-label"
              id="document-type"
              value={form.documentType}
              onChange={(e) => handleChange("documentType", e.target.value)}
              sx={styles.formField}
            >
              <MenuItem value="Passport">Passport</MenuItem>
              <MenuItem value="Driving License">Driving License</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Document Number */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!documentNumberError}>
            <Typography sx={styles.inputLabel}>Document Number</Typography>
            <OutlinedInput
              required
              id="document-number"
              name="document-number"
              sx={styles.formField}
              placeholder="234354646"
              value={form.documentNumber}
              onChange={(e) => handleChange("documentNumber", e.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, documentNumber: true }))
              }
            />
            {documentNumberError && (
              <FormHelperText error>{documentNumberError}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Country of the document */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!documentCountryError}>
            <Typography sx={styles.inputLabel}>Country of the document</Typography>
            <Select
              labelId="document-country-label"
              id="document-country"
              value={form.documentCountry}
              onChange={(e) => handleChange("documentCountry", e.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, documentCountry: true }))
              }
              sx={styles.formField}
            >
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
            {documentCountryError && (
              <FormHelperText error>{documentCountryError}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Issuing date */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!issuingDateError}>
            <Typography sx={styles.inputLabel}>Issuing date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                sx={styles.formField}
                value={form.issuingDate}
                onChange={(e) => handleChange("issuingDate", e)}
                onError={() =>
                  setTouched((prev) => ({ ...prev, issuingDate: true }))
                }
                slotProps={{
                  textField: {
                    onBlur: () =>
                      setTouched((prev) => ({ ...prev, issuingDate: true })),
                  },
                }}
              />
            </LocalizationProvider>
            {issuingDateError && (
              <FormHelperText error>{issuingDateError}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Expiration date */}
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!expirationDateError}>
            <Typography sx={styles.inputLabel}>Expiration date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                sx={styles.formField}
                value={form.expirationDate}
                onChange={(e) => handleChange("expirationDate", e)}
                onError={() =>
                  setTouched((prev) => ({ ...prev, expirationDate: true }))
                }
                slotProps={{
                  textField: {
                    onBlur: () =>
                      setTouched((prev) => ({ ...prev, expirationDate: true })),
                  },
                }}
              />
            </LocalizationProvider>
            {expirationDateError && (
              <FormHelperText error>{expirationDateError}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Front Side Picture */}
        <Grid size={{ xs: 6 }}>
          <Box sx={styles.innerContainer}>
            <Typography sx={styles.label}>Front Side</Typography>
            <FileUpload />
          </Box>
        </Grid>

        {/* Back Side Picture */}
        <Grid size={{ xs: 6 }}>
          <Box sx={styles.innerContainer}>
            <Typography sx={styles.label}>Back Side</Typography>
            <FileUpload />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerificationIdentityForm;