import { useState } from "react";
import axios from "axios";
import {
  Product,
  OrderRequest,
  OrderResponse,
  OrderStatus,
  Card,
  Category,
} from "@/types/api";

// ✔ FINAL Clean API Hook
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const BASE = "https://sandbox.woohoo.in";

  /* -----------------------------------------
   * 1️⃣ AUTHENTICATION → AUTH CODE
   ----------------------------------------- */
  const authenticate = async (
    clientId: string,
    username: string,
    password: string
  ): Promise<string> => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE}/oauth2/verify`, {
        clientId,
        username,
        password,
      });

      return res.data.authorizationCode; // ✔ Correct field
    } catch (err) {
      setError("Authentication failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 2️⃣ TOKEN API → ACCESS TOKEN
   ----------------------------------------- */
  const getToken = async (
    clientId: string,
    clientSecret: string,
    authCode: string
  ): Promise<string> => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE}/oauth2/token`, {
        clientId,
        clientSecret,
        authorizationCode: authCode,
      });

      return res.data.token; // ✔ Final token
    } catch (err) {
      setError("Token generation failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 3️⃣ GET PRODUCTS (REAL API, NO HARDCODE TOKEN)
   ----------------------------------------- */
  const getProducts = async (
    token: string,
    categoryId: number,
    offset: number = 0,
    limit: number = 20
  ): Promise<Product[]> => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE}/rest/v3/catalog/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✔ Dynamic token
          },
        }
      );

      return res.data.products;
    } catch (err) {
      setError("Failed to fetch products");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 4️⃣ CREATE ORDER (YOU KEPT MOCK → SO REMAINS MOCK)
   ----------------------------------------- */
  const createOrder = async (
    orderData: OrderRequest
  ): Promise<OrderResponse> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock response stays as you had it
      const mockOrder: OrderResponse = {
        status: "COMPLETE",
        orderId: `ABF${Date.now()}`,
        refno: orderData.refno,
        cancel: { allowed: true, allowedWithIn: 15 },
        currency: { code: "INR", numericCode: "356", symbol: "₹" },
        payments: orderData.payments,
        cards: [],
        products: {},
        additionalTxnFields: [],
      };

      return mockOrder;
    } catch (err) {
      setError("Order creation failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 5️⃣ ORDER STATUS (MOCK)
   ----------------------------------------- */
  const getOrderStatus = async (refno: string): Promise<OrderStatus> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        status: "COMPLETE",
        statusLabel: "Complete",
        statusImage: null,
        statusLevel: null,
        orderId: `ABF${Date.now()}`,
        refno,
        cancel: { allowed: true, allowedWithIn: 15 },
      };
    } catch (err) {
      setError("Failed to fetch order status");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 6️⃣ ORDER CARDS (MOCK)
   ----------------------------------------- */
  const getOrderCards = async (orderId: string): Promise<Card[]> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return [];
    } catch (err) {
      setError("Failed to fetch order cards");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
   * 7️⃣ GET CATEGORIES (MOCK - AS YOU USE)
   ----------------------------------------- */
  const getCategories = async (): Promise<Category[]> => {
    setLoading(true);
    try {
      const mockCategories: Category[] = [
        { id: "1", name: "Entertainment", count: 15 },
        { id: "2", name: "Shopping", count: 25 },
        { id: "3", name: "Food & Dining", count: 12 },
        { id: "4", name: "Travel", count: 8 },
        { id: "5", name: "Gaming", count: 10 },
        { id: "6", name: "Streaming", count: 6 },
      ];

      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockCategories;
    } catch (err) {
      setError("Failed to fetch categories");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    authenticate,
    getToken,
    getProducts,
    getCategories,
    createOrder,
    getOrderStatus,
    getOrderCards,
  };
};
