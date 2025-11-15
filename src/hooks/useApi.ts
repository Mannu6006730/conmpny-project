import { useState } from 'react';
import axios from "axios";
import { Product, OrderRequest, OrderResponse, OrderStatus, Card, Category } from '@/types/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.mock.token"; // <-- Replace with actual token if needed

  // Products
  const getProducts = async (categoryId: number, offset: number = 0, limit: number = 20): Promise<Product[]> => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/catalog/products`, {   // <-- Proxy endpoint
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return res.data.products;
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Categories
  const getCategories = async (): Promise<Category[]> => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/catalog/categories`, {   // <-- Proxy endpoint
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return res.data.categories;
    } catch (err) {
      setError('Failed to fetch categories');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Orders
  const createOrder = async (orderData: OrderRequest): Promise<OrderResponse> => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/orders`, orderData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return res.data;
    } catch (err) {
      setError('Order creation failed');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderStatus = async (refno: string): Promise<OrderStatus> => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/orders/${refno}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return res.data;
    } catch (err) {
      setError('Failed to fetch order status');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderCards = async (orderId: string): Promise<Card[]> => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/orders/${orderId}/cards`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return res.data.cards;
    } catch (err) {
      setError('Failed to fetch order cards');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getProducts,
    getCategories,
    createOrder,
    getOrderStatus,
    getOrderCards,
  };
};
