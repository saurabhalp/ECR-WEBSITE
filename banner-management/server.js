const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;
const bannersFile = 'banners.json';

app.use(express.json());
app.use(cors());

// Function to ensure the banners file exists
const ensureBannersFileExists = () => {
    if (!fs.existsSync(bannersFile)) {
        fs.writeFileSync(bannersFile, JSON.stringify([]), 'utf8');
    }
};

// Ensure the banners file exists at startup
ensureBannersFileExists();

// Endpoint to handle GET requests for fetching banners
app.get('/api/banners', (req, res) => {
    fs.readFile(bannersFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading banners.json:', err);
            res.status(500).send('Error reading banners');
        } else {
            try {
                const banners = JSON.parse(data);
                res.status(200).json(banners);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).send('Error parsing banners');
            }
        }
    });
});

// Endpoint to handle POST requests for saving banners
app.post('/api/banners', (req, res) => {
    const newBanner = req.body;

    if (!newBanner || !newBanner.title || !newBanner.imageUrl) {
        res.status(400).send('Invalid banner data');
        return;
    }

    fs.readFile(bannersFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading banners.json:', err);
            res.status(500).send('Error reading banners');
        } else {
            try {
                const banners = JSON.parse(data);
                banners.push(newBanner);

                fs.writeFile(bannersFile, JSON.stringify(banners, null, 2), (writeErr) => {
                    if (writeErr) {
                        console.error('Error writing to banners.json:', writeErr);
                        res.status(500).send('Error saving banner');
                    } else {
                        res.status(200).send('Banner saved successfully');
                    }
                });
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).send('Error parsing banners');
            }
        }
    });
});

// Endpoint to handle DELETE requests for removing banners
app.delete('/api/banners/:title', (req, res) => {
    const bannerTitle = req.params.title;

    fs.readFile(bannersFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading banners.json:', err);
            res.status(500).send('Error reading banners');
        } else {
            try {
                let banners = JSON.parse(data);
                banners = banners.filter(banner => banner.title !== bannerTitle);

                fs.writeFile(bannersFile, JSON.stringify(banners, null, 2), (writeErr) => {
                    if (writeErr) {
                        console.error('Error writing to banners.json:', writeErr);
                        res.status(500).send('Error deleting banner');
                    } else {
                        res.status(200).send('Banner deleted successfully');
                    }
                });
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).send('Error parsing banners');
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
