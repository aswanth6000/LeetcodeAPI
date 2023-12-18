const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

const username = 'aswanth6000';

async function getUserInfo(username) {
  try {
    const response = await axios.get(`https://leetcode.com/${username}/`);

    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      const easySolved = $('div.flex.flex-1.items-center > span.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1').first().text();
      const easyTotal = $('div.flex.flex-1.items-center > span.text-xs.font-medium.text-label-4.dark\\:text-dark-label-4').first().text();
    
      console.log(`Easy Problems: ${easySolved} solved out of ${easyTotal}`);

      const mediumDiv = $('div.flex.w-full.items-end.text-xs').filter((i, el) => {
        return $(el).find('div.w-\\[53px\\].text-label-3.dark\\:text-dark-label-3').text().trim() === 'Medium';
      });
    
      const mediumSolved = mediumDiv.find('div.flex.flex-1.items-center > span.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1').text();
      const mediumTotal = mediumDiv.find('div.flex.flex-1.items-center > span.text-xs.font-medium.text-label-4.dark\\:text-dark-label-4').text();
    
      console.log(`Medium Problems: ${mediumSolved} solved out of ${mediumTotal}`);

      const hardDiv = $('div.flex.w-full.items-end.text-xs').filter((i, el) => {
        return $(el).find('div.w-\\[53px\\].text-label-3.dark\\:text-dark-label-3').text().trim() === 'Hard';
      });
    
      const hardSolved = hardDiv.find('div.flex.flex-1.items-center > span.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1').text();
      const hardTotal = hardDiv.find('div.flex.flex-1.items-center > span.text-xs.font-medium.text-label-4.dark\\:text-dark-label-4').text();
    
      console.log(`Hard Problems: ${hardSolved} solved out of ${hardTotal}`);

    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Error fetching data from LeetCode');
  }
}
getUserInfo(username);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}...`);
});
