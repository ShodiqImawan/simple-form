const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

const DATABASE = './database/account.json';

app.use(express.json());
app.use(express.static('./public'));

app.post('/register', (req, res) => {
    const data = req.body;

    try {
        if(fs.existsSync(DATABASE)) {
            let account = JSON.parse(fs.readFileSync(DATABASE, 'utf-8'));

            account.push(data);

            fs.writeFileSync(DATABASE, JSON.stringify(account, null, 2), 'utf-8');

            res.status(200).json({msg: 'Berhasil menyimpan data'});
        }
    } catch(err) {
        console.error('Error saat menyimpan data', err);
        res.status(500).json({msg: 'Gagal menyimpan data'})
    }
    
    res.status(200).json({msg: 'Berhasil'});
})

app.post('/login', (req, res) => {
    const data = req.body;

    console.log(data);

    res.status(200).json({msg: 'Berhasil'});
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});