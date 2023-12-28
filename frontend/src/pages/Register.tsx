import { useForm } from "react-hook-form";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, watch } = useForm<RegisterFormData>();

  return (
    <form className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Create an Account</h2>

      <div className="flex flex-col gap-5 md:flex-row">
        <label
          htmlFor="firstName"
          className="flex-1 text-sm font-bold text-gray-700"
        >
          <span>First Name</span>
          <input
            type="text"
            id="firstName"
            className="w-full p-3 mt-2 font-normal border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
            autoComplete="given-name"
            {...register("firstName", { required: "This field is required" })}
          />
        </label>

        <label
          htmlFor="lastName"
          className="flex-1 text-sm font-bold text-gray-700"
        >
          <span>Last Name</span>
          <input
            type="text"
            id="lastName"
            className="w-full p-3 mt-2 font-normal border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
            autoComplete="family-name"
            {...register("lastName", { required: "This field is required" })}
          />
        </label>
      </div>

      <label htmlFor="email" className="flex-1 text-sm font-bold text-gray-700">
        <span>Email</span>
        <input
          type="email"
          id="email"
          className="w-full p-3 mt-2 font-normal border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
          autoComplete="email"
          {...register("email", { required: "This field is required" })}
        />
      </label>

      <label
        htmlFor="password"
        className="flex-1 text-sm font-bold text-gray-700"
      >
        <span>Password</span>
        <input
          type="password"
          id="password"
          className="w-full p-3 mt-2 font-normal border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
          autoComplete="new-password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
      </label>

      <label
        htmlFor="confirmPassword"
        className="flex-1 text-sm font-bold text-gray-700"
      >
        <span>Confirm Password</span>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-3 mt-2 font-normal border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
          autoComplete="new-password"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
      </label>

      <span>
        <button
          type="submit"
          className="px-3 py-2 text-xl font-bold text-white bg-blue-600 hover:bg-blue-500"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
