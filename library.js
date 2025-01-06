const library = {
       // The library contains tracks and playlists
       tracks: { 
         t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
         t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
         t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
       },
       playlists: { 
         p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
         p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
       },
     
       // Method to print a list of all playlists and their track count
       printPlaylists: function() {
         for (let id in this.playlists) {
           const playlist = this.playlists[id];
           console.log(`${id}: ${playlist.name} - ${playlist.tracks.length} track(s)`); // Output format
         }
       },
     
       // Method to print a list of all tracks with details like name, artist, and album
       printTracks: function() {
         for (let id in this.tracks) {
           const track = this.tracks[id];
           console.log(`${id}: ${track.name} by ${track.artist} (${track.album})`); // Output format
         }
       },
     
       // Method to print tracks for a specific playlist by its ID
       printPlaylist: function(playlistId) {
         const playlist = this.playlists[playlistId];
         if (playlist) { // Check if playlist exists
           console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} track(s)`);
           playlist.tracks.forEach(trackId => {
             const track = this.tracks[trackId];
             console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`); // Output format
           });
         } else {
           console.log('Playlist not found'); // Handle invalid playlist ID
         }
       },
     
       // Method to add an existing track to an existing playlist
       addTrackToPlaylist: function(trackId, playlistId) {
         const playlist = this.playlists[playlistId];
         if (playlist && this.tracks[trackId]) { // Check if both track and playlist exist
           playlist.tracks.push(trackId); // Add the track to the playlist
           console.log(`Track ${trackId} added to playlist ${playlistId}`); // Confirmation message
         } else {
           console.log('Invalid trackId or playlistId'); // Handle invalid IDs
         }
       },
     
       // Method to add a track to the library
       addTrack: function(name, artist, album) {
         const id = this.generateUid(); // Generate a unique ID for the new track
         this.tracks[id] = { id, name, artist, album }; // Add the new track to the tracks object
         console.log(`Track ${id} added to library`); // Confirmation message
       },
     
       // Method to add a playlist to the library
       addPlaylist: function(name) {
         const id = this.generateUid(); // Generate a unique ID for the new playlist
         this.playlists[id] = { id, name, tracks: [] }; // Add the new playlist to the playlists object
         console.log(`Playlist ${id} added to library`); // Confirmation message
       },
     
       // Helper method to generate a unique ID
       generateUid: function() {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); // Generate a random unique ID
       },
     
       // Stretch: Method to search for tracks containing the query string (case-insensitive)
       printSearchResults: function(query) {
         const queryLower = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search
         for (let id in this.tracks) {
           const track = this.tracks[id];
           // Check if any part of the track's name, artist, or album contains the query string
           if (track.name.toLowerCase().includes(queryLower) || track.artist.toLowerCase().includes(queryLower) || track.album.toLowerCase().includes(queryLower)) {
             console.log(`${id}: ${track.name} by ${track.artist} (${track.album})`); // Output format
           }
         }
       }
     };
     
     // Example usages:
     library.printPlaylists(); // Prints all playlists and their track count
     library.printTracks();    // Prints all tracks with details
     library.printPlaylist('p01'); // Prints tracks in playlist 'p01'
     library.addTrackToPlaylist('t03', 'p01'); // Adds track 't03' to playlist 'p01'
     library.addTrack('New Track', 'Artist Name', 'New Album'); // Adds a new track to the library
     library.addPlaylist('My New Playlist'); // Adds a new playlist to the library
     library.printSearchResults('coulton'); // Searches tracks with 'coulton' in name, artist, or album
     