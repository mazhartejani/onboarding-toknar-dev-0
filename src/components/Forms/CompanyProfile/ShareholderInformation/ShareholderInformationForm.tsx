import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styles } from "../../../../assets/global-styles";
import { Dayjs } from "dayjs";
import { countries } from "../../../../constants/countries";

export interface ShareholderInfo {
  firstName: string;
  lastName: string;
  birthDate: Dayjs | null;
  country: string;
  ownership: string;
}

interface ShareholderInformationFormProps {
  title: string;
  shareholder: ShareholderInfo;
  onChange: (field: keyof ShareholderInfo, value: string | Dayjs | null) => void;
  countries: { code: string; name: string }[];
}

const validateName = (name: string) => name.trim().length > 1;
const validateCountry = (country: string) => !!country;
const validateDate = (date: Dayjs | null) => !!date && date.isValid();

const ShareholderInformationForm: React.FC<ShareholderInformationFormProps> = ({
  title,
  shareholder,
  onChange,
}) => {
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    country: false,
    ownership: false,
  });

  const firstNameError =
    touched.firstName && !validateName(shareholder.firstName)
      ? "Please enter a valid first name"
      : "";

  const lastNameError =
    touched.lastName && !validateName(shareholder.lastName)
      ? "Please enter a valid last name"
      : "";

  const birthDateError =
    touched.birthDate && !validateDate(shareholder.birthDate)
      ? "Please select a valid date"
      : "";

  const countryError =
    touched.country && !validateCountry(shareholder.country)
      ? "Please select a country"
      : "";

  return (
    <Box>
      <Typography
        component={"h3"}
        marginBottom={4}
        fontSize={"18px"}
        fontWeight={"bold"}
      >
        {title}
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!firstNameError}>
            <Typography sx={styles.inputLabel}>First Name</Typography>
            <OutlinedInput
              required
              placeholder="First Name"
              value={shareholder.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, firstName: true }))}
              sx={styles.formField}
            />
            {firstNameError && <FormHelperText error>{firstNameError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!lastNameError}>
            <Typography sx={styles.inputLabel}>Last Name</Typography>
            <OutlinedInput
              required
              placeholder="Last Name"
              value={shareholder.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, lastName: true }))}
              sx={styles.formField}
            />
            {lastNameError && <FormHelperText error>{lastNameError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!birthDateError}>
            <Typography sx={styles.inputLabel}>Birth Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={shareholder.birthDate}
                format="DD/MM/YYYY"
                onChange={(date) => onChange("birthDate", date)}
                slotProps={{
                  textField: {
                    onBlur: () => setTouched((prev) => ({ ...prev, birthDate: true })),
                  },
                }}
                sx={styles.formField}
              />
            </LocalizationProvider>
            {birthDateError && <FormHelperText error>{birthDateError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!countryError}>
            <Typography sx={styles.inputLabel}>Country</Typography>
            <Select
              value={shareholder.country}
              onChange={(e) => onChange("country", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
              sx={styles.formField}
            >
              {countries.map((item) => (
                <MenuItem key={item.code} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            {countryError && <FormHelperText error>{countryError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth>
            <Typography sx={styles.inputLabel}>Ownership</Typography>
            <Select
              value={shareholder.ownership}
              onChange={(e) => onChange("ownership", e.target.value)}
              sx={styles.formField}
            >
              <MenuItem value={"0%"}>0%</MenuItem>
              <MenuItem value={"25% and 50%"}>25% and 50%</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShareholderInformationForm;