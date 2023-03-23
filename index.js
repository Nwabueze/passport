const express = require('express');
const ImageClassifier = require('image-classifier');
const fs = require('fs');

const app = new express();
app.use(express.static('client'))

app.get('/', async(req, res) => {
    const classifier = await ImageClassifier.create()

    await classifier.addExample('good', './img/good1.jpg');
    await classifier.addExample('good', './img/good2.jpg');
    await classifier.addExample('good', './img/good3.jpg');
    await classifier.addExample('good', './img/good4.jpg');
    await classifier.addExample('good', './img/good5.jpg');
    await classifier.addExample('good', './img/good6.jpeg');


    await classifier.addExample('bad', './img/bad1.jpeg');
    await classifier.addExample('bad', './img/bad2.jpeg');
    await classifier.addExample('bad', './img/bad3.jpeg');
    await classifier.addExample('bad', './img/bad4.jpg');
    await classifier.addExample('bad', './img/bad5.jpeg');
    await classifier.addExample('bad', './img/bad6.jpeg');

    const prediction1 = await classifier.predict('./img/bad7.jpeg');
                                         

    res.json(prediction1)
})


let server = app.listen(8080, () => {
    console.log('Listening', server.address().port);
});
