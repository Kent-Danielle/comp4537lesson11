
async function query() {
    const data = document.getElementById("statement").value;
    const response = await fetch(
        "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    console.log(result)
    document.getElementById("response").innerText = "Emotion: " + result[0][0]["label"] + ". Percentage: " + Math.round(result[0][0]["score"] * 100);
}

function setListener() {
    document.getElementById("analyze").addEventListener("click", query);
}

setListener();