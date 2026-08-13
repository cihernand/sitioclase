document.addEventListener("DOMContentLoaded", () => {
  const widgetList = document.querySelector("#widget-list");

  if (!widgetList) {
    return;
  }

  const baseUrl = document.body.dataset.baseurl || "";
  const dataUrl =
    `${baseUrl}/assets/data/widgets/widget-registry.json`;

  fetch(dataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el registro de widgets");
      }

      return response.json();
    })
    .then((widgets) => {
      widgetList.innerHTML = "";

      widgets.forEach((widget) => {
        const article = document.createElement("article");
        article.className = "widget";

        article.innerHTML = `
          <h3>${escapeHtml(widget.title)}</h3>
          <p>${escapeHtml(widget.description)}</p>
        `;

        widgetList.appendChild(article);
      });
    })
    .catch(() => {
      widgetList.innerHTML =
        "<p>No hay recursos disponibles en este momento.</p>";
    });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
