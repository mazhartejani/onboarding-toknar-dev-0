import { useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { styles } from "../../assets/global-styles";
import { Button, OutlinedInput, Select } from "@mui/material";
import { countries } from "../../constants/countries";

interface StepperProps {
  formData: any;
  setFormData: (val: any) => void;
}

const DirectorsInformation = ({ formData, setFormData }: StepperProps) => {
  const [country, setCountry] = useState("United Kingdom");
  const [ownership, setOwnership] = useState("0%");

  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Director Information Block */}
      <Box>
        <Typography
          component={"h3"}
          marginBottom={4}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Director 1 Details
        </Typography>

        <Grid container spacing={3}>
          {/* First Name */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>First Name</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="John"
              />
            </FormControl>
          </Grid>

          {/* Last Name */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Last Name</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="Doe"
              />
            </FormControl>
          </Grid>

          {/* Birth Date */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Birth Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={styles.formField} />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          {/* Country */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Country</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                sx={styles.formField}
              >
                {countries &&
                  countries.map((item) => (
                    <MenuItem key={item.code} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Ownership */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Ownership</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ownership}
                onChange={(event) => setOwnership(event.target.value)}
                sx={styles.formField}
              >
                <MenuItem value={"0%"}>0%</MenuItem>
                <MenuItem value={"25% and 50%"}>25% and 50%</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Business Email */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Business e-mail
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="johndoe@invoix.com"
              />
            </FormControl>
          </Grid>

          {/* Phone */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Phone</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="+44(0) 20 3154 3586"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Director Information Block */}
      <Box>
        <Typography
          component={"h3"}
          marginBottom={4}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Director 2 Details
        </Typography>

        <Grid container spacing={3}>
          {/* First Name */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>First Name</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="John"
              />
            </FormControl>
          </Grid>

          {/* Last Name */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Last Name</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="Doe"
              />
            </FormControl>
          </Grid>

          {/* Birth Date */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Birth Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={styles.formField} />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          {/* Country */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Country</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                sx={styles.formField}
              >
                {countries &&
                  countries.map((item) => (
                    <MenuItem key={item.code} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Ownership */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Ownership</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ownership}
                onChange={(event) => setOwnership(event.target.value)}
                sx={styles.formField}
              >
                <MenuItem value={"0%"}>0%</MenuItem>
                <MenuItem value={"25% and 50%"}>25% and 50%</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Business Email */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Business e-mail
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="johndoe@invoix.com"
              />
            </FormControl>
          </Grid>

          {/* Phone */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Phone</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                sx={styles.formField}
                placeholder="+44(0) 20 3154 3586"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box>
        {/* Previous */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, textTransform: "none", backgroundColor: "#1e73be" }}
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep - 1 })
          }
        >
          Previous
        </Button>

        {/* Add Ownership Information */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            textTransform: "none",
            backgroundColor: "#1e73be",
            ml: 1,
          }}
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep + 1 })
          }
        >
          Add Ownership Information
        </Button>
      </Box>
    </>
  );
};
export default DirectorsInformation;
