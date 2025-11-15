import { useState } from 'react';
import axios from "axios";
import { Product, OrderRequest, OrderResponse, OrderStatus, Card, AuthResponse, Category } from '@/types/api';

// Mock API implementation - replace with actual API calls
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Authentication
  const authenticate = async (clientId: string, username: string, password: string): Promise<string> => {
    setLoading(true);
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      return "1af332588cea8577aee666065757a0d3"; // Mock authorization code
    } catch (err) {
      setError('Authentication failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getToken = async (clientId: string, clientSecret: string, authCode: string): Promise<string> => {
    setLoading(true);
    try {
      // Mock token generation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.mock.token";
    } catch (err) {
      setError('Token generation failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Products
  const getProducts = async (categoryId: number, offset: number = 0, limit: number = 20): Promise<Product[]> => {
    setLoading(true);
    try {
   
        const res = await axios.get('https://sandbox.woohoo.in/rest/v3/catalog/products',{
        headers:{
            'Authorization':`Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb25zdW1lcklkIjo5NDgsImV4cCI6MTc2MzYxOTE3NSwidG9rZW4iOiJiZjlhNWFhYmViZWFjNTFmNDQzOWVmZThhYTc1MzJlOCJ9.M3kmYRLFlEwe6nD_-vIR4UTPV3wi4NldK_Xg_T5e264'}`,
        }
      })
      console.log(res?.data)
    //   await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      return res.data.products;
    
    } catch (err) {
      setError('Failed to fetch products');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Orders
  const createOrder = async (orderData: OrderRequest): Promise<OrderResponse> => {
    setLoading(true);
    try {
      // Mock order creation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockOrder: OrderResponse = {
        status: "COMPLETE",
        orderId: `ABF${Date.now()}`,
        refno: orderData.refno,
        cancel: { allowed: true, allowedWithIn: 15 },
        currency: { code: "INR", numericCode: "356", symbol: "₹" },
        payments: orderData.payments,
        cards: [],
        products: {},
        additionalTxnFields: []
      };

      return mockOrder;
    } catch (err) {
      setError('Order creation failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderStatus = async (refno: string): Promise<OrderStatus> => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return {
        status: "COMPLETE",
        statusLabel: "Complete",
        statusImage: null,
        statusLevel: null,
        orderId: `ABF${Date.now()}`,
        refno,
        cancel: { allowed: true, allowedWithIn: 15 }
      };
    } catch (err) {
      setError('Failed to fetch order status');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderCards = async (orderId: string): Promise<Card[]> => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock activated cards
      return [];
    } catch (err) {
      setError('Failed to fetch order cards');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Categories
  const getCategories = async (): Promise<Category[]> => {
    setLoading(true);
    try {
      // Mock categories based on the API structure
      const mockCategories: Category[] = [
        { id: "1", name: "Entertainment", count: 15 },
        { id: "2", name: "Shopping", count: 25 },
        { id: "3", name: "Food & Dining", count: 12 },
        { id: "4", name: "Travel", count: 8 },
        { id: "5", name: "Gaming", count: 10 },
        { id: "6", name: "Streaming", count: 6 }
      ];

      await new Promise(resolve => setTimeout(resolve, 500));
      return mockCategories;
    } catch (err) {
      setError('Failed to fetch categories');
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
    getOrderCards
  };
};