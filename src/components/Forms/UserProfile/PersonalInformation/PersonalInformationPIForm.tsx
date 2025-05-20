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
import { countries, type Country } from "../../../../constants/countries";
import { styles } from "../../../../assets/global-styles";
import { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import theme from "../../../../styles/theme";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  date: Dayjs | null;
  countryOfBirth: string;
  jobTitle: string;
  department: string;
  insuranceNumber: string;
}

interface PersonalInformationPIFormProps {
  form: PersonalInfo;
  handleChange: (field: keyof PersonalInfo, value: string | Dayjs | null) => void;
}

// validation functions
const validateName = (name: string) => /^[a-zA-Z]{2,}$/.test(name.trim());
const validateDate = (date: Dayjs | null) => !!date && date.isValid();
const validateCountry = (country: string) => !!country;
const validateJobTitle = (job: string) => job.trim().length > 1;
const validateDepartment = (dep: string) => dep.trim().length > 1;
const validateInsurance = (ins: string) => ins.trim().length > 4;

const PersonalInformationPIForm: React.FC<PersonalInformationPIFormProps> = ({ form, handleChange }) => {
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    date: false,
    countryOfBirth: false,
    jobTitle: false,
    department: false,
    insuranceNumber: false,
  });

  const firstNameError =
    touched.firstName && !validateName(form.firstName)
      ? "Please enter a valid first name"
      : "";

  const lastNameError =
    touched.lastName && !validateName(form.lastName)
      ? "Please enter a valid last name"
      : "";

  const dateError =
    touched.date && !validateDate(form.date)
      ? "Please select a valid date"
      : "";

  const countryError =
    touched.countryOfBirth && !validateCountry(form.countryOfBirth)
      ? "Please select a country"
      : "";

  const jobTitleError =
    touched.jobTitle && !validateJobTitle(form.jobTitle)
      ? "Please enter a valid job title"
      : "";

  const departmentError =
    touched.department && !validateDepartment(form.department)
      ? "Please enter a valid department"
      : "";

  const insuranceError =
    touched.insuranceNumber && !validateInsurance(form.insuranceNumber)
      ? "Please enter a valid insurance number"
      : "";

  return (
    <Box>
      <Typography component="h3" marginBottom={4} fontSize="18px" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!firstNameError}>
            <Typography sx={styles.inputLabel}>First Name</Typography>
            <OutlinedInput
              required
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, firstName: true }))}
              placeholder="John"
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
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, lastName: true }))}
              placeholder="Doe"
              sx={styles.formField}
            />
            {lastNameError && <FormHelperText error>{lastNameError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!dateError}>
            <Typography sx={styles.inputLabel}>Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                value={form.date}
                onChange={(newDate) => handleChange("date", newDate)}
                onError={() => setTouched((prev) => ({ ...prev, date: true }))}
                slotProps={{
                  textField: {
                    onBlur: () => setTouched((prev) => ({ ...prev, date: true })),
                  },
                }}
                sx={styles.formField}
              />
            </LocalizationProvider>
            {dateError && <FormHelperText error>{dateError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!countryError}>
            <Typography sx={styles.inputLabel}>Country of birth</Typography>
            <Select
              value={form.countryOfBirth}
              onChange={(e) => handleChange("countryOfBirth", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, countryOfBirth: true }))}
              sx={styles.formField}
            >
              {countries.map((item: Country) => (
                <MenuItem key={item.code} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            {countryError && <FormHelperText error>{countryError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!jobTitleError}>
            <Typography sx={styles.inputLabel}>Job title</Typography>
            <OutlinedInput
              required
              value={form.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, jobTitle: true }))}
              placeholder="Job title"
              sx={styles.formField}
            />
            {jobTitleError && <FormHelperText error>{jobTitleError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!departmentError}>
            <Typography sx={styles.inputLabel}>Department</Typography>
            <OutlinedInput
              required
              value={form.department}
              onChange={(e) => handleChange("department", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, department: true }))}
              placeholder="Department"
              sx={styles.formField}
            />
            {departmentError && <FormHelperText error>{departmentError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!insuranceError}>
            <Typography sx={styles.inputLabel}>National insurance number</Typography>
            <OutlinedInput
              required
              value={form.insuranceNumber}
              onChange={(e) => handleChange("insuranceNumber", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, insuranceNumber: true }))}
              placeholder="QQ 123456 C"
              sx={styles.formField}
            />
            {insuranceError && <FormHelperText error>{insuranceError}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInformationPIForm;