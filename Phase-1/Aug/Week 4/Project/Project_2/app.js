 AOS.init();

    function setMood(mood) {
      let color;
      if (mood === "happy") color = "linear-gradient(135deg, #ffeb3b, #fbc02d)";
      if (mood === "sad") color = "linear-gradient(135deg, #64b5f6, #1976d2)";
      if (mood === "excited") color = "linear-gradient(135deg, #ff4081, #f50057)";
      if (mood === "calm") color = "linear-gradient(135deg, #81c784, #388e3c)";

      gsap.to("body", {
        background: color,
        duration: 1.5,
        ease: "power2.inOut"
      });
    }

    // Journal Save
    function saveJournal() {
      const text = document.getElementById("journalText").value;
      if (!text) return alert("Please write something!");

      const entry = { text, date: new Date().toLocaleString() };
      let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
      entries.unshift(entry);
      localStorage.setItem("moodEntries", JSON.stringify(entries));
      document.getElementById("journalText").value = "";
      loadHistory();
    }

    // Load History
    function loadHistory() {
      const historyList = document.getElementById("historyList");
      historyList.innerHTML = "";
      let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
      entries.forEach(e => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `<strong>${e.date}</strong><br>${e.text}`;
        historyList.appendChild(div);
      });
    }

    loadHistory();