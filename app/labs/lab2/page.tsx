import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph also uses the style attribute, this time for a
        purple background with white text. Each element styled this way carries
        its own inline rules.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>Hi there</p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          A third sample paragraph styled through its own ID. Each ID selector
          targets exactly one element, so this rule cannot affect the paragraphs
          above it.
        </p>
        <p id="wd-id-selector-3">hi there</p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          A second sample class. Any number of elements can share one class, so
          this paragraph and the heading below pick up the same look and feel.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the sample class with the paragraph above
        </h4>
      </div>
      <div>
        <h5 className="wd-your-class">Hi</h5>
        <p className="wd-your-class">there</p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent, and{" "}
                <em className="wd-selector-5">this</em> is a grandchild of the
                paragraph
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This sample span is matched by .wd-selector-1 .wd-ai-selector-5,
                a descendant rule that reaches it through several levels
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-specificity">
        <blockquote id="wd-specificity-winner" className="wd-specificity-class">
          hi
        </blockquote>
        <section>
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            Sample cascade: a tag rule (section p) paints this green, a class
            rule (.wd-ai-cascade) paints it yellow, and an id rule
            (#wd-ai-cascade) paints it red. The id rule is both the most
            specific and the last in the stylesheet, so red wins.
          </p>
        </section>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab &rarr;</a>
      </p>
    </div>
  );
}
