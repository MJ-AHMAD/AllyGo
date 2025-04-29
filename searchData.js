const fs = require('fs');

// JSON ফাইল লোড করুন
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// সার্চ ফাংশন
function searchData(query) {
    let result = [];

    // JSON এর মধ্যে সার্চ করুন
    const searchRecursive = (obj) => {
        if (typeof obj === 'object') {
            for (let key in obj) {
                if (typeof obj[key] === 'object') {
                    searchRecursive(obj[key]);
                } else {
                    if (String(obj[key]).toLowerCase().includes(query.toLowerCase())) {
                        result.push({ key: key, value: obj[key] });
                    }
                }
            }
        }
    };

    searchRecursive(jsonData);
    return result;
}

// সার্চ ইনপুট
const query = 'Bangladesh'; // এখানে আপনার কীওয়ার্ড দিন
const searchResults = searchData(query);

// ফলাফল দেখান
console.log(`Results for "${query}":`, searchResults);
