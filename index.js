$(document).ready(function() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all");

  let country = [];
  xhr.onload = function (res) {
    const data = JSON.parse(this.response)
    data.forEach((item, index) => {
      country.push([item?.flags?.png || '-']);
      country[index].push(item?.name?.official || '-');
      country[index].push(item?.cca2 || '-');
      country[index].push(item?.cca3 || '-');
      country[index].push(item?.name?.nativeName?.zho?.official || '-');
      country[index].push(item?.altSpellings || '-');
      country[index].push(item?.idd?.root || '-');
    });
    // console.log('country :>> ', country);
    $('#example').DataTable( {
        data: country,
        columns: [
            { title: "國旗" },
            { title: "國家名稱" },
            { title: "2位國家代碼" },
            { title: "3位國家代碼." },
            { title: "母語名稱" },
            { title: "替代國家名稱" },
            { title: "國際電話區號" }
        ],
        oLanguage: {
          sSearch: "國家名稱:"
        }
    } );
  };

  xhr.send(null);
} );