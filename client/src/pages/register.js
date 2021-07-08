import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
    gender: "male",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Social</h3>
        {/* fullname */}
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="fullname"
            value={fullname}
            onChange={handleChangeInput}
            style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
          />
          <small className="form-text text-danger">
            {alert.fullname ? alert.fullname : ""}
          </small>
        </div>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            value={username.toLowerCase().replace(/ /g, "")}
            onChange={handleChangeInput}
            style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
          />
          <small className="form-text text-danger">
            {alert.username ? alert.username : ""}
          </small>
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChangeInput}
            style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
          />
          <small className="form-text text-danger">
            {alert.email ? alert.email : ""}
          </small>
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="pass">
            <input
              type={typePass ? "text" : "password"}
              name="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handleChangeInput}
              style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
          <small className="form-text text-danger">
            {alert.password ? alert.password : ""}
          </small>
        </div>

        {/* confirm password */}
        <div className="mb-3">
          <label htmlFor="cf_password" className="form-label">
            Confirm Password
          </label>
          <div className="pass">
            <input
              type={typeCfPass ? "text" : "password"}
              name="cf_password"
              className="form-control"
              id="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
              style={{ background: `${alert.cf_password ? "#fd2d6a14" : ""}` }}
            />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? "Hide" : "Show"}
            </small>
          </div>
          <small className="form-text text-danger">
            {alert.cf_password ? alert.cf_password : ""}
          </small>
        </div>

        <div className="d-flex justify-content-between mx-0 mb-3">
          <label htmlFor="male">
            Male:{" "}
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              defaultChecked
              onChange={handleChangeInput}
            />
          </label>
          <label htmlFor="female">
            Female:{" "}
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChangeInput}
            />
          </label>
          <label htmlFor="other">
            Other:{" "}
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={handleChangeInput}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>

        <p className="my-2">
          Already have an account?{" "}
          <Link to="/" style={{ color: "crimson" }}>
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
