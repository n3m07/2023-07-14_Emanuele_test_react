/* this js contains the list of the movies which are gonna be displayed in the component 'Home' */

/* this fn adds the keys to the movie objects */

function movieObjCreator(name, urlImg, description) {
  return {
    nome: name,
    linkImg: urlImg,
    descrizione: description,
  };
}
const moviesArray = [
  movieObjCreator(
    "Babylon",
    "https://pad.mymovies.it/filmclub/2019/11/085/locandina.jpg",
    "A Hollywood, nel 1926, nel corso di un party scatenato si incontrano l'aspirante attrice Nellie e il messicano Manny, che lavora come aiutante presso la casa di produzione Keystone. Dopo la morte per overdose di un'attrice, Nellie, bellissima e senza freni, ha finalmente l'occasione di sfondare, mentre Manny, che fin da subito s'innamora di Nellie e la protegge dal suo stesso stile di vita forsennato, diventa amico della star in declino Jack Corran. Il passaggio dal muto al sonoro stravolgerà la città del cinema: incapace di adattarsi al sonoro e travolta dalla relazione con la cantante Lady Fay Zhu, Nellie si perde in una spirale d'autodistruzione, mentre Jack vede progressivamente sparire il suo nome dai cartelloni. Il solo Manny sembra farcela, scalando i vertici del sistema, ma anche lui finirà per essere travolto dal destino della nuova Babilonia... "
  ),
  movieObjCreator(
    "Matrix Resurrection",
    "https://pad.mymovies.it/filmclub/2019/09/069/locandinapg1.jpg",
    "All'interno di una simulazione realizzata perché un programma impari da se stesso, l'hacker Bugs osserva un rifacimento della fuga di Trinity dalla polizia e dagli agenti dopo una telefonata. Quindi finisce inseguita a sua volta, ma uno degli agenti è in realtà un nuovo Morpheus, programmato come tale da Thomas Anderson ma che ha assunto vita propria. Thomas è l'autore della trilogia videoludica di grande successo di 'Matrix' e ora gli viene chiesto dalla compagnia per cui lavora, ossia la Warner Bros, di realizzare un nuovo capitolo e di trovare un'idea tanto buona quanto il 'bullet time'. Il suo solo vero interesse però è Tiffany, che vede spesso nel bar sotto l'ufficio, dove lei si serve insieme ai tre figli e al marito. Tiffany somiglia moltissimo alla Trinity del suo videogame, ma la loro sembra una storia d'amore impossibile finché... Morpheus non appare a Thomas offrendogli una pillola rossa."
  ),
  movieObjCreator(
    "Gli Spiriti Dell'Isola",
    "https://pad.mymovies.it/filmclub/2022/07/081/locandinapg1.jpg",
    "Irlanda, 1923. I migliori amici Pádraic e Colm s'incontrano da una vita alle due del pomeriggio per qualche pinta al pub e le solite chiacchiere. Un giorno, però, Colm non apre la porta di casa all'amico, e in seguito, costretto a fornire una spiegazione, afferma di averne abbastanza di lui e di non voler spendere un minuto di più in sua compagnia. Devastato e incapace di accettare la cosa, Pa'draic cerca l'aiuto della sorella e poi del parrocco perché parlino con Colm, ma quest'ultimo non solo non ritratta, ma minaccia il peggio se Pa'draic non lo lascerà in pace. Mentre sul continente infuria la guerra civile, sull'immaginaria isola di Inisherin, che si è sempre considerata al riparo dal conflitto, l'allontanamento di due amici fraterni innesca ugualmente una serie di conseguenze e un'escalation di atrocità. "
  ),
  movieObjCreator(
    "The King's Man - Le Origini",
    "https://pad.mymovies.it/filmclub/2018/12/018/locandinapg4.jpg",
    "Un nobiluomo inglese, che collabora insieme alla moglie con la Croce Rossa, si ritrova coinvolto in una tragica sparatoria in Africa, dove ha assistito agli orrori della colonizzazione inglese. Anni dopo, suo figlio è ormai quasi un uomo e vuole arruolarsi per partecipare alla Prima Guerra Mondiale. Il padre cerca invece di convincerlo a servire invece il Paese collaborando con la sua rete di spie internazionali, composta dalla servitù di varie casate nobiliari. Nel mentre però anche un'associazione di loschi figuri ha infiltrato le principali corti europee e ha piani assai sinistri, che si estendono oltre la Grande Guerra. "
  ),
  movieObjCreator(
    "Assassinio Sul Nilo",
    "https://pad.mymovies.it/filmclub/2019/04/075/locandinapg1.jpg",
    "L'investigatore Hercule Poirot viene invitato dall'amico Bouc a partecipare alla crociera lungo il Nilo organizzata da una coppia di neosposi, l'ereditiera Linnet Ridgeway e il suo sposo Simon Doyle, conosciuto a Londra poco tempo prima e soffiato alla migliore amica Jacqueline de Bellefort. Al viaggio partecipano anche la zia di Linnet e la sua infermiera; il cugino della donna e gestore delle sue finanze; la cameriera francese; una cantante blues e la nipote manager; la madre di Bouc e la stessa Jacqueline, che perseguita i due sposini e medita vendetta. Quando Linnet viene trovata uccisa, sul battello si apre l'indagine di Poirot: chi ha ucciso la bellissima ereditiera, dal momento che tutti sembravano avere un movente per farlo? "
  ),
  movieObjCreator(
    "Macbeth",
    "https://pad.mymovies.it/filmclub/2021/02/026/locandina.jpg",
    "Al coraggioso guerriero Macbeth le streghe pronosticano un'imminente ascesa al trono. Ma quando il re premia il suo eroismo con un titolo nobiliare invece che con la corona, Macbeth decide di realizzare da sé la profezia e uccide il monarca, prendendone il posto. Ad alimentare la sua ambizione è la moglie, ma per entrambi sarà l'inizio di una discesa nella follia della quale sono stati gli artefici. The Tragedy of Macbeth annuncia fin dal titolo la tragedia in divenire, pronta a dispiegare le sue ali nefaste come i corvi che abitano questa ennesima trasposizione cinematografica dell'opera di Shakespeare, il primo dei quali è una strega avvolta su se stessa che lentamente si srotola in movimenti innaturali: è la straordinaria Kathryn Hunter, e nell'incipit è enucleata tutta la storia a seguire. "
  ),
  movieObjCreator(
    "Wonder Woman 1984",
    "https://pad.mymovies.it/filmclub/2018/06/060/locandina.jpg",
    " Diana Prince, alias Wonder Woman, vive tra noi ancora negli anni 80, salva persone in pericolo e sventa crimini cercando di restare il più possibile in incognito. Lavora nel campo dell'archeologia, dove si ritrova a collaborare con Barbara Minerva. Un antico cristallo entra in contatto con loro e successivamente con l'imprenditore e truffatore Max Lord, prossimo a cadere in disgrazia. In seguito all'interazione con la pietra, a tutti loro accadono eventi inspiegabili: Barbara trova sicurezza di sé e sviluppa una forza sovrumana; Max Lord sembra capace di avverare i desideri degli altri; Diana infine ritrova l'amato Steve Trevor, morto molti anni prima e in possesso del corpo di un altro uomo. Ma bisogna stare attenti a quel che si desidera, soprattutto quando potrebbe avverarsi... "
  ),
  movieObjCreator(
    "Notizie Dal Mondo",
    "https://pad.mymovies.it/filmclub/2019/11/007/locandina.jpg",
    "Nel 1870, nel Texas ancora ferito dalla sconfitta nella Guerra civile, Jefferson Kyle Kidd, ex capitano dell'esercito confederato, gira di città in città per leggere ad alta voce, durante affollatissime assemblee, le 'notizie dal mondo' pubblicate sui giornali americani. Durante un trasferimento si imbatte nell'unica sopravvissuta all'agguato a una carovana, una bambina di origine tedesca vestita come una indiana. Il nome della bambina è Cicada, e prima ancora Johanna, orfana di una famiglia di coloni sterminata dai Kiowa e poi adottata dalla tribù. Deciso a consegnarla a un avamposto dell'esercito, Kidd sarà invece costretto ad accompagnare la bambina da alcuni suoi zii nel nord dello stato, attraversando con lei un territorio selvaggio e pericoloso. "
  ),
  movieObjCreator(
    "Glass",
    "https://pad.mymovies.it/filmclub/2018/06/165/locandina.jpg",
    "L'orda, ossia Kevin Wendell Crumb e le sue altre numerose personalità, ha catturato un nuovo gruppo di ragazze e si prepara a 'sacrificarle' alla Bestia. È però sulle sue tracce il vigilante David Dunn, che grazie all'aiuto del figlio e alle sue visioni psichiche arriva presto a un confronto con il feroce avversario. Entrambi però finiscono catturati dalla polizia e dalla psichiatra Ellie Staple e rinchiusi in un istituto psichiatrico, lo stesso dove da 19 anni è prigioniero 'l'uomo di vetro', il geniale Elijah Price. Per lui sarà finalmente l'occasione di dimostrare al mondo che le sue teorie sugli esseri dotati di superpoteri sono reali. Nel mentre il figlio di David, la ragazza sopravvissuta all'Orda e la madre di Elijah cercano di salvare i propri cari dalle cure di Ellie Staple."
  ),
  movieObjCreator(
    "Il Primo Re",
    "https://pad.mymovies.it/filmclub/2018/02/121/locandina.jpg",
    "Romolo e Remo, letteralmente travolti dall'esondazione del Tevere, si ritrovano senza più terre né popolo, catturati dalle genti di Alba. Insieme ad altri prigionieri sono costretti a partecipare a duelli nel fango, dove lo sconfitto viene dato alle fiamme. Quando è il turno di Remo, Romolo si offre come suo avversario e i due collaborando con astuzia riescono a scatenare una rivolta, ma è solo l'inizio del loro viaggio insieme agli altri fuggitivi e a una vestale che porta un fuoco sacro. Sapendo di avere forze nemiche sulle proprie tracce decidono di sfidare la superstizione e si avventurano nella foresta, dove Remo dà prove di valore e conquista la leadership del gruppo, mentre Romolo può fare poco altro che riprendersi da una ferita. Quando a Remo viene letto il destino dalla vestale, lui decide di sfidare il volere degli dèi. "
  ),
];

export default moviesArray;
