const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Dummy database data
const data = [
    { id: 1, TypeOfTarget: 'Absolute target', Coverage: 'Scope 1 + 2', TargetYear: '2024', baseYear: '2024', reductionpercentage: '5%', baseEmission: '8983 MTCO2e', TargetEmission: '8379 MTCO2e' },
    { id: 2, TypeOfTarget: 'Intensity target', Coverage: 'Scope 1 + 2', TargetYear: '2040', baseYear: '2024', reductionpercentage: '40%', baseEmission: '2716 MTCO2e', TargetEmission: '1324 MTCO2e' },
    { id: 3, TypeOfTarget: 'Absolute target', Coverage: 'Scope 3', TargetYear: '2030', baseYear: '2024', reductionpercentage: '70%', baseEmission: '9837 MTCO2e', TargetEmission: '8453 MTCO2e'}
    
];
app.use(cors());
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
console.log(`your endpoint will be at :http://localhost:5000/api/data`);