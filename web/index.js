// // @ts-check
// import { join } from "path";
// import { readFileSync } from "fs";
// import express from "express";
// import serveStatic from "serve-static";

// import shopify from "./shopify.js";
// import productCreator from "./product-creator.js";
// import PrivacyWebhookHandlers from "./privacy.js";
// import { getActiveThemeId, updateThemeTemplate } from "./shopify-utils.js";
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = parseInt(
//   process.env.BACKEND_PORT || process.env.PORT || "3000",
//   10
// );

// const STATIC_PATH =
//   process.env.NODE_ENV === "production"
//     ? `${process.cwd()}/frontend/dist`
//     : `${process.cwd()}/frontend/`;

// const app = express();

// // Set up Shopify authentication and webhook handling
// app.get(shopify.config.auth.path, shopify.auth.begin());
// app.get(
//   shopify.config.auth.callbackPath,
//   shopify.auth.callback(),
//   shopify.redirectToShopifyOrAppRoot()
// );
// app.post(
//   shopify.config.webhooks.path,
//   shopify.processWebhooks({ webhookHandlers: PrivacyWebhookHandlers })
// );

// // If you are adding routes outside of the /api path, remember to
// // also add a proxy rule for them in web/frontend/vite.config.js

// app.use("/api/*", shopify.validateAuthenticatedSession());

// // Route to fetch and update Shopify theme
// // app.post("/api/update-theme", async (req, res) => {
// //   const session = res.locals.shopify.session; // Retrieve session from Shopify middleware

// //   try {
// //     const themeId = await getActiveThemeId(session);
// //     if (themeId) {
// //       await updateThemeTemplate(themeId, session);
// //       res.status(200).send({ success: true });
// //     } else {
// //       res.status(404).send({ error: "No active theme found" });
// //     }
// //   } catch (error) {
// //     console.error("Failed to update theme:", error);
// //     res.status(500).send({ success: false, error: error.message });
// //   }
// // });

// app.use(express.json());

// app.post("/api/update-theme", async (req, res) => {
//   try {
//     const {
//       title,
//       bgColor,
//       fontColor,
//       fontSize,
//       fontFamily,
//       textAlign,
//       textTransform,
//       fontWeight,
//       padding,
//       borderColor,
//       borderWidth,
//       borderStyle,
//       boxShadow,
//       letterSpacing,
//       lineHeight,
//       textDecoration,
//       isGradient,
//       gradientColor,
//     } = req.body;

//     const themeId = await getActiveThemeId();

//     if (!themeId) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Active theme not found" });
//     }

//     // Create your template string based on the received settings
//     const templateValue = `
//       <div style="
//         background: ${
//           isGradient ? `linear-gradient(${bgColor}, ${gradientColor})` : bgColor
//         };
//         color: ${fontColor};
//         font-size: ${fontSize};
//         font-family: ${fontFamily};
//         text-align: ${textAlign};
//         text-transform: ${textTransform};
//         font-weight: ${fontWeight};
//         padding: ${padding};
//         border: ${borderWidth} ${borderStyle} ${borderColor};
//         box-shadow: ${boxShadow === "none" ? "none" : boxShadow};
//         letter-spacing: ${letterSpacing};
//         line-height: ${lineHeight};
//         text-decoration: ${textDecoration};
//       ">
//         <h1>${title}</h1>
//       </div>
//     `;

//     await updateThemeTemplate(themeId, templateValue);

//     res.json({ success: true });
//   } catch (error) {
//     console.error("Error updating theme:", error);
//     res.status(500).json({ success: false, message: "Failed to update theme" });
//   }
// });

// app.use(express.json());

// app.get("/api/products/count", async (_req, res) => {
//   const client = new shopify.api.clients.Graphql({
//     session: res.locals.shopify.session,
//   });

//   const countData = await client.request(`
//     query shopifyProductCount {
//       productsCount {
//         count
//       }
//     }
//   `);

//   res.status(200).send({ count: countData.data.productsCount.count });
// });

// app.post("/api/products", async (_req, res) => {
//   let status = 200;
//   let error = null;

//   try {
//     await productCreator(res.locals.shopify.session);
//   } catch (e) {
//     console.log(`Failed to process products/create: ${e.message}`);
//     status = 500;
//     error = e.message;
//   }
//   res.status(status).send({ success: status === 200, error });
// });

// app.use(shopify.cspHeaders());
// app.use(serveStatic(STATIC_PATH, { index: false }));

// app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
//   return res
//     .status(200)
//     .set("Content-Type", "text/html")
//     .send(
//       readFileSync(join(STATIC_PATH, "index.html"))
//         .toString()
//         .replace("%VITE_SHOPIFY_API_KEY%", process.env.SHOPIFY_API_KEY || "")
//     );
// });

// app.listen(PORT);

// // @ts-check
// import { join } from "path";
// import { readFileSync } from "fs";
// import express from "express";
// import serveStatic from "serve-static";
// import shopify from "./shopify.js";
// import productCreator from "./product-creator.js";
// import PrivacyWebhookHandlers from "./privacy.js";
// import { getActiveThemeId, updateThemeTemplate } from "./shopify-utils.js";
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = parseInt(
//   process.env.BACKEND_PORT || process.env.PORT || "3000",
//   10
// );

// const STATIC_PATH =
//   process.env.NODE_ENV === "production"
//     ? `${process.cwd()}/frontend/dist`
//     : `${process.cwd()}/frontend/`;

// const app = express();

// // Set up Shopify authentication and webhook handling
// app.get(shopify.config.auth.path, shopify.auth.begin());
// app.get(
//   shopify.config.auth.callbackPath,
//   shopify.auth.callback(),
//   shopify.redirectToShopifyOrAppRoot()
// );
// app.post(
//   shopify.config.webhooks.path,
//   shopify.processWebhooks({ webhookHandlers: PrivacyWebhookHandlers })
// );

// // Use JSON body parser middleware
// app.use(express.json());

// // Route to fetch and update Shopify theme
// app.post("/api/update-theme", async (req, res) => {
//   try {
//     const {
//       title,
//       bgColor,
//       fontColor,
//       fontSize,
//       fontFamily,
//       textAlign,
//       textTransform,
//       fontWeight,
//       padding,
//       borderColor,
//       borderWidth,
//       borderStyle,
//       boxShadow,
//       letterSpacing,
//       lineHeight,
//       textDecoration,
//       isGradient,
//       gradientColor,
//     } = req.body;

//     // Ensure session is available
//     const session = res.locals.shopify.session;
//     if (!session) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Session not found" });
//     }

//     const themeId = await getActiveThemeId(session);

//     if (!themeId) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Active theme not found" });
//     }

//     // Create your template string based on the received settings
//     const templateValue = `
//       <div style="
//         background: ${
//           isGradient ? `linear-gradient(${bgColor}, ${gradientColor})` : bgColor
//         };
//         color: ${fontColor};
//         font-size: ${fontSize};
//         font-family: ${fontFamily};
//         text-align: ${textAlign};
//         text-transform: ${textTransform};
//         font-weight: ${fontWeight};
//         padding: ${padding};
//         border: ${borderWidth} ${borderStyle} ${borderColor};
//         box-shadow: ${boxShadow === "none" ? "none" : boxShadow};
//         letter-spacing: ${letterSpacing};
//         line-height: ${lineHeight};
//         text-decoration: ${textDecoration};
//       ">
//         <h1>${title}</h1>
//       </div>
//     `;

//     await updateThemeTemplate(themeId, templateValue);

//     res.json({ success: true });
//   } catch (error) {
//     console.error("Error updating theme:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Endpoint to count products
// app.get("/api/products/count", async (_req, res) => {
//   try {
//     const client = new shopify.api.clients.Graphql({
//       session: res.locals.shopify.session,
//     });

//     const countData = await client.request(`
//       query shopifyProductCount {
//         productsCount {
//           count
//         }
//       }
//     `);

//     res.status(200).send({ count: countData.data.productsCount.count });
//   } catch (error) {
//     console.error("Error fetching product count:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Endpoint to create products
// app.post("/api/products", async (_req, res) => {
//   try {
//     await productCreator(res.locals.shopify.session);
//     res.status(200).send({ success: true });
//   } catch (e) {
//     console.log(`Failed to process products/create: ${e.message}`);
//     res.status(500).send({ success: false, error: e.message });
//   }
// });

// // Serve static files
// app.use(shopify.cspHeaders());
// app.use(serveStatic(STATIC_PATH, { index: false }));

// // Serve the frontend app
// app.use("/*", shopify.ensureInstalledOnShop(), (_req, res) => {
//   res
//     .status(200)
//     .set("Content-Type", "text/html")
//     .send(
//       readFileSync(join(STATIC_PATH, "index.html"))
//         .toString()
//         .replace("%VITE_SHOPIFY_API_KEY%", process.env.SHOPIFY_API_KEY || "")
//     );
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import PrivacyWebhookHandlers from "./privacy.js";
import { getActiveThemeId, updateThemeTemplate } from "./shopify-utils.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: PrivacyWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json()); // Moved here to avoid duplication

// Route to fetch and update Shopify theme
app.post("/api/update-theme", async (req, res) => {
  try {
    const {
      title,
      bgColor,
      fontColor,
      fontSize,
      fontFamily,
      textAlign,
      textTransform,
      fontWeight,
      padding,
      borderColor,
      borderWidth,
      borderStyle,
      boxShadow,
      letterSpacing,
      lineHeight,
      textDecoration,
      isGradient,
      gradientColor,
    } = req.body;

    const session = res.locals.shopify.session; // Get the session
    const themeId = await getActiveThemeId(session); // Pass session here

    if (!themeId) {
      return res
        .status(404)
        .json({ success: false, message: "Active theme not found" });
    }

    // Create your template string based on the received settings
    const templateValue = `
      <div style="
        background: ${
          isGradient ? `linear-gradient(${bgColor}, ${gradientColor})` : bgColor
        };
        color: ${fontColor};
        font-size: ${fontSize};
        font-family: ${fontFamily};
        text-align: ${textAlign};
        text-transform: ${textTransform};
        font-weight: ${fontWeight};
        padding: ${padding};
        border: ${borderWidth} ${borderStyle} ${borderColor};
        box-shadow: ${boxShadow === "none" ? "none" : boxShadow};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        text-decoration: ${textDecoration};
      ">
        <h1>${title}</h1>
      </div>
    `;

    await updateThemeTemplate(themeId, templateValue);

    res.json({ success: true });
  } catch (error) {
    console.error("Error updating theme:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/products/count", async (_req, res) => {
  try {
    const client = new shopify.api.clients.Graphql({
      session: res.locals.shopify.session,
    });

    const countData = await client.request(`
      query shopifyProductCount {
        productsCount {
          count
        }
      }
    `);

    res.status(200).send({ count: countData.data.productsCount.count });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res
      .status(500)
      .send({ success: false, message: "Failed to fetch product count" });
  }
});

app.post("/api/products", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.error(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res) => {
  try {
    const indexFile = readFileSync(join(STATIC_PATH, "index.html")).toString();
    res
      .status(200)
      .set("Content-Type", "text/html")
      .send(
        indexFile.replace(
          "%VITE_SHOPIFY_API_KEY%",
          process.env.SHOPIFY_API_KEY || ""
        )
      );
  } catch (error) {
    console.error("Error reading index file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
