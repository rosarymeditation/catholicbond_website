// ════════════════════════════════════════════════════════════════════════════
// ADD TO app/_utils/CatholicApi.js (admin website)
// Use the same axios instance / helper your other calls use. If your file
// looks like:   const getPendingVerifications = (data) => axiosClient.post("/getPendingVerifications", data);
// then add these four the same way and export them in the default object.
// ════════════════════════════════════════════════════════════════════════════

// List requests by status: "pending_review" | "sent" | "confirmed" | "denied" | "expired" | "all"
const getParishVerificationsAdmin = (data) =>
    axiosClient.post("/getParishVerificationsAdmin", data);

// Admin checked the parish → email it now.   data: { id }
const approveParishVerification = (data) =>
    axiosClient.post("/approveParishVerification", data);

// Parish details couldn't be verified.        data: { id, reason }
const rejectParishVerification = (data) =>
    axiosClient.post("/rejectParishVerification", data);

// Remove a confirmed verification.            data: { id, reason }
const revokeParishVerification = (data) =>
    axiosClient.post("/revokeParishVerification", data);

// …and add to the exported object:
// export default {
//   ...existing,
//   getParishVerificationsAdmin,
//   approveParishVerification,
//   rejectParishVerification,
//   revokeParishVerification,
// };