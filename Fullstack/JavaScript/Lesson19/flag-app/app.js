//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url).then((res) => {
    if (!res.ok) {
      renderError(`Something went wrong: ${res.status}`);
      throw new Error();
    }
  });
};

fetchCountryByName("Turkey");
