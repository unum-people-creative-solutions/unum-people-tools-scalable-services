'use client';

import { useState, useEffect } from 'react';
import { Service } from '../types';

const STORAGE_KEY = 'portfolio_services';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setServices(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse services from localStorage', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    }
  }, [services, isLoaded]);

  const addService = (service: Service) => {
    setServices((prev) => [...prev, service]);
  };

  const removeService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  return { services, addService, removeService, isLoaded };
}
