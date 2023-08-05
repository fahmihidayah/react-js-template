import { InputField } from "@/components/input";
import { postLogin } from "@/data/apis/auth";
import { UiState } from "@/data/constants";
import { BaseResponse } from "@/data/dto";
import { error } from "console";
import { Formik, FormikValues } from "formik";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ActionFunction, Form, Link, LoaderFunction, useActionData, useNavigate, useSubmit } from "react-router-dom";
import { redirect } from "react-router-dom";
import * as Yup from 'yup';
import { isTokenAvailable } from "@/data/locals";
import { useLogin } from "./hook";
import { TopMessage } from "@/components/message";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Required').required('Email Required'),
    password: Yup.string().min(6).required('Password Required')
})

export const LoginPage: React.FC = () => {

    const [viewState, loginAction] = useLogin()

    return <div className="container">

        <div className="row d-flex justify-content-center">

            <div className="col-md-4 mt-5">
                <TopMessage viewState={viewState} />
                <div className="card">
                    <div className="card-body">

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}

                            validationSchema={loginValidationSchema}

                            onSubmit={(values, { setSubmitting }) => {
                                loginAction(values)
                            }}
                        >
                            {
                                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                                (
                                    <form onSubmit={handleSubmit} method="post">
                                        <InputField
                                            id="email"
                                            label="Email"
                                            type="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            error={errors.email && touched.email ? errors.email : null}
                                        ></InputField>

                                        <InputField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            error={errors.password && touched.password ? errors.password : null}
                                        ></InputField>
                                        <div className="d-grid">
                                            {viewState.uiState !== UiState.loading && <button className="btn btn-primary mb-3" type="submit">Login</button>}
                                            {viewState.uiState === UiState.loading && <button className="btn btn-primary" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span className="sr-only">Loading...</span>
                                            </button>}
                                            
                                            <Link className="btn btn-success" to="/sign_up">Sign Up</Link>
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

export const loginLoader: LoaderFunction = async () => {
    if (isTokenAvailable())
        return redirect("/admin")
    return null;
}

export const loginAction: ActionFunction = async ({ request, params }) => {
    const form = await request.formData()


    const response = await postLogin({
        email: form.get('email') as string,
        password: form.get('password') as string
    })

    console.log(response)
    if (response.error) {
        return response;
    }

    return redirect('/')
}