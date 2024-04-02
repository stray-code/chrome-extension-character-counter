import van from "vanjs-core";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { div, textarea, table, tbody, tr, td, input, button } = van.tags;

  const text = van.state("");

  // 正確な文字数をカウントする
  const countGrapheme = (text: string) => {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    return [...segmenter.segment(text)].length;
  };

  const textLength = van.derive(() => countGrapheme(text.val));

  const removedLinesTextLength = van.derive(() => {
    const removedLinesText = text.val.replaceAll(/\r\n|\n|\r/g, "");
    return countGrapheme(removedLinesText);
  });

  return div(
    {
      class: "p-3",
      style: "width: 360px",
    },
    textarea({
      class: "form-control",
      value: text,
      rows: 6,
      oninput: (e) => (text.val = e.target.value),
    }),
    table(
      {
        class: "mt-3",
      },
      tbody(
        tr(
          td({ class: "text-nowrap" }, "文字数"),
          td(
            input({
              class: "form-control",
              value: textLength,
            }),
          ),
        ),
        tr(
          td({ class: "text-nowrap" }, "文字数（改行除く）"),
          td(
            input({
              class: "form-control",
              value: removedLinesTextLength,
            }),
          ),
        ),
      ),
    ),
  );
};

van.add(document.getElementById("app")!, App());
