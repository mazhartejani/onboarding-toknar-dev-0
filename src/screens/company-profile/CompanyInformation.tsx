import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Upload from "@mui/icons-material/Upload";
import dayjs from "dayjs";

import { styles } from "../../assets/global-styles";
import { Button, OutlinedInput, Select } from "@mui/material";
import { countries } from "../../constants/countries";
import { sectors } from "../../constants/sectors";
import { companyTypes } from "../../constants/company-types";
import { industries } from "../../constants/industries";
import { cities } from "../../constants/cities";

interface StepperProps {
  formData: any;
  setFormData: (val: any) => void;
}

const CompanyInformation = ({ formData, setFormData }: StepperProps) => {

  const handleChange = (event: any, type: string) => {
    setFormData({
      ...formData,
      company_information: {
        ...formData.company_information,
        [type]: event.target.value,
      },
    });
  };

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography
          component="span"
          color="#b4b4b9"
          fontSize={"13px"}
          fontWeight={500}
        >
          Company Logo
        </Typography>
        <Box
          component={"a"}
          href="#"
          sx={{
            backgroundColor: "#1e73be",
            px: 3,
            py: 2,
            borderRadius: 1,
            my: 1,
            display: "flex",
            maxWidth: "fit-content",
            textDecoration: "none",
          }}
        >
          <Upload sx={{ color: "#ffffff" }} />
          <Typography color="#ffffff" fontSize={"14px"} marginLeft={1}>
            Choose File
          </Typography>
        </Box>
        <Typography component="p" color="#666666" fontSize={"12px"}>
          Upload your logo to increase visibility and brand awareness among
          funders! <br />
          This logo will be shown in Market Place lorem ipsum
        </Typography>
      </Box>

      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Company Information Block */}
      <Box>
        <Typography
          component={"h3"}
          marginBottom={4}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Company Information
        </Typography>

        <Grid container spacing={3}>
          {/* Company Name */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Legal company name
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="Company Name"
                sx={styles.formField}
                value={formData["company_information"]["name"]}
                onChange={(event) => handleChange(event, "name")}
              />
            </FormControl>
          </Grid>

          {/* Company Type */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Company Type
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["type"]}
                onChange={(event) => handleChange(event, "type")}
                sx={styles.formField}
              >
                {companyTypes &&
                  companyTypes.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Sector */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Sector</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["sector"]}
                onChange={(event) => handleChange(event, "sector")}
                sx={styles.formField}
              >
                {sectors &&
                  sectors.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Country of Registration */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Country of registration
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["reg_country"]}
                onChange={(event) => handleChange(event, "reg_country")}
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

          {/* Registration number */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Registration number
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="Registration number"
                sx={styles.formField}
                value={formData["company_information"]["reg_number"]}
                onChange={(event) => handleChange(event, "reg_number")}
              />
              <Typography sx={styles.inputHelper}>
                Registration number
              </Typography>
            </FormControl>
          </Grid>

          {/* Business Start Date */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Business start date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={styles.formField}
                  value={dayjs(formData["company_information"]["start_date"])}
                  onChange={(newValue) =>
                    setFormData({
                      ...formData,
                      company_information: {
                        ...formData.company_information,
                        start_date: dayjs(newValue),
                      },
                    })
                  }
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          {/* DBA name */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>DBA name</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="DBA name (doing business as)"
                sx={styles.formField}
                value={formData["company_information"]["dba_name"]}
                onChange={(event) => handleChange(event, "dba_name")}
              />
            </FormControl>
          </Grid>

          {/* Company URL */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Company URL
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="Company URL"
                sx={styles.formField}
                value={formData["company_information"]["company_url"]}
                onChange={(event) => handleChange(event, "company_url")}
              />
            </FormControl>
          </Grid>

          {/* Number of Employees */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Number of Employees
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="Number of Employees"
                sx={styles.formField}
                value={formData["company_information"]["num_of_employees"]}
                onChange={(event) => handleChange(event, "num_of_employees")}
              />
            </FormControl>
          </Grid>

          {/* DUNS number */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                DUNS number
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="DUNS number"
                sx={styles.formField}
                value={formData["company_information"]["duns_number"]}
                onChange={(event) => handleChange(event, "duns_number")}
              />
              <Typography sx={styles.inputHelper}>
                (if available, check
                https://www.dnb.co.uk/duns-number/lookup.html)
              </Typography>
            </FormControl>
          </Grid>

          {/* Industry */}
          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Industry</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["industry"]}
                onChange={(event) => handleChange(event, "industry")}
                sx={styles.formField}
              >
                {industries &&
                  industries.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Company Address Block */}
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
          {/* Street */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Street</Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="111 Fleet Street"
                sx={styles.formField}
                value={formData["company_information"]["street"]}
                onChange={(event) => handleChange(event, "street")}
              />
            </FormControl>
          </Grid>

          {/* Postal Code */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Postal Code
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="EC4A 2AB"
                sx={styles.formField}
                value={formData["company_information"]["posta_code"]}
                onChange={(event) => handleChange(event, "posta_code")}
              />
            </FormControl>
          </Grid>

          {/* Country */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>Country</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["country"]}
                onChange={(event) => handleChange(event, "country")}
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

          {/* City */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>City</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData["company_information"]["city"]}
                onChange={(event) => handleChange(event, "city")}
                sx={styles.formField}
              >
                {cities &&
                  cities.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Add Directors information */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4, textTransform: "none", backgroundColor: "#1e73be" }}
        onClick={() =>
          setFormData({ ...formData, activeStep: formData.activeStep + 1 })
        }
      >
        Add Directors Information
      </Button>
    </>
  );
};
export default CompanyInformation;
