import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import * as yup from "yup";
import { Formik } from "formik";
import Header from "../../components/Header";
import { ColorModeContext, tokens } from '../../theme'

const initialValues = {
  fullName: "",
  gender: "",
  contact: "",
  measurements: [],
  date: "",
  image: "",
};

const phoneRegExp = /^\+?(234)?[789]\d{9}$/;

const userSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  gender: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is not valid")
    .required("required"),
  date: yup.string().required("required"),
  image: yup.string().required("required"),
});

const Measurement = () => {
  const [measurementFields, setMeasurementFields] = useState([]);

  const addMeasurementField = () => {
    setMeasurementFields((prevFields) => [
      ...prevFields,
      { name: "", value: "" },
    ]);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box m="20px">
      <Header title="MEASUREMENT" subtitle="Add a New Client Measurement" />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              name="fullName"
              error={!!touched.fullName && !!errors.fullName}
              helperText={touched.fullName && errors.fullName}
              sx={{ gridColumn: "span 2", marginBottom: "15px" }}
            />
            <FormControl fullWidth sx={{ gridColumn: "span 2", marginBottom: "15px" }}>
              <InputLabel id="gender-label">Select Gender</InputLabel>
              <Select
                name="gender"
                type="text"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
                variant="filled"
                displayEmpty
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 2", marginBottom: "15px" }}
            />
            <Button
              fullWidth
              type="button"
              color="secondary"
              variant="contained"
              onClick={addMeasurementField}
              sx={{ marginBottom: "15px", height: "40px", display: "flex", gap: "5px", alignItems: "center" }}
            >
              Add Measurement
              <CiCirclePlus className="text-xl" />
            </Button>
            {measurementFields.map((field, index) => (
              <Box key={index} display="flex" alignItems="center" mt="15px">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Measurement Name"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setMeasurementFields((prevFields) =>
                      prevFields.map((item, i) =>
                        i === index ? { ...item, name: e.target.value } : item
                      )
                    )
                  }
                  value={field.name}
                  name="measurements"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ flexGrow: 1, marginRight: '10px' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Measurement Value"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setMeasurementFields((prevFields) =>
                      prevFields.map((item, i) =>
                        i === index ? { ...item, value: e.target.value } : item
                      )
                    )
                  }
                  value={field.value}
                  name="measurements"
                  error={!!touched.value && !!errors.value}
                  helperText={touched.value && errors.value}
                  sx={{ flexGrow: 1, marginRight: '10px' }}
                />
                <Button
                  type="button"
                  color="secondary"
                  variant="contained"
                  onClick={() =>
                    setMeasurementFields((prevFields) =>
                      prevFields.filter((_, i) => i !== index)
                    )
                  }
                  sx={{ borderRadius: "20px", width: "50px", height: "40px", minWidth: "unset", fontSize: "24px" }}
                >
                  <CiCircleMinus />
                </Button>
              </Box>
            ))}
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>

          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Measurement;
