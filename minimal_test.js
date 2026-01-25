async function simpleTest() {
    try {
        console.log("Sending simple POST...");
        const res = await fetch('http://localhost:5000/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: "A",
                lastName: "B",
                email: "a@b.com",
                message: "Test"
            })
        });
        console.log("Status:", res.status);
        const text = await res.text();
        console.log("Body:", text.substring(0, 100));
    } catch (e) {
        console.error("Test Error:", e.message);
    }
}
simpleTest();
