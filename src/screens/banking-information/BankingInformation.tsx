import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { styles } from "../../assets/global-styles";
import { saveFormToFile } from "../../helper/helper";
import theme from "../../styles/theme";

type AccountType = "current" | "saving";

interface BankingForm {
  bankName: string;
  accountNumber: string;
  accountType: AccountType;
  sortCode: string;
}

// Validation functions
const validateBankName = (name: string) => name.trim().length > 2;
const validateAccountNumber = (num: string) => /^\d{6,}$/.test(num.trim());
const validateSortCode = (code: string) => /^\d{2}-\d{2}-\d{2}$/.test(code.trim());

const BankingInformation: React.FC = () => {
  const [form, setForm] = useState<BankingForm>({
    bankName: "",
    accountNumber: "",
    accountType: "current",
    sortCode: "",
  });

  const [touched, setTouched] = useState({
    bankName: false,
    accountNumber: false,
    sortCode: false,
  });

  const bankNameError =
    touched.bankName && !validateBankName(form.bankName)
      ? "Please enter a valid bank name"
      : "";

  const accountNumberError =
    touched.accountNumber && !validateAccountNumber(form.accountNumber)
      ? "Please enter a valid account number (at least 6 digits)"
      : "";

  const sortCodeError =
    touched.sortCode && !validateSortCode(form.sortCode)
      ? "Please enter a valid sort code (e.g. 40-00-01)"
      : "";

  const handleChange = (field: keyof BankingForm, value: string | AccountType) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleBlur = (field: keyof typeof touched) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = () => {
    setTouched({
      bankName: true,
      accountNumber: true,
      sortCode: true,
    });
    if (
      validateBankName(form.bankName) &&
      validateAccountNumber(form.accountNumber) &&
      validateSortCode(form.sortCode)
    ) {
      saveFormToFile(form, "BankingInformation.json");
    }
  };

  return (
    <>
      <Box sx={styles.root}>
        <Container>
          <Typography sx={styles.sectionTitle}>
            Banking Information
          </Typography>
          <Typography sx={styles.sectionSubtitle}>
            This account is used in case of withdrawal actions lorem ipsum
          </Typography>

          {/* Row 1 */}
          <Box sx={styles.inputRow}>
            <FormControl fullWidth error={!!bankNameError}>
              <Typography sx={styles.inputLabel}>
                Bank Name <span style={styles.required}>*</span>
              </Typography>
              <OutlinedInput
                required
                id="bank-name"
                name="bank-name"
                placeholder="Bank Name"
                value={form.bankName}
                onChange={(e) => handleChange("bankName", e.target.value)}
                onBlur={handleBlur("bankName")}
                sx={styles.formField}
              />
              {bankNameError && (
                <FormHelperText error>{bankNameError}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={!!accountNumberError}>
              <Typography sx={styles.inputLabel}>
                Account Number <span style={styles.required}>*</span>
              </Typography>
              <OutlinedInput
                required
                id="account-number"
                name="account-number"
                placeholder="87654321"
                value={form.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value)}
                onBlur={handleBlur("accountNumber")}
                sx={styles.formField}
              />
              {accountNumberError && (
                <FormHelperText error>{accountNumberError}</FormHelperText>
              )}
            </FormControl>
          </Box>

          {/* Row 2 */}
          <Box sx={styles.inputRow}>
            <FormControl fullWidth>
              <Typography sx={styles.inputLabel}>
                Type of Account <span style={styles.required}>*</span>
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form.accountType}
                onChange={(e) => handleChange("accountType", e.target.value as AccountType)}
                sx={styles.formField}
              >
                <MenuItem value="current">Current</MenuItem>
                <MenuItem value="saving">Saving</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth error={!!sortCodeError}>
              <Typography sx={styles.inputLabel}>
                Sort Code <span style={styles.required}>*</span>
              </Typography>
              <OutlinedInput
                required
                id="sort-code"
                name="sort-code"
                placeholder="40-00-01"
                value={form.sortCode}
                onChange={(e) => handleChange("sortCode", e.target.value)}
                onBlur={handleBlur("sortCode")}
                sx={styles.formField}
              />
              {sortCodeError && (
                <FormHelperText error>{sortCodeError}</FormHelperText>
              )}
            </FormControl>
          </Box>

          {/* Save and reset button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 4,
              textTransform: "none",
              backgroundColor: theme.palette.secondary.main,
              ml: 1,
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default BankingInformation;