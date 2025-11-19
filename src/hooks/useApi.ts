import { useState } from "react";
import API from "@/services/api"; // axios instance with baseURL pointing to backend
import type {
  Product,
  OrderRequest,
  OrderResponse,
  OrderStatus,
  Card,
  Category,
} from "@/types/api";

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (
    categoryId?: number,
    offset: number = 0,
    limit: number = 20
  ): Promise<Product[]> => {
    setLoading(true);
    try {
      const url = categoryId
        ? `/catalog/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`
        : `/catalog/products?offset=${offset}&limit=${limit}`;
      const res = await API.get<{ products: Product[] }>(url);
      return res.data.products;
    } catch (err: any) {
      setError("Failed to fetch products");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async (): Promise<Category[]> => {
    setLoading(true);
    try {
      const res = await API.get<Category[]>("/catalog/categories");
      return res.data;
    } catch (err: any) {
      setError("Failed to fetch categories");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (orderData: OrderRequest): Promise<OrderResponse> => {
    setLoading(true);
    try {
      const res = await API.post<OrderResponse>("/order/create", orderData);
      return res.data;
    } catch (err: any) {
      setError("Failed to create order");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderStatus = async (refno: string): Promise<OrderStatus> => {
    setLoading(true);
    try {
      const res = await API.get<OrderStatus>(`/order/status/${refno}`);
      return res.data;
    } catch (err: any) {
      setError("Failed to fetch order status");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderCards = async (orderId: string): Promise<Card[]> => {
    setLoading(true);
    try {
      const res = await API.get<Card[]>(`/order/cards/${orderId}`);
      return res.data;
    } catch (err: any) {
      setError("Failed to fetch order cards");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getToken = async (): Promise<string> => {
    setLoading(true);
    try {
      const res = await API.post<{ token: string }>("/auth/token");
      return res.data.token;
    } catch (err: any) {
      setError("Failed to get token");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getToken,
    getProducts,
    getCategories,
    createOrder,
    getOrderStatus,
    getOrderCards,
  };
};
