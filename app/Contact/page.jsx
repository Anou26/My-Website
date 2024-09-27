"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amergoju@syr.edu",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  // State for alert
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // State for form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    console.log(`Updated ${name} to ${value}`);

    // Check form validity
    const isValid = Object.values(newFormData).every(field => field.trim() !== "") && isValidEmail(newFormData.email);
    setIsFormValid(isValid);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted", formData);

    if (!isFormValid) {
      setAlert({ show: true, type: "destructive", message: "Please fill in all fields." });
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
        console.log("Alert hidden");
      }, 5000);
      return;
    }

    // Send email using emailjs
    emailjs.send(
      'service_pqztlar', // Replace with your EmailJS service ID
      'template_ll713q5', // Replace with your EmailJS template ID
      formData,
      'gcoM9V9DZg9-8R_et' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('EmailJS SUCCESS!', response.status, response.text);
      // Show success alert
      setAlert({ show: true, type: "default", message: "Message sent successfully!" });

      // Automatically hide the alert after a few seconds
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
        console.log("Alert hidden");
      }, 5000);
    }, (error) => {
      console.log('EmailJS FAILED...', error);
      // Show error alert
      setAlert({ show: true, type: "destructive", message: "Failed to send message, please try again." });

      // Automatically hide the alert after a few seconds
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
        console.log("Alert hidden");
      }, 5000);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        {alert.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Alert variant={alert.type} className="max-w-md w-full bg-[#27272c] rounded-lg p-4 shadow-lg">
              <AlertTitle>{alert.type === "default" ? "Success" : "Error"}</AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          </div>
        )}
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's Work Together!</h3>
              <p className="text-white/60 text-justify">
                Please enter your details and submit your query, and I will respond at the earliest opportunity. Alternatively, you can reach me directly via email.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button 
                size="md" 
                className={`max-w-40 ${!isFormValid ? 'bg-gray-400 cursor-not-allowed' : ''}`} 
                type="submit" 
                disabled={!isFormValid}
              >
                Connect!
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 ">
                  <div className=" w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center xl:p-8 ">
                    <div className="text-[28px]  ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
