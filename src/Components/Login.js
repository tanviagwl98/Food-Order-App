import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be atleast 8 characters"),
});

export const Login = () => {
    const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Form is submitted");
    navigate('/home');
    console.log(navigate('/home'))
  };
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="Login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                <p className="error">{errors.email && touched.email && errors.email}</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="error">{errors.password && touched.password && errors.password}</p>
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
 
