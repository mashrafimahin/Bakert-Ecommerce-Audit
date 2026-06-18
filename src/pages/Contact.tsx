// dependencies
import { useState, useEffect, type FC } from "react";
// interface/@types
interface FormInfo {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
// icons
import { Mail, Phone, MapPin, Send } from "lucide-react";
// components
import Typography from "../components/typography";
import InputBox from "../components/boxes/input";
import Button from "../components/ui/button";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";
// data
const quickContact = [
  {
    id: 1,
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    info1: "+880 1822 565654",
    info2: "Mon-Fri 8am - 6pm",
  },
  {
    id: 2,
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    info1: "hello@bakert.com",
    info2: "Online support 24/7",
  },
  {
    id: 3,
    icon: <MapPin className="w-6 h-6" />,
    title: "Bakery Location",
    info1: "123 Sugarplum Lane",
    info2: "Sweet City, SC 12345",
  },
];

// main
const Contact: FC = () => {
  // form info
  const [formData, setFormData] = useState<FormInfo>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // handle edit data
  const handleField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full min-h-screen bg-[#E7F6F2]">
        {/* heading */}
        <div className="text-center mb-16">
          <Typography variant="head">Get in Touch</Typography>
          <Typography>
            Whether you have a question about our cakes, need a custom order for
            your special day, or just want to say hello, we'd love to hear from
            you.
          </Typography>
        </div>

        {/* container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl sm:rounded-3xl p-8 md:p-12 shadow-sm border border-[#A5C9CA]/30">
          {/* Contact Info */}
          <div className="space-y-10">
            <Typography variant="subHead">Contact Information</Typography>
            <Typography className="text-md">
              Fill out the form and our team will get back to you within 24
              hours.
            </Typography>

            {/* list of quick contact */}
            <div className="space-y-6">
              {quickContact.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E7F6F2] flex items-center justify-center shrink-0 text-[#395B64]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3333]">{item.title}</h4>
                    <p className="text-[#395B64] mt-1">{item.info1}</p>
                    <p className="text-sm text-[#A5C9CA]">{item.info2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#E7F6F2] p-8 rounded-2xl sm:rounded-3xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputBox
                  label={true}
                  labelBody="First Name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  changeFunc={handleField}
                  className="bg-white"
                />

                <InputBox
                  label={true}
                  labelBody="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  changeFunc={handleField}
                  className="bg-white"
                />
              </div>

              <InputBox
                label={true}
                labelBody="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                changeFunc={handleField}
                className="bg-white"
              />

              <div>
                <label className="block text-sm font-bold text-[#2C3333] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  onChange={handleField}
                  className="w-full px-4 py-3 min-h-30 rounded-xl border-none focus:ring-2 focus:ring-[#395B64] text-[#2C3333] bg-white resize-x-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <Button variant="primary">
                Send Message &nbsp; <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
