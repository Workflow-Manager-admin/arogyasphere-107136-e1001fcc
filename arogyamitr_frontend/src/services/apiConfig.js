//
// Centralized API configuration for all backend service calls
// The BASE_API_URL will come from an environment variable (REACT_APP_API_BASE_URL)
//
// Usage:
//   import { BASE_API_URL } from './apiConfig';
//

export const BASE_API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api";
