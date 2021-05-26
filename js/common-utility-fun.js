// delays, intervals
setTimeout(() => {
    console.log('executing after 5 seconds');
}, 5000);
// 1000 ms = 1s

console.log('after timeout');

// repeat some code after some interval
const intervalId = setInterval(() => {
    console.log(Date.now());
}, 1000);
// calls the fn after EVERY time interval.

setTimeout(() => {
    // stops executing the interval.
    clearInterval(intervalId);
}, 10000);


// map, filter, reduce

const medicalRecords = [
    {
        patientName: 'Aniruddha',
        patientId: 1,
        symptoms: ['runny nose', 'fever', 'rash'],
        prescription: {
            prescribedBy: 'Dr Kulkarni',
            medicines: [{
                name: 'Crocin',
                dosage: '1-1-1'
            }, {
                name: 'Diazepam',
                dosage: '1-0-1'
            }]
        }
    },
    {
        patientName: 'Ankit',
        patientId: 2,
        symptoms: ['loss of balance'],
        prescription: {
            prescribedBy: 'Dr Kulkarni',
            medicines: [{
                name: 'Polezoral',
                dosage: '1-1-0'
            }, {
                name: 'Pause 500',
                dosage: '0-0-1'
            }]
        }
    }, 
    {
        patientName: 'Suraj',
        patientId: 3,
        symptoms: ['Swelling in the feet', 'rash', 'itchy eyes'],
        prescription: {
            prescribedBy: 'Dr Foreman',
            medicines: [{
                name: 'Haldol',
                dosage: '1-0-0'
            }, {
                name: 'Vicodin',
                dosage: '0-0-1'
            }]
        }
    }
];

const numbers = [1, 2 , 3, 4, 5];
const squares = numbers.map(n => n ** 2);

const condensedMedicalRecords = medicalRecords.map(record => {
    const { patientName, patientId } = record;
    return {
        patientName,
        patientId
    }
});

console.log(condensedMedicalRecords);

// filter

const byDrKulkarni = medicalRecords.filter(record => 
     record.prescription.prescribedBy === 'Dr Kulkarni'
);

console.log(byDrKulkarni);


// reduce --> returns a single value
const populationByCountry = [{
    name: 'India',
    population: 100
}, {
    name: 'Canada',
    population: 200
}, {
    name: 'Papua new Guinea',
    population: 300
}]

const totalPopulation = populationByCountry
    .reduce((sum, currentValue) => {
        return sum += currentValue.population
    }, 0);

