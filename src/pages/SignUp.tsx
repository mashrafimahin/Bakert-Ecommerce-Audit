// dependencies
import { useState, useEffect, type FC } from "react";
import { Link } from "react-router-dom";
// interface/@types
interface FormInfo {
  fullName: string;
  email: string;
  password: string;
}
// icons
import { CakeSlice } from "lucide-react";
// components
import Typography from "../components/typography";
import InputBox from "../components/boxes/input";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import Button from "../components/ui/button";

// main
const SignUp: FC = () => {
  // form info
  const [formData, setFormData] = useState<FormInfo>({
    fullName: "",
    email: "",
    password: "",
  });

  // handle edit data
  const handleField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* navigation */}
      <Navbar />

      {/* main component */}
      <div className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#E7F6F2]">
        <div className="max-w-md w-full space-y-8 bg-white p-10 sm:p-12 rounded-xl shadow-xl border border-[#A5C9CA]/30 relative overflow-hidden">
          {/* heading */}
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#395B64] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#395B64]/30">
                <CakeSlice className="w-8 h-8" />
              </div>
            </div>
            <Typography variant="subHead">Join Bakert</Typography>
            <Typography className="text-sm font-medium">
              Create an account for rewards and recipes.
            </Typography>
          </div>

          {/* signup form */}
          <form
            className="mt-8 space-y-6 relative z-10"
            onSubmit={handleSubmit}
          >
            {/* input fields */}
            <div className="space-y-4">
              {/* full name */}
              <InputBox
                label={true}
                labelBody="Full Name"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                changeFunc={handleField}
                required
              />

              {/* email address */}
              <InputBox
                label={true}
                labelBody="Email Address"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                changeFunc={handleField}
                required
              />

              {/* password */}
              <InputBox
                label={true}
                labelBody="Password"
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                changeFunc={handleField}
                required
              />
            </div>

            {/* action button */}
            <Button variant="primary">Sign Up</Button>
          </form>

          {/* options */}
          <div className="mt-8 text-center relative z-10 border-t border-[#E7F6F2] pt-6">
            <p className="text-sm font-medium text-[#395B64]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[#2C3333] hover:text-[#395B64]"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

// exports
export default SignUp;
