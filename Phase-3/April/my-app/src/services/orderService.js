import API from "@/lib/axios";

// CREATE ORDER
export const createOrder = async (
  orderData,
  token
) => {

  const response = await API.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// GET ALL ORDERS
export const getOrders = async () => {

  const response = await API.get(
    "/orders"
  );

  return response.data;
};

// GET SINGLE ORDER
export const getSingleOrder = async (
  id,
  token
) => {

  const response = await API.get(
    `/orders/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// UPDATE ORDER
export const updateOrder = async (
  id,
  orderData,
  token
) => {

  const response = await API.put(
    `/orders/${id}`,
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// DELETE ORDER
export const deleteOrder = async (
  id,
  token
) => {

  const response = await API.delete(
    `/orders/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};