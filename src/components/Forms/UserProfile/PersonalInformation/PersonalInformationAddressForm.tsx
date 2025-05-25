import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { countries, type Country } from "../../../../constants/countries";
import { styles } from "../../../../assets/global-styles";
import { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import theme from "../../../../styles/theme";
import { validateAddress1, validateCity, validateCountry, validatePostalCode } from "../../../../helper/helper";

interface PersonalInfo {
  address1: string;
  address2: string;
  postalCode: string;
  city: string;
  country: string;
}

interface PersonalInformationAddressFormProps {
  form: PersonalInfo;
  handleChange: (field: keyof PersonalInfo, value: string | Dayjs | null) => void;
}

const PersonalInformationAddressForm: React.FC<PersonalInformationAddressFormProps> = ({ form, handleChange }) => {
  const [touched, setTouched] = useState({
    address1: false,
    postalCode: false,
    city: false,
    country: false,
  });

  const address1Error =
    touched.address1 && !validateAddress1(form.address1)
      ? "Please enter a valid address"
      : "";

  const postalCodeError =
    touched.postalCode && !validatePostalCode(form.postalCode)
      ? "Please enter a valid postal code"
      : "";

  const cityError =
    touched.city && !validateCity(form.city)
      ? "Please enter a valid city"
      : "";

  const countryError =
    touched.country && !validateCountry(form.country)
      ? "Please select a country"
      : "";

  return (
    <Box>
      <Typography component="h3" marginBottom={4} fontSize="18px" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
        Address
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth error={!!address1Error}>
            <Typography sx={styles.inputLabel}>Address</Typography>
            <OutlinedInput
              required
              value={form.address1}
              onChange={(e) => handleChange("address1", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, address1: true }))}
              placeholder="111 Fleet Street"
              sx={styles.formField}
            />
            {address1Error && <FormHelperText error>{address1Error}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth>
            <OutlinedInput
              value={form.address2}
              onChange={(e) => handleChange("address2", e.target.value)}
              placeholder="Address 2"
              sx={styles.formField}
            />
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!postalCodeError}>
            <OutlinedInput
              required
              value={form.postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, postalCode: true }))}
              placeholder="SW3 2AL"
              sx={styles.formField}
            />
            <Typography sx={styles.inputHelper}>Postal Code</Typography>
            {postalCodeError && <FormHelperText error>{postalCodeError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!cityError}>
            <OutlinedInput
              required
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, city: true }))}
              placeholder="London"
              sx={styles.formField}
            />
            <Typography sx={styles.inputHelper}>City</Typography>
            {cityError && <FormHelperText error>{cityError}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!countryError}>
            <Select
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
              sx={styles.formField}
            >
              {countries.map((item: Country) => (
                <MenuItem key={item.code} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <Typography sx={styles.inputHelper}>Country</Typography>
            {countryError && <FormHelperText error>{countryError}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInformationAddressForm;