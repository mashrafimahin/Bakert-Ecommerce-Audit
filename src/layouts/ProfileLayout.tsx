// dependencies
import type { FC } from "react";
// interface/@types
// utilities
// icons
import { Shield, User } from "lucide-react";
// components
import Typography from "../components/typography";
import InputBox from "../components/boxes/input";
import Button from "../components/ui/button";
// layouts
// data

// main
const ProfileLayout: FC = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputBox
              label={true}
              labelBody="First Name"
              name="firstName"
              type="text"
              mainValue={"John"}
              placeholder="First Name"
            />

            <InputBox
              label={true}
              labelBody="Last Name"
              name="lastName"
              type="text"
              mainValue={"Doe"}
              placeholder="Last Name"
            />

            <InputBox
              label={true}
              labelBody="Email Address"
              name="email"
              type="email"
              mainValue={"mail@example.com"}
              placeholder="Email Address"
            />

            <InputBox
              label={true}
              labelBody="Phone Number"
              name="phone"
              type="tel"
              mainValue={"123456789"}
              placeholder="Phone Number"
            />

            <InputBox
              label={true}
              labelBody="Country"
              name="country"
              type="text"
              mainValue={"Bangladesh"}
              placeholder="Country"
            />

            <InputBox
              label={true}
              labelBody="City"
              name="city"
              type="text"
              mainValue={"Dhaka"}
              placeholder="City"
            />

            <InputBox
              label={true}
              labelBody="street"
              name="street"
              type="text"
              mainValue={"12/5 somewhere"}
              placeholder="street"
            />

            <InputBox
              label={true}
              labelBody="Zip Code"
              name="zip"
              type="text"
              mainValue={"7040"}
              placeholder="Zip Code"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="primary" className="w-auto px-8">
              Save Changes
            </Button>
          </div>
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
