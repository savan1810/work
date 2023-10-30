import { NextResponse } from "next/server";
const cheerio = require('cheerio');
const axios = require('axios');

export async function GET(request) {
    try {
        console.log('get_linkedin_jobs');

        const url = 'https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=Python&location=US&trk=public_jobs_jobs-search-bar_search-submit&pageNum=0&start=5';

        const response = await fetch(url);

        if (response.status === 200) {
            const html = response.json();
            const $ = cheerio.load(html);
            const jobListings = [];

            $('li').each((index, element) => {
                const title = $(element).find('h3.base-search-card__title').text().trim();
                const company = $(element).find('h4.base-search-card__subtitle a').text().trim();
                const location = $(element).find('span.job-search-card__location').text().trim();
                const benefits = $(element).find('div.result-benefits span.result-benefits__text').text().trim();
                const posted_time = $(element).find('time.job-search-card__listdate').text().trim();

                const jobListing = {
                    title,
                    company,
                    location,
                    benefits,
                    posted_time,
                };

                jobListings.push(jobListing);
            });

            const jobListingsJSON = JSON.stringify(jobListings, null, 2);
            const json = JSON.parse(jobListingsJSON);
            return NextResponse.json(json, { status: 200 });
        } else {
            console.error(`Request failed with status code: ${response.status}`);
            return NextResponse.json("Request failed", { status: response.status });
        }
    } catch (error) {
        console.error(`Error making the request: ${error.message}`);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}
