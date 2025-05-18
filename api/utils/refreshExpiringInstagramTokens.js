const User = require('../models/user');
const axios = require('axios');

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

const refreshToken = async (token) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );
  return response.data;
};

const refreshUserInstagramToken = async (userId) => {
  try {
    const user = await User.findById(userId).populate('integrations').select("-password")

    if (!user) {
      return {
        success: false,
        message: `User with ID ${userId} not found.`,
        refreshed: 0,
        errors: [],
      };
    }

    const instagramIntegrations = user.integrations.filter(
      (integration) =>
        integration.name === 'Instagram' &&
        new Date(integration.expiresAt).getTime() - Date.now() < FIVE_DAYS_MS
    );

    let refreshedCount = 0;
    const errors = [];

    for (const integration of instagramIntegrations) {
      try {
        const refreshed = await refreshToken(integration.token);

        integration.token = refreshed.access_token;
        integration.expiresAt = new Date(Date.now() + refreshed.expires_in * 1000);

        await integration.save();
        refreshedCount++;
      } catch (err) {
        errors.push({
          integrationId: integration._id,
          error: err.message,
        });
      }
    }

    return {
      success: true,
      message: "Token refresh attempt completed",
      refreshed: refreshedCount,
      failed: instagramIntegrations.length - refreshedCount,
      errors,
      user
    };
  } catch (error) {
    return {
      success: false,
      message: 'Server error during token refresh.',
      refreshed: 0,
      errors: [error.message],
    };
  }
};

module.exports = refreshUserInstagramToken;