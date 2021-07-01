import { Formik,Form } from "formik";
import React from "react";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';
import {
  Button,
  Grid,
  Header,
  Message,
} from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loginAsync} from '../../store/actions/authActions';
export default function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: ""
  };

  const schema = Yup.object({
    email: Yup.string().required("E-posta zorunludur"),
    password: Yup.string().required("Şifre zorunludur")
  });

  const history = useHistory();
  const handleSubmit = (values) => {
    dispatch(loginAsync(values, history));
    //dispatch(signIn(values))
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
          `İş Arayan` Olarak Giriş Yap
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
            type="password"
            name="password"
            placeholder="Şifreniz"
            label="Şifreniz"
          ></HrmsTextInput>
          <Button className="w-100" color="red" type="submit">
            Giriş Yap
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