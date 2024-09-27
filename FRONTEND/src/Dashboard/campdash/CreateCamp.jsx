import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaigns } from "./CampaignContext";
import { toast } from "react-toastify";

const CreateCamp = () => {
  const { addCampaign } = useCampaigns();
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    description: "",
    budget: "",
  });
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (parseFloat(formData.budget) <= 0.5) {
      toast.error("Budget must be greater than $0.5.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3500/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to create campaign");
      }

      const newCampaign = await response.json();
      addCampaign(newCampaign); // Add new campaign to context
      toast.success('Campaign created successfully! Redirecting to dashboard...')
      // setSuccess(true);
      setFormData({ title: "", deadline: "", description: "", budget: "" });

      // Get user from localStorage
      const storedUser = localStorage.getItem("user-socialM");
      let user = storedUser ? JSON.parse(storedUser) : null;

      console.log(response);
      if (user) {
        // Ensure balance and escrowBalance are numbers
        const currentBalance = parseFloat(user.balance) || 0;
        const currentEscrowBalance = parseFloat(user.escrowBalance) || 0;

        // Deduct the budget from the current balance and update escrow balance
        const newBalance = currentBalance - parseFloat(formData.budget);
        const newEscrowBalance =
          currentEscrowBalance + parseFloat(formData.budget);

        // Update the user object with new balances
        const updatedUser = {
          ...user,
          balance: newBalance,
          escrowBalance: newEscrowBalance,
        };
        console.log("Updated User:", updatedUser);

        // Save the updated user back to localStorage
        localStorage.setItem("user-socialM", JSON.stringify(updatedUser));
        console.log("opration complete");
      }
      setTimeout(() => {
        navigate("/camp");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message)

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form
        className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md transform hover:scale-105 transition-transform duration-300"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Campaign
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500 transition-all duration-300"
            id="title"
            name="title"
            type="text"
            placeholder="e.g Digital marketing"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deadline"
          >
            Deadline
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500 transition-all duration-300"
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500 transition-all duration-300"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="budget"
          >
            Budget
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500 transition-all duration-300"
            id="budget"
            name="budget"
            type="number"
            placeholder="0"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>
        {/* {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>} */}
        {/* {success && (
          <p className="text-green-500 text-xs italic mb-4">
            
          </p>
        )} */}
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="button"
            onClick={() => navigate("/camp")}
          >
            Cancel
          </button>
          <button
            className="bg-btn hover:bg-btn text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="submit"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCamp;
