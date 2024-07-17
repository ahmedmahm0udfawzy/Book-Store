import axios from "axios";

export const updateCartQuantity = async (cartId, newQuantity) => {
  try {
    const response = await axios.post(
      `https://api.codingarabic.online/api/cart/${cartId}`,
      {
        qty: newQuantity,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Cart quantity updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};


