const underscoreToCapitalizedWords = (variable) => {
  return variable
    .split(`_`)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const camelToCapitalizedWords = (variable) => {
  return variable
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const downloadCSVFromJSON = (
  jsonData,
  filename = "data.csv",
  delimiter = "\t",
  excludedKeys = [],
  callback = null
) => {
  try {
    if (!Array.isArray(jsonData) || !jsonData.length) {
      console.error("Invalid input data");
      return;
    }

    const headers = Object.keys(jsonData[0]).filter(
      (key) => !excludedKeys.includes(key)
    );
    if (!headers.length) {
      console.error("No headers found in input data");
      return;
    }

    const csvRows = [];
    for (const dataObj of jsonData) {
      const rowValues = [];
      for (const header of headers) {
        if (typeof dataObj[header] === "undefined") {
          console.warn(`Data for header "${header}" not found in object`);
          rowValues.push("");
        } else {
          rowValues.push(dataObj[header]);
        }
      }
      csvRows.push(rowValues.join(delimiter));
    }

    let csvString = "";
    switch (headerHandler) {
      case "underscore":
        csvString = [
          headers.map((h) => underscoreToCapitalizedWords(h)).join("\t"),
          ...csvRows,
        ].join("\n");
        break;
      case "camel":
        csvString = [
          headers.map((h) => camelToCapitalizedWords(h)).join("\t"),
          ...csvRows,
        ].join("\n");
      default:
        csvString = [headers.join("\t"), ...csvRows].join("\n");
        break;
    }

    // Create a download link for the CSV file
    const downloadLink = document.createElement("a");
    const blob = new Blob([csvString], { type: "text/csv" });
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;

    // Trigger the download link to download the CSV file
    const triggerDownload = () => {
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    if (callback) {
      downloadLink.addEventListener("click", callback);
    }

    triggerDownload();
  } catch (e) {
    console.error(e);
  }
};

exports = downloadCSVFromJSON;
