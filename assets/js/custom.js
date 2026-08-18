// Visual Identity gallery lightbox
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("vi-modal");
  if (!modal) return;

  var modalMedia = document.getElementById("vi-modal-media");
  var modalImg = document.getElementById("vi-modal-img");
  var modalTitle = document.getElementById("vi-modal-title");
  var modalArtist = document.getElementById("vi-modal-artist");
  var modalDesc = document.getElementById("vi-modal-desc");
  var modalDownloads = document.getElementById("vi-modal-downloads");
  var closeBtn = document.getElementById("vi-modal-close");
  var lastFocused = null;

  function openModal(item) {
    lastFocused = document.activeElement;

    modalImg.src = item.dataset.full || "";
    modalImg.alt = item.dataset.title || "";
    modalMedia.style.backgroundColor = item.dataset.background || "";
    modalTitle.textContent = item.dataset.title || "";

    var artist = item.dataset.artist || "";
    var artistUrl = item.dataset.artistUrl || "";
    modalArtist.textContent = "";
    if (artist) {
      if (artistUrl) {
        var link = document.createElement("a");
        link.href = artistUrl;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = artist;
        modalArtist.append("by ", link);
      } else {
        modalArtist.textContent = "by " + artist;
      }
    }

    modalDesc.textContent = item.dataset.description || "";

    modalDownloads.innerHTML = "";
    var downloads = [];
    try {
      downloads = JSON.parse(item.dataset.downloads || "[]");
    } catch (e) {
      downloads = [];
    }
    downloads.forEach(function (download) {
      if (!download.url) return;
      var link = document.createElement("a");
      link.className = "vi-modal-download-btn";
      link.href = download.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = (download.format || "Download") + " ↗";
      modalDownloads.appendChild(link);
    });

    modal.classList.add("vi-modal-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("vi-modal-open");
    document.body.style.overflow = "";
    modalImg.src = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".vi-item").forEach(function (item) {
    item.addEventListener("click", function () {
      openModal(item);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("vi-modal-backdrop")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("vi-modal-open")) {
      closeModal();
    }
  });
});
