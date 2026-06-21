// dependencies
import { useState, type FC } from "react";
// interface/@types
export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  zip?: string | number;
}
// controller
import useSlices from "../hooks/useSlices";
import { updateThunk } from "../app/features/authenticationController";
// icons
import { Shield, User } from "lucide-react";
// components
import Typography from "../components/typography";
import InputBox from "../components/boxes/input";
import Button from "../components/ui/button";
import { cn } from "../utils/ClassMerger";

// main
const ProfileLayout: FC = () => {
  // state
  const { data: user, dispatch } = useSlices("authController");
  const [formInfo, setFormInfo] = useState<UserInfo>(user.profileData || {});

  // data object
  const originalObject = user.profileData;

  // handle field change
  const handleField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // checking
    if (
      originalObject.firstName === formInfo.firstName &&
      originalObject.lastName === formInfo.lastName &&
      originalObject.phone === formInfo.phone &&
      originalObject.country === formInfo.country &&
      originalObject.city === formInfo.city &&
      originalObject.address === formInfo.address &&
      originalObject.zip === formInfo.zip
    ) {
      alert("No changes found.");
      return;
    }
    // action
    dispatch(updateThunk(formInfo));
  };

  return (
    <div className="w-full">
      <Typography variant="subHead" className="mb-4">
        Account Settings
      </Typography>

      <div className="bg-white rounded-2xl p-8 border border-[#A5C9CA]/30 shadow-sm space-y-10">
        {/* Profile Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-[#395B64]" />
            <Typography className="mx-0 text-xl font-bold">
              Profile Information
            </Typography>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <InputBox
              label={true}
              labelBody="First Name"
              name="firstName"
              type="text"
              mainValue={formInfo.firstName}
              changeFunc={handleField}
              placeholder="First Name"
            />

            <InputBox
              label={true}
              labelBody="Last Name"
              name="lastName"
              type="text"
              mainValue={formInfo.lastName}
              changeFunc={handleField}
              placeholder="Last Name"
            />

            <InputBox
              label={true}
              labelBody="Email Address"
              name="email"
              type="email"
              mainValue={formInfo.email}
              placeholder="Email Address"
            />

            <InputBox
              label={true}
              labelBody="Phone Number"
              name="phone"
              type="tel"
              mainValue={formInfo.phone}
              changeFunc={handleField}
              placeholder="Phone Number"
            />

            <InputBox
              label={true}
              labelBody="Country"
              name="country"
              type="text"
              mainValue={formInfo.country}
              changeFunc={handleField}
              placeholder="Country"
            />

            <InputBox
              label={true}
              labelBody="City"
              name="city"
              type="text"
              mainValue={formInfo.city}
              changeFunc={handleField}
              placeholder="City"
            />

            <InputBox
              label={true}
              labelBody="street"
              name="street"
              type="text"
              mainValue={formInfo.address}
              changeFunc={handleField}
              placeholder="street"
            />

            <InputBox
              label={true}
              labelBody="Zip Code"
              name="zip"
              type="text"
              mainValue={formInfo.zip}
              changeFunc={handleField}
              placeholder="Zip Code"
            />

            {/* alert message */}
            <div className="flex items-center ml-2">
              <p className="text-md font-semibold">
                {user?.alertMessage || ""}
              </p>
            </div>

            {/* action button */}
            <div className="mt-6 flex justify-end">
              <Button
                variant="primary"
                type="submit"
                className={cn(
                  "w-auto px-8",
                  user.isLoading ? "cursor-no-drop" : "",
                )}
              >
                {user.isLoading ? (
                  <div className="flex items-center">
                    <div className="h-3 w-3 animate-spin rounded-full border-4 border-white border-t-transparent" />
                    &nbsp; Saving ...
                  </div>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        </section>

        <hr className="border-[#E7F6F2]" />

        {/* Password Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[#395B64]" />
            <Typography variant="subHead" className="mb-0 text-xl font-bold">
              Security & Password
            </Typography>
          </div>

          <div className="space-y-4 max-w-full">
            <InputBox
              label={true}
              labelBody="Current Password"
              name="password"
              type="text"
              placeholder="Current Password"
            />

            <InputBox
              label={true}
              labelBody="New Password"
              name="password"
              type="text"
              placeholder="New Password"
            />
          </div>

          <div className="mt-6">
            <Button
              variant="secondary"
              className="w-auto px-8 border-2 border-gray-300"
            >
              Update Password
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

// exports
export default ProfileLayout;
