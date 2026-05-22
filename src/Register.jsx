import React from "react";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;