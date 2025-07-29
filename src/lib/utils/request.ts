const BASE_URL = "https://data.rivm.nl/opendata/";

async function request(endpoint: string, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    // Add auth headers if needed, e.g.:
    // 'Authorization': `Bearer ${token}`,
  };

  const config = {
    headers: defaultHeaders,
    ...options,
  };

  try {
    const res = await fetch(url, config);
    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.message || "API request failed");
    }

    return res.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

export { request };
