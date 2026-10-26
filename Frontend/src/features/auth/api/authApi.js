async function sendAuthRequest(endpoint, credentials) {
  const response = await fetch(`/api/auth/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Authentication request failed.");
  }

  return data;
}

export function login(credentials) {
  return sendAuthRequest("login", credentials);
}

export function register(credentials) {
  return sendAuthRequest("register", credentials);
}
