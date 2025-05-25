import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { styles } from "../../../../assets/global-styles";
import { countries } from "../../../../constants/countries";
import { cities } from "../../../../constants/cities";
import { validateCity, validateCountry, validatePostalCode, validateStreet } from "../../../../helper/helper";

export interface CompanyAddressType {
  street: string;
  postal_code: string;
  country: string;
  city: string;
}

interface CompanyAddressFormProps {
  address: CompanyAddressType;
  onChange: (field: keyof CompanyAddressType, value: string) => void;
}

const CompanyAddressForm: React.FC<CompanyAddressFormProps> = ({
  address,
  onChange,
}) => {
  const [touched, setTouched] = useState({
    street: false,
    postal_code: false,
    country: false,
    city: false,
  });

  const streetError =
    touched.street && !validateStreet(address.street)
      ? "Please enter a valid street"
      : "";

  const postalCodeError =
    touched.postal_code && !validatePostalCode(address.postal_code)
      ? "Please enter a valid postal code"
      : "";

  const countryError =
    touched.country && !validateCountry(address.country)
      ? "Please select a country"
      : "";

  const cityError =
    touched.city && !validateCity(address.city)
      ? "Please select a city"
      : "";

  return (
    <Box>
      <Typography
        component={"h3"}
        marginBottom={4}
        fontSize={"18px"}
        fontWeight={"bold"}
      >
        Company Address
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!streetError}>
            <Typography sx={styles.inputLabel}>Street</Typography>
            <OutlinedInput
              required
              placeholder="111 Fleet Street"
              sx={styles.formField}
              value={address.street}
              onChange={(e) => onChange("street", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, street: true }))}
            />
            {streetError && <FormHelperText error>{streetError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!postalCodeError}>
            <Typography sx={styles.inputLabel}>Postal Code</Typography>
            <OutlinedInput
              required
              placeholder="EC4A 2AB"
              sx={styles.formField}
              value={address.postal_code}
              onChange={(e) => onChange("postal_code", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, postal_code: true }))}
            />
            {postalCodeError && <FormHelperText error>{postalCodeError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!countryError}>
            <Typography sx={styles.inputLabel}>Country</Typography>
            <Select
              value={address.country}
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
          <FormControl fullWidth error={!!cityError}>
            <Typography sx={styles.inputLabel}>City</Typography>
            <Select
              value={address.city}
              onChange={(e) => onChange("city", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, city: true }))}
              sx={styles.formField}
            >
              {cities.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {cityError && <FormHelperText error>{cityError}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyAddressForm;