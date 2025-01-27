import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import countryCodes from "@/data/Contact";
import { Upload, Phone, Mail, HelpCircle, ChevronDown, X } from "lucide-react";

const Contact = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  // Validate form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idea: "",
  });

  // Form errors
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idea: "",
  });

  const topCountries = countryCodes.slice(0, 3); // Top 3 countries
  const filteredCountries = countryCodes.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Convert file size to human-readable format
  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    let validationError = "";

    if (files.length + selectedFiles.length > 3) {
      validationError = "You can only upload up to 3 files.";
    } else {
      selectedFiles.forEach((file) => {
        if (file.size > 10 * 1024 * 1024) {
          validationError = `File "${file.name}" exceeds the 10MB limit.`;
        } else {
          validFiles.push(file);
        }
      });
    }

    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
  };

  // Remove a specific file
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate phone number
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{7,15}$/; // Accepts 7 to 15 digits
    return phone === "" || regex.test(phone);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Validate inputs and set errors
    if (id === "firstName" && value.trim() === "") {
      setFormErrors({ ...formErrors, firstName: "First Name is required." });
    } else if (id === "lastName" && value.trim() === "") {
      setFormErrors({ ...formErrors, lastName: "Last Name is required." });
    } else if (id === "email" && !validateEmail(value)) {
      setFormErrors({ ...formErrors, email: "Invalid email address." });
    } else if (id === "phone" && !validatePhoneNumber(value)) {
      setFormErrors({ ...formErrors, phone: "Invalid phone number." });
    } else if (id === "idea" && value.trim() === "") {
      setFormErrors({ ...formErrors, idea: "Please describe your idea." });
    } else {
      setFormErrors({ ...formErrors, [id]: "" });
    }
  };

  // Check if all required fields are valid
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.idea.trim() !== ""
    );
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get the base64 content
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      // Convert files to Base64
      const attachments =
        files.length > 0
          ? await Promise.all(
              files.map(async (file) => {
                const base64 = await convertToBase64(file);
                return {
                  name: file.name,
                  content: base64,
                };
              })
            )
          : [];

      // Prepare email data
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || "N/A",
        idea: formData.idea,
        attachments, // Optional attachments
      };

      // Send email via API route
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "bg-violet text-primary", // Custom class for styling
          // theme: "colored",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          idea: "",
        });
        setFiles([]);
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        toast.error("Failed to send email!", {
          position: "top-center",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div
        className="min-h-[678px] xl:w-[1148px] lg:w-[924px] md:w-[768px] w-full bg-gradient-to-r from-transparent to-primary rounded-3xl mx-auto flex flex-col lg:flex-row justify-start items-center relative overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
        }}
      >
        <div className="px-4 py-10 flex flex-col gap-10 items-center w-full lg:flex-row lg:gap-20">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-[600px]"
          >
            <h1 className="text-3xl font-black text-gray-200 text-center lg:text-start mx-5 lg:mx-16 xl:ml-10">
              Get in <span className="text-emerald-400">touch.</span>
            </h1>
            <p className="text-gray-300 mb-4 text-[12px] w-80 xl:w-full lg:w-[410px] text-center lg:text-left mx-auto lg:ml-16 xl:ml-10">
              Connect with me to discuss your ideas and requirements. I'm here
              to help bring your vision to life.
            </p>

            <form className="space-y-3 mx-5 w-full max-w-[480px]">
              {/* First and Last Name Fields */}
              <div className="flex flex-col sm:flex-row xl:gap-4 lg:gap-4 md:gap-6">
                <motion.div className="relative flex-1 mx-auto mb-4 lg:ml-12 xl:ml-6">
                  <motion.input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    placeholder=" "
                    className="xl:w-[244px] lg:w-[188px] md:w-[250px] w-80 pb-1 pt-3 border-b-2 border-gray-200 focus:border-emerald-400 outline-none bg-transparent transition-colors peer text-gray-300"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-sm peer-placeholder-shown:text-[14px]"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.firstName}
                    </p>
                  )}
                </motion.div>

                <motion.div className="relative flex-1 mx-auto">
                  <motion.input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    placeholder=" "
                    className="xl:w-[244px] lg:w-[188px] md:w-[250px] w-80 pb-1 pt-3 border-b-2 border-gray-200 focus:border-emerald-400 outline-none bg-transparent transition-colors peer text-gray-300"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 peer-placeholder-shown:text-[14px]"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.lastName}
                    </p>
                  )}
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col md:flex-col">
                {/* Email Field */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div className="relative mx-auto xl:flex-1 md:mr-6">
                    <motion.input
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      placeholder=" "
                      className="xl:w-[504px] xl:ml-6 lg:w-[410px] md:w-[524px] w-80 pb-1 pt-3 border-b-2 border-gray-200 focus:border-emerald-400 outline-none bg-transparent transition-colors peer text-gray-300"
                    />
                    <label
                      htmlFor="emailAddress"
                      className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-sm peer-placeholder-shown:text-[14px] xl:ml-6"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    {formErrors.email && (
                      <p className="text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </motion.div>
                </div>

                {/* Phone Number Field */}
                <motion.div className="relative flex gap-5 mx-auto mt-4 md:mr-6">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                      {/* Dropdown Button */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-1 px-2 py-2 border-b-2 border-gray-200 focus:border-emerald-400 outline-none transition-colors xl:ml-6"
                      >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="text-gray-400">
                          {selectedCountry.code}
                        </span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-12 z-10 mt-1 w-64 bg-white rounded-md shadow-lg py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {/* Search Input */}
                          <div className="px-3 pb-2">
                            <input
                              type="text"
                              placeholder="Search country"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                          </div>

                          {/* Top Countries */}
                          {topCountries.map((country) => (
                            <button
                              key={country.name}
                              type="button"
                              className="w-full flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100"
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsDropdownOpen(false);
                              }}
                            >
                              <span className="text-[30px]">
                                {country.flag}
                              </span>
                              <span className="text-[14px]">
                                {country.name}
                              </span>
                              <span className="text-gray-700 text-[15px]">
                                {country.code}
                              </span>
                            </button>
                          ))}

                          <hr className="my-2 mx-3 border-gray-200" />

                          {/* Filtered Countries */}
                          <div className="max-h-48 overflow-y-auto">
                            {filteredCountries
                              .filter(
                                (country) =>
                                  !topCountries.some(
                                    (topCountry) =>
                                      topCountry.code === country.code
                                  )
                              )
                              .map((country) => (
                                <button
                                  key={country.name}
                                  type="button"
                                  className="w-full flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  <span className="text-[30px]">
                                    {country.flag}
                                  </span>
                                  <span className="text-[14px]">
                                    {country.name}
                                  </span>
                                  <span className="text-gray-700 text-[15px]">
                                    {country.code}
                                  </span>
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative w-full">
                    <motion.input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      placeholder=" "
                      className="xl:w-[404px] lg:w-[315px] md:w-[430px] w-56 pb-2 pt-3 border-b-2 border-gray-200 focus:border-emerald-400 outline-none bg-transparent transition-colors peer text-gray-300"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-sm peer-placeholder-shown:text-[14px]"
                    >
                      Phone Number
                    </label>
                    <span className="absolute right-0 xl:right-0 lg:right-0 md:right-0 bottom-2 text-[14px] text-gray-400">
                      (optional)
                    </span>
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm">{formErrors.phone}</p>
                    )}
                  </div>
                </motion.div>

                <div className="relative mx-auto xl:mt-4 md:mr-6 lg:mt-3 md:mt-3 mt-3">
                  <motion.textarea
                    id="idea"
                    value={formData.idea}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder=" "
                    rows={4}
                    className="xl:w-[508px] xl:h-[130px] xl:ml-6 lg:w-[410px] md:w-[524px] w-80 pb-1 pt-2 border-b-2 border-gray-200 focus:border-emerald-400 outline-none bg-transparent transition-colors peer resize-none text-gray-300"
                  />
                  <label
                    htmlFor="idea"
                    className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-sm peer-placeholder-shown:text-[14px] xl:ml-6"
                  >
                    Let's talk about your idea{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  {formErrors.idea && (
                    <p className="text-red-500 text-sm">{formErrors.idea}</p>
                  )}
                </div>

                <div>
                  {/* Upload Box */}
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center relative lg:w-[410px] xl:w-[506px] md:w-[524px] w-80 mx-auto xl:ml-6 xl:mt-4 md:mr-6">
                    <Upload className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      Upload Additional file
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1 mb-4 xl:w-full lg:w-96 md:w-[524px] w-80 mx-auto xl:ml-6 md:mr-6 lg:ml-12">
                    Attach file. File size of your documents should not exceed
                    10MB.
                  </p>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}

                  {/* Uploaded Files List */}
                  {files.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-gray-300 text-sm mb-2 lg:ml-12 ml-12">
                        Uploaded Files:
                      </h4>
                      <ul className="space-y-2">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center bg-gradient-to-r from-transparent to-[#375584] text-gray-300 rounded-lg px-4 py-2 lg:w-[410px] w-80 mx-auto mb-3 xl:w-[508px] xl:ml-6"
                          >
                            <span className="truncate w-3/4">
                              {file.name} ({formatFileSize(file.size)})
                            </span>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-gray-200 hover:text-gray-400"
                            >
                              <X size={16} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                  whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                  disabled={!isFormValid() || isSubmitting}
                  onClick={handleSubmit}
                  className={`xl:w-[506px] xl:ml-6 lg:w-[410px] md:w-[524px] w-80 py-4 rounded-lg font-extrabold mx-auto md:mr-6 ${
                    isFormValid()
                      ? "bg-gradient-to-r from-[#38598f] to-[#22375a] text-gray-200 cursor-pointer"
                      : "bg-gradient-to-r from-[#38598f] to-[#22375a] text-gray-200 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </motion.button>
              </div>
            </form>

            <div className="flex flex-wrap justify-between md:justify-around items-center mt-8 text-sm gap-4 sm:gap-6 md:gap-8 ml-12 md:ml-0">
              {/* Phone Section */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Phone className="text-gray-400 md:text-gray-300" size={20} />
                <div>
                  <p className="font-medium text-gray-200 text-xs sm:text-sm md:text-sm">
                    Phone
                  </p>
                  <p className="text-emerald-400 text-xs sm:text-sm md:text-sm">
                    +1 (530)-788-6496
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Mail className="text-gray-400 md:text-gray-300" size={20} />
                <div>
                  <p className="font-medium text-gray-200 text-xs sm:text-sm md:text-sm">
                    Email Address
                  </p>
                  <p className="text-emerald-400 text-xs sm:text-sm md:text-sm">
                    ar@gmail.com
                  </p>
                </div>
              </div>

              {/* Helpdesk Section */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <HelpCircle
                  className="text-gray-400 md:text-gray-300"
                  size={20}
                />
                <div>
                  <p className="font-medium text-gray-200 text-xs sm:text-sm md:text-sm">
                    Helpdesk
                  </p>
                  <p className="text-emerald-400 text-xs sm:text-sm md:text-sm">
                    helpdesk@ar.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 rounded-2xl overflow-hidden flex justify-center items-center relative z-10 lg:h-[600px] h-full md:w-[524px] xl:h-[768px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.75781499644896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709004000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="md:h-[768px] h-[468px]"
            />
          </motion.div>
        </div>

        {/* Gradient Blue Overlay */}
        <div className="absolute right-0 top-0 h-full w-1/3 xl:bg-gradient-to-r from-transparent to-[#28426b] bg-transparent z-0 rounded-tr-3xl rounded-br-3xl"></div>
      </div>
    </div>
  );
};

export default Contact;
