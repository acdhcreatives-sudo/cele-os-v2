const API_URL =
  "https://script.google.com/macros/s/AKfycbzR_DMd6_Z-SSZxAZLirw9Kqw-AQtBVtnOpqPIlzjBtDq5LXSvmTBDTQrodoJCP7BNC4Q/exec";

/****************************************
 * GET SUBJECTS
 ****************************************/
export async function getSubjects() {
  try {
    const response = await fetch(`${API_URL}?action=getSubjects`);
    const data = await response.json();
    return data.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

/****************************************
 * START STUDY SESSION
 ****************************************/
export async function startStudySession(subject) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "startStudySession",
        subject,
      }),
    });

    return await response.json();
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

/****************************************
 * END STUDY SESSION
 ****************************************/
export async function endStudySession(sessionId) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "endStudySession",
        sessionId,
      }),
    });

    return await response.json();
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
    };
  }
}