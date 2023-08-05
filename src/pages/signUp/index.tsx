import { InputField } from "@/components/input";
import { Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import * as Yup from "yup"

import { UiState } from "@/data/constants";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/store";
import { ViewState } from "@/store/ui-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signUpThunk } from "./actions";
import { useSignUp } from "./hook";
import { Link } from "react-router-dom";
import { TopMessage } from "@/components/message";

const signUpValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email required."),
    firstName: Yup.string().min(3, "Min is 3").required("First name required."),
    lastName: Yup.string().min(3, "Min is 3").required("Last name is required."),
    password: Yup.string().min(6, "Min is 6").required("Password is required."),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password must match").required("Confirm password required.")
})

const SignUpForm : React.FC = () => {
    const [viewState, signUpAction] = useSignUp();

    

    return <div className="container">
        <div className="row d-flex justify-content-center">

            <div className="col-md-4 mt-5">
                <TopMessage viewState={viewState} />
                <div className="card">
                    <div className="card-body">
                        <Formik initialValues={{
                            email: '',
                            firstName: '',
                            lastName: '',
                            password: '',
                            confirmPassword: ''
                        }}

                            validationSchema={signUpValidationSchema}

                            onSubmit={(values, { setSubmitting }) => {
                                signUpAction(values);
                            }}>
                            {
                                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                                (
                                    <form onSubmit={handleSubmit} method="post">
                                        <InputField
                                            id="email"
                                            label="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                            type="email"
                                            error={errors.email && touched.email ? errors.email : null} ></InputField>
                                        <div className="row">
                                            <div className="col">
                                                <InputField
                                                    id="firstName"
                                                    label="First name"
                                                    onChange={handleChange}
                                                    value={values.firstName}
                                                    type="text"
                                                    error={errors.firstName && touched.firstName ? errors.firstName : null}
                                                ></InputField>
                                            </div>
                                            <div className="col">
                                                <InputField
                                                    id="lastName"
                                                    label="Last name"
                                                    onChange={handleChange}
                                                    value={values.lastName}
                                                    type="text"
                                                    error={errors.lastName && touched.lastName ? errors.lastName : null}></InputField>
                                            </div>
                                        </div>
                                        <InputField
                                            id="password"
                                            label="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                            type="password"
                                            error={errors.password && touched.password ? errors.password : null}></InputField>
                                        <InputField
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            onChange={handleChange}
                                            value={values.confirmPassword}
                                            type="password"
                                            error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}></InputField>
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>
                                )
                            }


                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export const SignUpPage: React.FC = () => {
    return <SignUpForm></SignUpForm>
}