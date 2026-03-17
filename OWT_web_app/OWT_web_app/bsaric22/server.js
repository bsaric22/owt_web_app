const express = require('/usr/lib/node_modules/express');
//const portovi = require("https://spider.foi.hr/OWT/2025/portovi.js");
const server = express();
const port = 12272; //promjeniti u svoje korisničko ime
const putanja = __dirname;
//server.use(express.static(putanja));
server.listen(port, () => {
console.log(`Server pokrenut na portu: ${port}`);
})

server.get("/", (zahtjev, odgovor) => {
	odgovor.sendFile(putanja + "/html/index.html");
});

server.get("/detalji", (zahtjev, odgovor) => {     
	odgovor.sendFile(putanja + "/html/detalji.html");
}); 

server.get("/dokumentacija", (zahtjev, odgovor) => {     
	odgovor.sendFile(putanja + "/html/dokumentacija.html");
}); 

server.get("/oAutoru", (zahtjev, odgovor) => {     
	odgovor.sendFile(putanja + "/html/oAutoru.html");
}); 

server.get("/placanje", (zahtjev, odgovor) => {     
	odgovor.sendFile(putanja + "/html/placanje.html");
}); 

server.get("/blog",  (zahtjev, odgovor) => {     
	odgovor.sendFile(putanja + "/html/blog.html");
}); 
server.use("/css", express.static(putanja + "/css"));
server.use("/resursi", express.static(putanja + "/resursi"));











server.use((zahtjev, odgovor) => {
    odgovor.send("Stranica nije pronađena! ERROR 404");
    });