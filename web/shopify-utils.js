// shopify-utils.js
import axios from "axios";

const shopifyDomain = "your-store.myshopify.com";
const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

const getActiveThemeId = async (session) => {
  try {
    const response = await axios.get(
      `https://${shopifyDomain}/admin/api/2023-10/themes.json`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );
    const themes = response.data.themes;
    const activeTheme = themes.find((theme) => theme.role === "main");
    return activeTheme ? activeTheme.id : null;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw new Error("Failed to fetch active theme ID");
  }
};

const updateThemeTemplate = async (themeId, session) => {
  try {
    await axios.put(
      `https://${shopifyDomain}/admin/api/2023-10/themes/${themeId}/assets.json`,
      {
        asset: {
          key: "templates/index.liquid",
          value:
            "<img src='backsoon-postit.png'><p>We are busy updating the store for you and will be back within the hour.</p>",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );
    console.log("Template updated successfully");
  } catch (error) {
    console.error("Error updating template:", error);
    throw new Error("Failed to update theme template");
  }
};

export { getActiveThemeId, updateThemeTemplate };
