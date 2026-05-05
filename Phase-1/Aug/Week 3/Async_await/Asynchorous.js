
    document.getElementById("getDog").addEventListener("click", async () => {
      const url = "https://dog.ceo/api/breeds/image/random/1";

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch dog image!");
        }

        const data = await res.json();
        document.getElementById("dogImage").innerHTML = `
          <img src="${data.message}" alt="Random Dog" 
               style="width: 100%; height: auto; border-radius: 12px; object-fit: cover;">
        `;
        document.getElementById("error").textContent = "";
      } catch (err) {
        document.getElementById("error").textContent = `Error: ${err.message}`;
        document.getElementById("dogImage").innerHTML = "";
      }
    });