import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styles } from "../../../../assets/global-styles";
import { Dayjs } from "dayjs";
import { validateCountry, validateDate, validateEmail, validateName, validatePhone } from "../../../../helper/helper";

export interface DirectorInfo {
  firstName: string;
  lastName: string;
  birthDate: Dayjs | null;
  country: string;
  ownership: string;
  businessEmail: string;
  phone: string;
}

interface DirectorBlockProps {
  title: string;
  director: DirectorInfo;
  onChange: (field: keyof DirectorInfo, value: string | Dayjs | null) => void;
  countries: { code: string; name: string }[];
}

const DirectorInformationForm: React.FC<DirectorBlockProps> = ({
  title,
  director,
  onChange,
  countries,
}) => {
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    country: false,
    businessEmail: false,
    phone: false,
  });

  const firstNameError =
    touched.firstName && !validateName(director.firstName)
      ? "Please enter a valid first name"
      : "";

  const lastNameError =
    touched.lastName && !validateName(director.lastName)
      ? "Please enter a valid last name"
      : "";

  const birthDateError =
    touched.birthDate && !validateDate(director.birthDate)
      ? "Please select a valid date"
      : "";

  const countryError =
    touched.country && !validateCountry(director.country)
      ? "Please select a country"
      : "";

  const businessEmailError =
    touched.businessEmail && !validateEmail(director.businessEmail)
      ? "Please enter a valid email"
      : "";

  const phoneError =
    touched.phone && !validatePhone(director.phone)
      ? "Please enter a valid phone number"
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
              placeholder="John"
              value={director.firstName}
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
              placeholder="Doe"
              value={director.lastName}
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
                value={director.birthDate}
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
              value={director.country}
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
              value={director.ownership}
              onChange={(e) => onChange("ownership", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, ownership: true }))}
              sx={styles.formField}
            >
              <MenuItem value={"0%"}>0%</MenuItem>
              <MenuItem value={"25% and 50%"}>25% and 50%</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!businessEmailError}>
            <Typography sx={styles.inputLabel}>Business e-mail</Typography>
            <OutlinedInput
              required
              placeholder="johndoe@invoix.com"
              value={director.businessEmail}
              onChange={(e) => onChange("businessEmail", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, businessEmail: true }))}
              sx={styles.formField}
            />
            {businessEmailError && <FormHelperText error>{businessEmailError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!phoneError}>
            <Typography sx={styles.inputLabel}>Phone</Typography>
            <OutlinedInput
              required
              placeholder="+44(0) 20 3154 3586"
              value={director.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              sx={styles.formField}
            />
            {phoneError && <FormHelperText error>{phoneError}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DirectorInformationForm;