<script src="https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/5.0.14/signalr.min.js"></script>

<script>
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();

    connection.start().catch(err => console.error(err.toString()));

    // Mesaj alma
    connection.on("ReceiveMessage", function (senderId, messageContent) {
        const messageList = document.getElementById("messageList");
        const li = document.createElement("li");
        li.textContent = `Kullanýcý ${senderId}: ${messageContent}`;
        messageList.appendChild(li);
    });

    // Mesaj gönderme
    function sendMessage() {
        const senderId = @User.FindFirstValue(ClaimTypes.NameIdentifier);
        const receiverId = document.getElementById("receiverId").value;
        const messageContent = document.getElementById("messageInput").value;

        connection.invoke("SendMessage", senderId, receiverId, messageContent)
            .catch(err => console.error(err.toString()));
    }
</script>
