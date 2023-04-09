const className = "btn-member is-s mr-ss";
const elements = document.getElementsByClassName(className);
let output = "Name, Image URL\n";
for (let i = 0; i < elements.length; i++) {
  const name = elements[i].textContent.trim();
  const imageUrl = elements[i].getElementsByTagName("img")[0].getAttribute("src").trim();
  output += `${name}, ${imageUrl}\n`;
}

const blob = new Blob([output], { type: "text/csv" });
const link = document.createElement("a");
link.href = window.URL.createObjectURL(blob);
link.download = "output.csv";
link.click();
