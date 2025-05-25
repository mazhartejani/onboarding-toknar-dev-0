import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { OutlinedInput, Select, FormHelperText } from "@mui/material";
import Upload from "@mui/icons-material/Upload";
import { styles } from "../../../../assets/global-styles";
import { countries } from "../../../../constants/countries";
import { sectors } from "../../../../constants/sectors";
import { companyTypes } from "../../../../constants/company-types";
import { industries } from "../../../../constants/industries";
import dayjs, { Dayjs } from "dayjs";
import theme from "../../../../styles/theme";
import { validateComapnyName, validateCountry, validateDate, validateDbaName, validateDuns, validateIndustry, validateNumEmployees, validateRegNumber, validateSector, validateType, validateUrl } from "../../../../helper/helper";

export interface CompanyInformationType {
  name: string;
  type: string;
  sector: string;
  reg_country: string;
  reg_number: string;
  start_date: Dayjs | null;
  dba_name: string;
  company_url: string;
  num_of_employees: string;
  duns_number: string;
  industry: string;
}

interface CompanyInformationFormProps {
  companyInfo: CompanyInformationType;
  onChange: (field: keyof CompanyInformationType, value: string | Dayjs | null) => void;
}

const CompanyInformationForm: React.FC<CompanyInformationFormProps> = ({
  companyInfo,
  onChange,
}) => {
  const [touched, setTouched] = useState({
    name: false,
    type: false,
    sector: false,
    reg_country: false,
    reg_number: false,
    start_date: false,
    dba_name: false,
    company_url: false,
    num_of_employees: false,
    duns_number: false,
    industry: false,
  });

  const nameError =
    touched.name && !validateComapnyName(companyInfo.name)
      ? "Please enter a valid company name"
      : "";

  const typeError =
    touched.type && !validateType(companyInfo.type)
      ? "Please select a company type"
      : "";

  const sectorError =
    touched.sector && !validateSector(companyInfo.sector)
      ? "Please select a sector"
      : "";

  const countryError =
    touched.reg_country && !validateCountry(companyInfo.reg_country)
      ? "Please select a country"
      : "";

  const regNumberError =
    touched.reg_number && !validateRegNumber(companyInfo.reg_number)
      ? "Please enter a valid registration number"
      : "";

  const dateError =
    touched.start_date && !validateDate(companyInfo.start_date)
      ? "Please select a valid date"
      : "";

  const dbaNameError =
    touched.dba_name && !validateDbaName(companyInfo.dba_name)
      ? "Please enter a valid DBA name"
      : "";

  const urlError =
    touched.company_url && !validateUrl(companyInfo.company_url)
      ? "Please enter a valid company URL"
      : "";

  const numEmployeesError =
    touched.num_of_employees && !validateNumEmployees(companyInfo.num_of_employees)
      ? "Please enter a valid number"
      : "";

  const dunsError =
    touched.duns_number && !validateDuns(companyInfo.duns_number)
      ? "Please enter a valid DUNS number or leave blank"
      : "";

  const industryError =
    touched.industry && !validateIndustry(companyInfo.industry)
      ? "Please select an industry"
      : "";

  return (
    <Box>
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
          backgroundColor: theme.palette.secondary.main,
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
        Upload your logo to increase visibility and brand awareness among funders! <br />
        This logo will be shown in Market Place lorem ipsum
      </Typography>

      <Typography
        component={"h3"}
        marginBottom={4}
        fontSize={"18px"}
        fontWeight={"bold"}
        mt={4}
      >
        Company Information
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!nameError}>
            <Typography sx={styles.inputLabel}>Legal company name</Typography>
            <OutlinedInput
              required
              placeholder="Company Name"
              sx={styles.formField}
              value={companyInfo.name}
              onChange={(e) => onChange("name", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            />
            {nameError && <FormHelperText error>{nameError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!typeError}>
            <Typography sx={styles.inputLabel}>Company Type</Typography>
            <Select
              value={companyInfo.type}
              onChange={(e) => onChange("type", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, type: true }))}
              sx={styles.formField}
            >
              {companyTypes.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {typeError && <FormHelperText error>{typeError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!sectorError}>
            <Typography sx={styles.inputLabel}>Sector</Typography>
            <Select
              value={companyInfo.sector}
              onChange={(e) => onChange("sector", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, sector: true }))}
              sx={styles.formField}
            >
              {sectors.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {sectorError && <FormHelperText error>{sectorError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!countryError}>
            <Typography sx={styles.inputLabel}>Country of registration</Typography>
            <Select
              value={companyInfo.reg_country}
              onChange={(e) => onChange("reg_country", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, reg_country: true }))}
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
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!regNumberError}>
            <Typography sx={styles.inputLabel}>Registration number</Typography>
            <OutlinedInput
              required
              placeholder="Registration number"
              sx={styles.formField}
              value={companyInfo.reg_number}
              onChange={(e) => onChange("reg_number", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, reg_number: true }))}
            />
            {regNumberError && <FormHelperText error>{regNumberError}</FormHelperText>}
            <Typography sx={styles.inputHelper}>Registration number</Typography>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!dateError}>
            <Typography sx={styles.inputLabel}>Business start date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={styles.formField}
                value={companyInfo.start_date}
                format="DD/MM/YYYY"
                onChange={(date) => onChange("start_date", date ?? dayjs())}
                slotProps={{
                  textField: {
                    onBlur: () => setTouched((prev) => ({ ...prev, start_date: true })),
                  },
                }}
              />
            </LocalizationProvider>
            {dateError && <FormHelperText error>{dateError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!dbaNameError}>
            <Typography sx={styles.inputLabel}>DBA name</Typography>
            <OutlinedInput
              required
              placeholder="DBA name (doing business as)"
              sx={styles.formField}
              value={companyInfo.dba_name}
              onChange={(e) => onChange("dba_name", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, dba_name: true }))}
            />
            {dbaNameError && <FormHelperText error>{dbaNameError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!urlError}>
            <Typography sx={styles.inputLabel}>Company URL</Typography>
            <OutlinedInput
              required
              placeholder="Company URL"
              sx={styles.formField}
              value={companyInfo.company_url}
              onChange={(e) => onChange("company_url", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, company_url: true }))}
            />
            {urlError && <FormHelperText error>{urlError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth error={!!numEmployeesError}>
            <Typography sx={styles.inputLabel}>Number of Employees</Typography>
            <OutlinedInput
              required
              placeholder="Number of Employees"
              sx={styles.formField}
              value={companyInfo.num_of_employees}
              onChange={(e) => onChange("num_of_employees", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, num_of_employees: true }))}
            />
            {numEmployeesError && <FormHelperText error>{numEmployeesError}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!dunsError}>
            <Typography sx={styles.inputLabel}>DUNS number</Typography>
            <OutlinedInput
              required
              placeholder="DUNS number"
              sx={styles.formField}
              value={companyInfo.duns_number}
              onChange={(e) => onChange("duns_number", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, duns_number: true }))}
            />
            {dunsError && <FormHelperText error>{dunsError}</FormHelperText>}
            <Typography sx={styles.inputHelper}>
              (if available, check https://www.dnb.co.uk/duns-number/lookup.html)
            </Typography>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormControl fullWidth error={!!industryError}>
            <Typography sx={styles.inputLabel}>Industry</Typography>
            <Select
              value={companyInfo.industry}
              onChange={(e) => onChange("industry", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, industry: true }))}
              sx={styles.formField}
            >
              {industries.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {industryError && <FormHelperText error>{industryError}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyInformationForm;