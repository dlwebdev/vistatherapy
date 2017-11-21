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
                 // save this job

                let jobEntry = new Job({
                    id: job.id,
                    profession: job.profession_c,
                    title: job.job_title_description_c,
                    location: job.city_for_website_c + ', ' + job.posting_state_c,
                    description: job.profession_c + ' in ' + job.city_for_website_c + ', ' + job.posting_state_c
                });

                //console.log("Will save job: ", jobEntry);

                jobEntry.save(function (err, job) {
                    if (err) console.log('error saving job: ', err);
                    console.log('Job: ', job);
                });                 
            }              
        });
    });
};

module.exports = JobFeedLoader;