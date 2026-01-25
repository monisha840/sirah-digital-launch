const fs = require('fs');
// Native fetch is available in Node 18+

async function testLead() {
    try {
        console.log("Sending test request...");
        const response = await fetch('http://localhost:5000/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: "Antigravity",
                lastName: "Tester",
                email: "test@antigravity.com",
                phone: "9876543210",
                message: "Test message verifying n8n webhook"
            })
        });

        let data;
        const text = await response.text();
        try {
            data = JSON.parse(text);
            fs.writeFileSync('test_response.json', JSON.stringify(data, null, 2));
            console.log("Response saved to test_response.json");
        } catch (e) {
            console.log("Response is not JSON. Raw body follows:");
            console.log(text);
            fs.writeFileSync('test_response.txt', text);
        }
        console.log("Response Status:", response.status);
    } catch (err) {
        console.error("Error:", err);
    }
}

testLead();
