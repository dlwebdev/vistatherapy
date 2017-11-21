const moment = require('moment');
const fs = require('fs');
const parseString = require('xml2js').parseString;
const to_json = require('xmljson').to_json;

const Job = require('./models/job');

let JobFeedLoader = new Object();

JobFeedLoader.loadJobFeed = function () {
    console.log("Loading feed...");    

    fs.readFile( './server/feeds/edupw_20171121_103607.xml', function(err, xml) {
        if(err) console.log("Error: ", err);

        parseString(xml, function (err, result) {
            console.dir(result);
            const jobs = result.data.job;

            for(let job of jobs) {
                 console.log('Job: ', job.profession_c);
                 // save this job
            }              
        });
    });
};

module.exports = JobFeedLoader;