interface ApiConfig {
  googleMapsApiKey: string;
  healthcareApiKey: string;
}

export const apiConfig: ApiConfig = {
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  healthcareApiKey: import.meta.env.VITE_HEALTHCARE_API_KEY,
};

export function validateApiKeys(): boolean {
  return Boolean(apiConfig.googleMapsApiKey && apiConfig.healthcareApiKey);
}