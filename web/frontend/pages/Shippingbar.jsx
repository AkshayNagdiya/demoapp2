import React, { useState } from "react";
import "../pages/Shippingbar.css";

const Shippingbar = () => {
  const [value, setValue] = useState();
  const [title, setTitle] = useState("");
  const [bgColor, setBgColor] = useState("#000000");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [textAlign, setTextAlign] = useState("center");
  const [textTransform, setTextTransform] = useState("none");
  const [fontWeight, setFontWeight] = useState("normal");
  const [padding, setPadding] = useState("10px");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState("1px");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [boxShadow, setBoxShadow] = useState("none");
  const [letterSpacing, setLetterSpacing] = useState("normal");
  const [lineHeight, setLineHeight] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");
  const [isGradient, setIsGradient] = useState(false);
  const [issetgoal, setSetgoal] = useState(false);
  const [gradientColor, setGradientColor] = useState("#ffffff");
  const [preview, setPreview] = useState(false);

  const handleReset = () => {
    setTitle("");
    setBgColor("#000000");
    setFontColor("#ffffff");
    setFontSize("16px");
    setFontFamily("Roboto");
    setTextAlign("center");
    setTextTransform("none");
    setFontWeight("normal");
    setPadding("10px");
    setBorderColor("#000000");
    setBorderWidth("1px");
    setBorderStyle("solid");
    setBoxShadow("none");
    setLetterSpacing("normal");
    setLineHeight("normal");
    setTextDecoration("none");
    setIsGradient(false);
    setGradientColor("#ffffff");
    setPreview(false);
  };

  return (
    <>
      <div className="nav-container">
        <ul
          className="nav nav-pills mb-3 custom-nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-how-to-use-tab"
              data-toggle="pill"
              href="#pills-how-to-use"
              role="tab"
              aria-controls="pills-how-to-use"
              aria-selected="false"
            >
              How to use
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-support-tab"
              data-toggle="pill"
              href="#pills-support"
              role="tab"
              aria-controls="pills-support"
              aria-selected="false"
            >
              Support
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-seo-experts-tab"
              data-toggle="pill"
              href="#pills-seo-experts"
              role="tab"
              aria-controls="pills-seo-experts"
              aria-selected="false"
            >
              Hire Our SEO Experts
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-shopify-designer-tab"
              data-toggle="pill"
              href="#pills-shopify-designer"
              role="tab"
              aria-controls="pills-shopify-designer"
              aria-selected="false"
            >
              Hire Shopify Designer
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="dashboard">
            <div className="headingdata">
              <h1>General Setting</h1>
            </div>
            <br />
            <div className="main-Data">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card ">
                    <label>Your Message that you want to display:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <div class="form-check">
                      <input
                        type="checkbox"
                        checked={issetgoal}
                        onChange={() => setSetgoal(!issetgoal)}
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Set Goal
                      </label>
                      <br />

                      <span>
                        (Minimum order value to provide free shipping to
                        customers.)
                      </span>
                    </div>
                    {issetgoal && (
                      <>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <label>Goal Price</label>
                            <br />
                            <span>eg. : 100</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="100"
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <label>
                              Your Message that you want to display: (when cart
                              is empty)
                            </label>
                            <br />
                            <span>
                              eg. : Free Shipping on order above $100(goal)
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Free shipping on orders above"
                            />
                          </div>
                          <div className="col-lg-6 mt-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Free shipping on orders above"
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <label>
                              Progress Message: (cart value less than goal)
                            </label>
                            <br />
                            <span>
                              eg. : You are only $20(goal - cart price) away
                              from Free Shipping
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" You are only"
                            />
                          </div>
                          <div className="col-lg-6 mt-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" away from Free Shipping."
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <label>
                              Goal Achieved Message: (cart value greater than
                              goal)
                            </label>
                            <br />
                            <span>
                              eg. : Congratulations! Shipping is now Free.
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Congratulations! Shipping is now Free."
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <br />
                    <div className="row">
                      <div className="col-lg-6">
                        <label>Background Color</label>
                        <input
                          type="color"
                          className="form-control"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <label>Font Color</label>
                        <input
                          type="color"
                          className="form-control"
                          value={fontColor}
                          onChange={(e) => setFontColor(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <label>Font Size (Slider)</label>
                        <input
                          type="range"
                          min="12"
                          max="36"
                          value={parseInt(fontSize)}
                          onChange={(e) => setFontSize(`${e.target.value}px`)}
                        />
                        <span>{fontSize}</span>
                      </div>
                      <div className="col-lg-6">
                        <label>Font Family</label>
                        <select
                          className="form-control"
                          value={fontFamily}
                          onChange={(e) => setFontFamily(e.target.value)}
                        >
                          <option value="Roboto">Roboto</option>
                          <option value="Lato">Lato</option>
                          <option value="Arial">Arial</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Text Alignment</label>
                        <select
                          className="form-control"
                          value={textAlign}
                          onChange={(e) => setTextAlign(e.target.value)}
                        >
                          <option value="left">Left</option>
                          <option value="center">Center</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Text Transform</label>
                        <select
                          className="form-control"
                          value={textTransform}
                          onChange={(e) => setTextTransform(e.target.value)}
                        >
                          <option value="none">None</option>
                          <option value="uppercase">Uppercase</option>
                          <option value="lowercase">Lowercase</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Font Weight</label>
                        <select
                          className="form-control"
                          value={fontWeight}
                          onChange={(e) => setFontWeight(e.target.value)}
                        >
                          <option value="normal">Normal</option>
                          <option value="bold">Bold</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Padding</label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={parseInt(padding)}
                          onChange={(e) => setPadding(`${e.target.value}px`)}
                        />
                        <span>{padding}</span>
                      </div>
                      <div className="col-lg-6">
                        <label>Border Color</label>
                        <input
                          type="color"
                          className="form-control"
                          value={borderColor}
                          onChange={(e) => setBorderColor(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <label>Border Width</label>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={parseInt(borderWidth)}
                          onChange={(e) =>
                            setBorderWidth(`${e.target.value}px`)
                          }
                        />
                        <span>{borderWidth}</span>
                      </div>
                      <div className="col-lg-6">
                        <label>Border Style</label>
                        <select
                          className="form-control"
                          value={borderStyle}
                          onChange={(e) => setBorderStyle(e.target.value)}
                        >
                          <option value="solid">Solid</option>
                          <option value="dashed">Dashed</option>
                          <option value="dotted">Dotted</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Box Shadow</label>
                        <select
                          className="form-control"
                          value={boxShadow}
                          onChange={(e) => setBoxShadow(e.target.value)}
                        >
                          <option value="none">None</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Letter Spacing</label>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={parseInt(letterSpacing)}
                          onChange={(e) =>
                            setLetterSpacing(`${e.target.value}px`)
                          }
                        />
                        <span>{letterSpacing}</span>
                      </div>
                      <div className="col-lg-6">
                        <label>Line Height</label>
                        <input
                          type="range"
                          min="1"
                          max="3"
                          step="0.1"
                          value={parseFloat(lineHeight)}
                          onChange={(e) => setLineHeight(e.target.value)}
                        />
                        <span>{lineHeight}</span>
                      </div>
                      <div className="col-lg-6">
                        <label>Text Decoration</label>
                        <select
                          className="form-control"
                          value={textDecoration}
                          onChange={(e) => setTextDecoration(e.target.value)}
                        >
                          <option value="none">None</option>
                          <option value="underline">Underline</option>
                          <option value="overline">Overline</option>
                          <option value="line-through">Line Through</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label>Use Gradient Background</label>
                        <input
                          type="checkbox"
                          checked={isGradient}
                          onChange={() => setIsGradient(!isGradient)}
                        />
                      </div>
                      {isGradient && (
                        <div className="col-lg-6">
                          <label>Gradient Color</label>
                          <input
                            type="color"
                            className="form-control"
                            value={gradientColor}
                            onChange={(e) => setGradientColor(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-lg-12 mt-5">
                      <div
                        className="preview-card"
                        style={{
                          background: isGradient
                            ? `linear-gradient(${bgColor}, ${gradientColor})`
                            : bgColor,
                          color: fontColor,
                          fontSize,
                          fontFamily,
                          textAlign,
                          textTransform,
                          fontWeight,
                          padding,
                          borderColor,
                          borderWidth,
                          borderStyle,
                          boxShadow:
                            boxShadow === "small"
                              ? "0px 0px 5px rgba(0,0,0,0.2)"
                              : boxShadow === "medium"
                              ? "0px 0px 10px rgba(0,0,0,0.3)"
                              : boxShadow === "large"
                              ? "0px 0px 15px rgba(0,0,0,0.4)"
                              : "none",
                          letterSpacing,
                          lineHeight,
                          textDecoration,
                        }}
                      >
                        <h1>{preview ? title : "Preview show"}</h1>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6">
                        <button className="btn btn-info" onClick={handleReset}>
                          Reset
                        </button>
                      </div>
                      <div className="col-lg-4"></div>

                      <div className="col-lg-1">
                        <button
                          className="btn btn-info"
                          onClick={() => setPreview(true)}
                        >
                          Preview
                        </button>
                      </div>
                      <div className="col-lg-1">
                        <button className="btn btn-info">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-how-to-use"
          role="tabpanel"
          aria-labelledby="pills-how-to-use-tab"
        >
          <div className="container py-4">
            <h2 className="mb-3">Table of Contents</h2>
            <ul className="list-group mb-4">
              <li className="list-group-item">
                <a href="#overview">Overview</a>
              </li>
              <li className="list-group-item">
                <a href="#navigating-dashboard">Navigating the Dashboard</a>
              </li>
              <li className="list-group-item">
                <a href="#general-settings">General Settings</a>
              </li>
              <li className="list-group-item">Customizable Features</li>
              <ul className="list-group ps-4">
                <li className="list-group-item">
                  <a href="#title">Title</a>
                </li>
                <li className="list-group-item">
                  <a href="#colors">Background &amp; Font Colors</a>
                </li>
                <li className="list-group-item">
                  <a href="#font-settings">Font Settings</a>
                </li>
                <li className="list-group-item">
                  <a href="#text-alignment">Text Alignments</a>
                </li>
                <li className="list-group-item">
                  <a href="#padding-border">Padding and Border Settings</a>
                </li>
                <li className="list-group-item">
                  <a href="#box-shadow">Box Shadow</a>
                </li>
                <li className="list-group-item">
                  <a href="#spacing">Spacing (Letter, Line Height)</a>
                </li>
                <li className="list-group-item">
                  <a href="#gradient-backgrounds">Gradient Backgrounds</a>
                </li>
              </ul>
              <li className="list-group-item">
                <a href="#preview-design">Previewing Your Design</a>
              </li>
              <li className="list-group-item">
                <a href="#resetting-design">Resetting Your Design</a>
              </li>
              <li className="list-group-item">Additional Tabs</li>
              <ul className="list-group ps-4">
                <li className="list-group-item">
                  <a href="#how-to-use-tab">How to Use Tab</a>
                </li>
                <li className="list-group-item">
                  <a href="#support-tab">Support Tab</a>
                </li>
                <li className="list-group-item">
                  <a href="#seo-tab">Hire Our SEO Experts</a>
                </li>
                <li className="list-group-item">
                  <a href="#shopify-tab">Hire Shopify Designer</a>
                </li>
              </ul>
              <li className="list-group-item">
                <a href="#best-practices">Best Practices</a>
              </li>
            </ul>
            {/* Overview Section */}
            <h3 id="overview" className="mb-3">
              1. Overview
            </h3>
            <p>
              The <strong>Shipping Bar Customizer</strong> enables you to create
              a highly customizable announcement or promotional bar for your
              website. You can modify various attributes such as background
              color, font, borders, and much more.
            </p>
            <p>
              The tool also provides a <strong>preview option</strong> to see
              how your bar looks before applying it live.
            </p>
            {/* Navigating the Dashboard Section */}
            <h3 id="navigating-dashboard" className="mb-3">
              2. Navigating the Dashboard
            </h3>
            <p>
              When you load the <strong>Shipping Bar Customizer</strong>, you’ll
              see several navigation tabs:
            </p>
            <ul>
              <li>
                <strong>Dashboard:</strong> Where you customize your shipping
                bar.
              </li>
              <li>
                <strong>How to Use:</strong> A guide for using this tool.
              </li>
              <li>
                <strong>Support:</strong> Get help or troubleshooting advice.
              </li>
              <li>
                <strong>Hire Our SEO Experts:</strong> Hire SEO specialists for
                optimization.
              </li>
              <li>
                <strong>Hire Shopify Designer:</strong> Contact a professional
                Shopify designer.
              </li>
            </ul>
            <p>
              You’ll be working mainly within the <strong>Dashboard</strong>{" "}
              tab.
            </p>
            {/* General Settings Section */}
            <h3 id="general-settings" className="mb-3">
              3. General Settings
            </h3>
            <p>
              In the <strong>General Settings</strong>, you have access to
              various customization options for creating your shipping bar. You
              can start by defining a <strong>Title</strong> for the bar, which
              could be a message like “Free Shipping Over $50” or “Sale - 20%
              Off Today Only!”
            </p>
            {/* Customizable Features Section */}
            <h3 id="customizable-features" className="mb-3">
              4. Customizable Features
            </h3>
            {/* Title Section */}
            <h4 id="title" className="mb-3">
              4.1 Title
            </h4>
            <p>
              Enter the text you want to display on your shipping bar. For
              example: <em>"Free Shipping on Orders Over $50!"</em>
            </p>
            {/* Background & Font Colors Section */}
            <h4 id="colors" className="mb-3">
              4.2 Background &amp; Font Colors
            </h4>
            <ul>
              <li>
                <strong>Background Color:</strong> Choose a solid background
                color for the shipping bar.
              </li>
              <li>
                <strong>Font Color:</strong> Pick a font color that contrasts
                well with the background color for better readability.
              </li>
            </ul>
            {/* Font Settings Section */}
            <h4 id="font-settings" className="mb-3">
              4.3 Font Settings
            </h4>
            <ul>
              <li>
                <strong>Font Size:</strong> Adjust the size of your text using
                the range slider.
              </li>
              <li>
                <strong>Font Family:</strong> Choose from several fonts like{" "}
                <code>Roboto</code>, <code>Arial</code>, <code>Poppins</code>.
                Select a font that aligns with your site's branding.
              </li>
              <li>
                <strong>Font Weight:</strong> Pick between <code>Normal</code>{" "}
                or <code>Bold</code> to emphasize your text.
              </li>
            </ul>
            {/* Text Alignment Section */}
            <h4 id="text-alignment" className="mb-3">
              4.4 Text Alignment
            </h4>
            <p>
              Align your text to the <strong>left</strong>,{" "}
              <strong>center</strong>, or <strong>right</strong> using the
              dropdown menu.
            </p>
            {/* Padding and Border Settings Section */}
            <h4 id="padding-border" className="mb-3">
              4.6 Padding and Border Settings
            </h4>
            <ul>
              <li>
                <strong>Padding:</strong> Adjust the spacing inside the shipping
                bar to give the text more breathing room.
              </li>
              <li>
                <strong>Border Color:</strong> Choose the color for the border.
              </li>
              <li>
                <strong>Border Width:</strong> Set the thickness of the border
                (ranging from 0px to 10px).
              </li>
              <li>
                <strong>Border Style:</strong> Pick a border style such as{" "}
                <em>solid</em>, <em>dashed</em>, or <em>dotted</em>.
              </li>
            </ul>
            {/* Box Shadow Section */}
            <h4 id="box-shadow" className="mb-3">
              4.7 Box Shadow
            </h4>
            <p>
              Add a subtle shadow to make your shipping bar stand out. You can
              choose from:
            </p>
            <ul>
              <li>None</li>
              <li>Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
            {/* Spacing Section */}
            <h4 id="spacing" className="mb-3">
              4.8 Letter Spacing and Line Height
            </h4>
            <ul>
              <li>
                <strong>Letter Spacing:</strong> Adjust the space between
                characters for a cleaner or more spaced-out look.
              </li>
              <li>
                <strong>Line Height:</strong> Control the space between lines of
                text to enhance readability.
              </li>
            </ul>
            {/* Gradient Background Section */}
            <h4 id="gradient-backgrounds" className="mb-3">
              4.9 Gradient Background
            </h4>
            <p>
              Turn on the <strong>gradient toggle</strong> if you want a
              gradient background. Select two colors:
            </p>
            <ul>
              <li>
                <strong>Base Color:</strong> The primary color of the
                background.
              </li>
              <li>
                <strong>Gradient Color:</strong> The second color to blend into
                the primary.
              </li>
            </ul>
            {/* Previewing Design Section */}
            <h3 id="preview-design" className="mb-3">
              5. Previewing Your Design
            </h3>
            <p>
              After you’ve adjusted the settings to your liking, click the{" "}
              <strong>Preview</strong> button to see a live preview of your
              shipping bar.
            </p>
            {/* Resetting Design Section */}
            <h3 id="resetting-design" className="mb-3">
              6. Resetting Your Design
            </h3>
            <p>
              If you want to start over, click the <strong>Reset</strong> button
              to revert all settings to their default state:
            </p>
            <ul>
              <li>Background color: White</li>
              <li>Font color: Black</li>
              <li>Font size: 16px</li>
              <li>Font family: Roboto</li>
              <li>Alignment: Left</li>
              <li>No gradient</li>
              <li>Default padding, borders, and shadows</li>
            </ul>
            {/* Additional Tabs Section */}
            <h3 id="how-to-use-tab" className="mb-3">
              7. Additional Tabs
            </h3>
            <ul>
              <li>
                <strong>How to Use Tab:</strong> Provides basic instructions and
                guidelines.
              </li>
              <li>
                <strong>Support Tab:</strong> Access support team for any
                issues.
              </li>
              <li>
                <strong>Hire Our SEO Experts:</strong> Get in touch with SEO
                professionals for optimization.
              </li>
              <li>
                <strong>Hire Shopify Designer:</strong> Hire professional
                Shopify designers.
              </li>
            </ul>
            {/* Best Practices Section */}
            <h3 id="best-practices" className="mb-3">
              8. Best Practices
            </h3>
            <ul>
              <li>
                Keep the shipping bar simple and avoid overloading it with too
                much text.
              </li>
              <li>
                Ensure the font and colors are legible, with good contrast.
              </li>
              <li>
                Use minimalistic design principles to maintain professionalism.
              </li>
              <li>Preview your design often as you make changes.</li>
              <li>Use gradients sparingly with subtle, softer tones.</li>
            </ul>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-support"
          role="tabpanel"
          aria-labelledby="pills-support-tab"
        >
          Support content...
        </div>
        <div
          className="tab-pane fade"
          id="pills-seo-experts"
          role="tabpanel"
          aria-labelledby="pills-seo-experts-tab"
        >
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Firstname"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Contact Number</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-shopify-designer"
          role="tabpanel"
          aria-labelledby="pills-shopify-designer-tab"
        >
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Firstname"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Contact Number</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shippingbar;
