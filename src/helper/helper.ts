import dayjs, { Dayjs } from "dayjs";

export const saveFormToFile = (formData: unknown, fileName = "data.json") => {  
   const replacer = (_key: string, value: unknown) => {
    // If value is an ISO date string, format it as DD/MM/YYYY
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
      return dayjs(value).format("DD/MM/YYYY");
    }
    return value;
  };

  const fileData = JSON.stringify(formData, replacer, 2);
  const blob = new Blob([fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
};

export const validateName = (name: string) => /^[a-zA-Z]{2,}$/.test(name.trim());
export const validateDate = (date: Dayjs | null) => !!date && date.isValid();
export const validateJobTitle = (job: string) => job.trim().length > 1;
export const validateDepartment = (dep: string) => dep.trim().length > 1;
export const validateInsurance = (ins: string) => ins.trim().length > 4;
export const validateAddress1 = (address: string) => address.trim().length > 2;
export const validatePostalCode = (postal: string) => postal.trim().length > 2;
export const validateCity = (city: string) => /^[a-zA-Z]{2,}$/.test(city.trim());
export const validateCountry = (country: string) => !!country; 
export const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone: string) => /^\+?\d{7,15}$/.test(phone.replace(/\s/g, ""));
export const validateDocumentNumber = (num: string) => num.trim().length > 4;
export const validateStreet = (street: string) => street.trim().length > 2;
export const validateType = (type: string) => !!type && type !== "Select Company Type";
export const validateSector = (sector: string) => !!sector && sector !== "Select Sector";
export const validateRegNumber = (num: string) => num.trim().length > 2;
export const validateDbaName = (name: string) => name.trim().length > 1;
export const validateUrl = (url: string) => url.trim().length > 3;
export const validateNumEmployees = (num: string) => num.trim().length > 0 && !isNaN(Number(num));
export const validateDuns = (duns: string) => duns.trim().length === 0 || duns.trim().length > 3;
export const validateIndustry = (industry: string) => !!industry && industry !== "Select your industry";
export const validateComapnyName = (name: string) => name.trim().length > 1;