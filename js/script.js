


function sendMsg() {
  let Nome = document.getElementById("name").value;
  let myMsg = document.getElementById("msg").value;
  let mensagem = myMsg.replace(/\n/g, "%0A");

  sendWhats = "https://api.whatsapp.com/send?phone=" + "5512996683252" + "&text=" + "Olá, meu nome é " + Nome + " e " + mensagem;
  window.open(sendWhats);
}
