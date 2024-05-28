document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchSpotify(query);
});

function searchSpotify(query) {
    // Mock results for demonstration purposes
    const results = [
        { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
        { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
        { title: 'Song 3', artist: 'Artist 3', album: 'Album 3' }
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const title = document.createElement('h3');
        title.textContent = result.title;
        resultItem.appendChild(title);

        const artist = document.createElement('p');
        artist.textContent = `Artist: ${result.artist}`;
        resultItem.appendChild(artist);

        const album = document.createElement('p');
        album.textContent = `Album: ${result.album}`;
        resultItem.appendChild(album);

        resultsContainer.appendChild(resultItem);
    });
}
