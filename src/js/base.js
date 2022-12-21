"use strict";

document.head.innerHTML +=
  "<style type='text/css'>:root {--theme-hue: " +
  Math.random() * 360 +
  "deg;}</style>";

document.addEventListener("DOMContentLoaded", () => {
  const headings = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (let i = 0; i < headings.length; i++) {
    headings[i].setAttribute("id", i);
    headings[i].innerHTML =
      "<a href='#" + i + "'>" + headings[i].innerHTML + "</a>";
  }

  const pres = [...document.getElementsByTagName("pre")];
  if (pres.length) {
    for (let i = 0; i < pres.length; i++) {
      pres[i].innerHTML =
        "<code class='language-" +
        pres[0].getAttribute("lang") +
        "'>" +
        pres[i].innerHTML +
        "</code>";
    }
    const preScript = document.createElement("script");
    preScript.type = "text/javascript";
    preScript.addEventListener("load", (event) => {
      hljs.highlightAll();
    });
    preScript.src =
      "//unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js";
    document.head.appendChild(preScript);
  }

  setInterval(() => {
    document.getElementById("hour").innerText = String(
      new Date().getHours()
    ).padStart(2, 0);
    document.getElementById("minute").innerText = String(
      new Date().getMinutes()
    ).padStart(2, 0);
  }, 1000);

  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  function updateConnectionStatus() {
    let connectionType;
    switch (connection.type) {
      case "bluetooth":
      case "wifi":
      case "ethernet":
        connectionType = connection.type;
        break;
      case "mixed":
      case "other":
      case "wimax":
        connectionType = "access-point-network";
        break;
      case "cellular":
        connectionType = "signal-cellular-3";
        break;
      case "none":
        connectionType = "wifi-off";
        break;
      case "unknown":
      default:
        connectionType = "wifi-strength-alert-outline";
        break;
    }
    document.getElementById("network").className =
      "card mdi mdi-" + connectionType;
    document.getElementById("network").title = connection.type;
  }
  connection.addEventListener("change", updateConnectionStatus);
  updateConnectionStatus();

  navigator.getBattery().then((battery) => {
    switch (Math.round(battery.level * 10)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        document.getElementById("battery").className =
          "card mdi mdi-battery-" +
          (battery.charging ? "charging-" : "") +
          Math.round(battery.level * 10) * 10;
        document.getElementById("battery").title =
          Math.round(battery.level * 100) + "%";
        break;
      case 10:
        document.getElementById("battery").className =
          "card mdi mdi-battery" + (battery.charging ? "-charging-100" : "");
        document.getElementById("battery").title =
          Math.round(battery.level * 100) + "%";
        break;
      default:
        document.getElementById("battery").className =
          "card mdi mdi-battery-unknown";
    }
    battery.onlevelchange = () => {
      switch (Math.round(battery.level * 10)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          document.getElementById("battery").className =
            "card mdi mdi-battery-" +
            (battery.charging ? "charging-" : "") +
            Math.round(battery.level * 10) * 10;
          document.getElementById("battery").title =
            Math.round(battery.level * 100) + "%";
          break;
        case 10:
          document.getElementById("battery").className =
            "card mdi mdi-battery" + (battery.charging ? "-charging-100" : "");
          document.getElementById("battery").title =
            Math.round(battery.level * 100) + "%";
          break;
        default:
          document.getElementById("battery").className =
            "card mdi mdi-battery-unknown";
      }
    };
    battery.onchargingchange = () => {
      switch (Math.round(battery.level * 10)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          document.getElementById("battery").className =
            "card mdi mdi-battery-" +
            (battery.charging ? "charging-" : "") +
            Math.round(battery.level * 10) * 10;
          document.getElementById("battery").title =
            Math.round(battery.level * 100) + "%";
          break;
        case 10:
          document.getElementById("battery").className =
            "card mdi mdi-battery" + (battery.charging ? "-charging-100" : "");
          document.getElementById("battery").title =
            Math.round(battery.level * 100) + "%";
          break;
        default:
          document.getElementById("battery").className =
            "card mdi mdi-battery-unknown";
      }
    };
  });
});
