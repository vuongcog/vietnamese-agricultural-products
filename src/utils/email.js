import axios from "axios";

const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/send-email",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error sending email: " + error.message);
  }
};
export default sendEmail;
