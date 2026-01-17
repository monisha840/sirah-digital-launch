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

        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response Data:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}

testLead();
