document.addEventListener('DOMContentLoaded', function () {
    fetchPlayerSeasonProjections();
});

function fetchPlayerSeasonProjections() {
    const season = '2023'; // Replace with the desired season
    const url = `https://api.sportsdata.io/v3/nba/projections/json/PlayerSeasonProjectionStats/${season}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const playerData = document.getElementById('playerData');
            data.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
          <td>${player.Name}</td>
          <td>${player.Team}</td>
          <td>${player.Points}</td>
          <td>${player.Assists}</td>
          <td>${player.Rebounds}</td>
          <!-- Add more columns as needed -->
        `;
                playerData.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
