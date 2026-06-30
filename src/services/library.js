const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxH1l6LuqkqJ_0nULWplkdG8AWU4lluuKQ2oSlPT7I9W3xu7pd3VjRFK6pyOVoNOhEh/exec";

export async function getLibrary() {
  const response = await fetch(WEB_APP_URL);

  if (!response.ok) {
    throw new Error("Failed to load library");
  }

  return response.json();
}