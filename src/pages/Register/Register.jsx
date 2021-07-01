import { Formik,Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import "./Register.css";
import EmployeeService from "../../services/employeeService";
import { toast } from "react-toastify";
import { NavLink, useHistory } from "react-router-dom";
export default function Register() {
  const initialValues = {
    dateOfBirth: new Date(),
    email: "",
    firstName: "",
    lastName: "",
    nationalityId: "",
    password: "",
    verifyPassword: "",
  };

  const schema = Yup.object({
    dateOfBirth: Yup.date().required("Doğum tarihi zorunludur."),
    email: Yup.string().required("E-posta zorunludur"),
    firstName: Yup.string().required("Ad zorunludur"),
    lastName: Yup.string().required("Soyad zorunludur"),
    nationalityId: Yup.string()
      .required("TC Kimlik zorunludur")
      .min(11, "TCKN 11 karakterden oluşmalıdır.")
      .max(11, "TCKN 11 karakterden oluşmalıdır."),
    password: Yup.string().required("Şifre zorunludur"),
    verifyPassword: Yup.string()
      .required("Şifre tekrarı zorunludur.")
      .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor"),
  });

  const history = useHistory();

  const handleSubmit = (values) => {
    let employeeService = new EmployeeService();
    employeeService
      .register(values)
      .then((s) => {
        if (s.data.success) {
          toast.success(s.data.message);
          history.push("/homepage"); // TO DO : login page redirect when it's done.
        } else {
          toast.error(`Kayıt Başarısız : ${s.data.message}`);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column className="general-grid" style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
          `İş Arayan` Olarak Kayıt Ol
          </Header>
          <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="ui form">
          <HrmsTextInput
            name="email"
            placeholder="eposta@adres.com"
            label="E-posta Adresiniz"
          ></HrmsTextInput>
          <HrmsTextInput
            name="firstName"
            placeholder="Adınız"
            label="Adınız"
          ></HrmsTextInput>
          <HrmsTextInput
            name="lastName"
            placeholder="Soyadınız"
            label="Soyadınız"
          ></HrmsTextInput>
          <HrmsTextInput
            name="nationalityId"
            placeholder="TC Kimlik No"
            label="TC Kimlik No"
          ></HrmsTextInput>
          <HrmsTextInput
            type="date"
            name="dateOfBirth"
            placeholder="Doğum Tarihiniz"
            label="Doğum Tarihiniz"
          ></HrmsTextInput>
          <HrmsTextInput
            type="password"
            name="password"
            placeholder="Şifreniz"
            label="Şifreniz"
          ></HrmsTextInput>
          <HrmsTextInput
            type="password"
            name="verifyPassword"
            placeholder="Şifrenizi onaylayın"
            label="Şifrenizi onaylayın"
          ></HrmsTextInput>
          <Button className="w-100" color="green" type="submit">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
          <Message>
            Hesabın var mı? <NavLink to="/login">Giriş Yap</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
     </div>
  );
}