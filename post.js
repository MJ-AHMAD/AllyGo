const axios = require('axios');

const ACCESS_TOKEN = 'EAAW3diPkg7YBO7OuWgXwceWTAZBcx0qZCTdBR08Kczyy5f08yvRmmCVLshtm2Lx4OqZAu5rZC57HOA5nhwCIYbqRXUi6GRMtTILE9ZAkHe19NinYUNL3KZBZADmCVrVzW5uMHFMyvITWzJhLsC4Bw4uu0ZBWe19IrqN6G3aX02sb4x4s461M2Bca1ompbdEFhOJjeNKkKsTyVkJzPZCvYx70ZD';
const GROUP_ID = '1880636172753452';
const MESSAGE = 'Hello AllyGo Community! This is an automated post from our management system. 🚀';

const url = `https://graph.facebook.com/${GROUP_ID}/feed`;

axios.post(url, {
    message: MESSAGE,
    access_token: ACCESS_TOKEN
})
.then(response => {
    console.log('✅ Successfully Posted:', response.data);
})
.catch(error => {
    console.log('❌ Error Posting:', error.response.data);
});
