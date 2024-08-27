// utils/api.js
export const API_URLS = {
  apiService: 'https://dfweb-v2.onrender.com/api/v1/api-services',
  apiSetting: 'https://dfweb-v2.onrender.com/api/v1/api-settings',
  apiFaq: 'https://dfweb-v2.onrender.com/api/v1/api-faqs',
  apiTestimonials: 'https://dfweb-v2.onrender.com/api/v1/api-testimonials',
  apiBlogs: 'https://dfweb-v2.onrender.com/api/v1/api-blogs',
  // Add more API URLs as needed
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    return null; // Return null or handle the error as needed
  }
};
