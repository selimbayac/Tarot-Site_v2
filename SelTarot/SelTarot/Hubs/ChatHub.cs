using Microsoft.AspNetCore.SignalR;
using SelTarot.BusinessLayer.Abstract;
using SelTarot.EntityLayer.Concrete;
using System.Threading.Tasks;

namespace SelTarot.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IMessageService _messageService;

        public ChatHub(IMessageService messageService)
        {
            _messageService = messageService;
        }

        public async Task SendMessage(int senderId, int receiverId, string messageContent)
        {
            var message = new Message
            {
                SenderId = senderId,
                ReceiverId = receiverId,
                Content = messageContent,
                SentDate = DateTime.Now
            };

            await _messageService.SendMessageAsync(message);

            // Mesajı alıcıya gönder
            await Clients.User(receiverId.ToString()).SendAsync("ReceiveMessage", senderId, messageContent);
        }
    }
}
