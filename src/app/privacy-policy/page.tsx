'use client';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Last Updated: <strong>02-12-2025</strong></p>

        {/* Introduction */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">1. Introduction</h2>
        <p className="text-gray-700 mt-2">
          Welcome to <strong>Event-Scheduler</strong>. This Privacy Policy explains how we collect, use, and protect your personal data when you use our chatbot service. Our chatbot enables users to ask insurance-related questions and schedule appointments via Google Calendar and Google Meet.
        </p>
        <p className="text-gray-700 mt-2">
          By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        {/* Information We Collect */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">2. Information We Collect</h2>
        <p className="text-gray-700 mt-2">We collect the following information to provide our services:</p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li><strong>Google Authentication Data:</strong> We collect your email address and authentication token when you log in with Google.</li>
          <li><strong>Google Calendar Access:</strong> With your permission, we access your Google Calendar to schedule and manage meetings.</li>
          <li><strong>Chatbot Conversations:</strong> We process user interactions but do not store or share this data.</li>
          <li><strong>Device & Usage Information:</strong> Metadata such as IP addresses, browser types, and timestamps may be collected to improve service security.</li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>To authenticate and verify users via Google authentication.</li>
          <li>To schedule Google Meet appointments on your behalf.</li>
          <li>To provide relevant responses to your insurance-related inquiries.</li>
          <li>To improve the chatbot experience and ensure service reliability.</li>
        </ul>

        {/* Data Sharing & Security */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">4. Data Sharing & Security</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li><strong>No Data Selling or Sharing:</strong> We do not sell or share user data with third parties for marketing.</li>
          <li><strong>Encryption & Secure Storage:</strong> We use industry-standard encryption and authentication for security.</li>
          <li><strong>Token Management:</strong> Google authentication tokens are only used for active sessions and not stored permanently.</li>
        </ul>

        {/* Data Retention Policy */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">5. Data Retention Policy</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Authentication data is retained only for the session duration.</li>
          <li>Scheduled meetings are stored within Google Calendar, not on our servers.</li>
          <li>Metadata collected for analytics is anonymized and used solely for improvements.</li>
        </ul>

        {/* Third-Party Services */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">6. Third-Party Services</h2>
        <p className="text-gray-700 mt-2">Our chatbot interacts with third-party services, including:</p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li><strong>Google OAuth 2.0:</strong> For authentication.</li>
          <li><strong>Google Calendar API:</strong> For scheduling meetings.</li>
          <li><strong>OpenAI APIs:</strong> For chatbot responses (OpenAI does not store identifiable user data).</li>
        </ul>
        <p className="text-gray-700 mt-2">We recommend reviewing their privacy policies.</p>

        {/* User Rights & GDPR Compliance */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">7. User Rights & GDPR Compliance</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Request access to your personal data.</li>
          <li>Request deletion of your data from our records.</li>
          <li>Withdraw consent anytime by revoking permissions in Google Account settings.</li>
        </ul>
        <p className="text-gray-700 mt-2">
          To exercise these rights, contact us at <a href="mailto:your-email@example.com" className="text-blue-600 underline">your email</a>.
        </p>

        {/* Changes to Policy */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">8. Changes to This Policy</h2>
        <p className="text-gray-700 mt-2">
          We may update this Privacy Policy periodically. Any changes will be posted on this page.
        </p>

        {/* Contact Information */}
        <h2 className="text-2xl font-bold text-gray-900 mt-6">9. Contact Information</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions, please contact us at:
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> <a href="mailto:your-email@example.com" className="text-blue-600 underline">your-email@example.com</a>
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Website:</strong> <a href="https://event-scheduler-ai.vercel.app" className="text-blue-600 underline">Event Scheduler</a>
        </p>
        <p  className="text-gray-700 mt-2">
        Thank you for using Event Scheduler.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
