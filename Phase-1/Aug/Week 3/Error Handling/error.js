document.getElementById("getPokemon").addEventListener("click", async () => {
  const name = document.getElementById("pokemon").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Pokémon not found!");
    }

    const data = await res.json();
    document.getElementById("result").innerHTML = `
      <h3>${data.name.toUpperCase()}</h3>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
      <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
    document.getElementById("error").textContent = "";
  } catch (err) {
    document.getElementById("error").textContent = err.message;
    document.getElementById("result").innerHTML = "";
  }
});
