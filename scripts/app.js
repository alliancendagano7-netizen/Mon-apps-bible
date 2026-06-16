// Application Mon Apps Bible - Complète avec 66 Livres

// TOUS LES 66 LIVRES DE LA BIBLE
const biblicalBooks = [
    // ANCIEN TESTAMENT - Pentateuque (5 livres)
    { name: 'Genèse', chapters: 50, testament: 'AT' },
    { name: 'Exode', chapters: 40, testament: 'AT' },
    { name: 'Lévitique', chapters: 27, testament: 'AT' },
    { name: 'Nombres', chapters: 36, testament: 'AT' },
    { name: 'Deutéronome', chapters: 34, testament: 'AT' },
    
    // Livres Historiques (12 livres)
    { name: 'Josué', chapters: 24, testament: 'AT' },
    { name: 'Juges', chapters: 21, testament: 'AT' },
    { name: 'Ruth', chapters: 4, testament: 'AT' },
    { name: '1 Samuel', chapters: 31, testament: 'AT' },
    { name: '2 Samuel', chapters: 24, testament: 'AT' },
    { name: '1 Rois', chapters: 22, testament: 'AT' },
    { name: '2 Rois', chapters: 25, testament: 'AT' },
    { name: '1 Chroniques', chapters: 29, testament: 'AT' },
    { name: '2 Chroniques', chapters: 36, testament: 'AT' },
    { name: 'Esdras', chapters: 10, testament: 'AT' },
    { name: 'Néhémie', chapters: 13, testament: 'AT' },
    { name: 'Esther', chapters: 10, testament: 'AT' },
    
    // Livres Poétiques (5 livres)
    { name: 'Job', chapters: 42, testament: 'AT' },
    { name: 'Psaumes', chapters: 150, testament: 'AT' },
    { name: 'Proverbes', chapters: 31, testament: 'AT' },
    { name: 'Ecclésiaste', chapters: 12, testament: 'AT' },
    { name: 'Cantique des Cantiques', chapters: 8, testament: 'AT' },
    
    // Prophètes Majeurs (5 livres)
    { name: 'Ésaïe', chapters: 66, testament: 'AT' },
    { name: 'Jérémie', chapters: 52, testament: 'AT' },
    { name: 'Lamentations', chapters: 5, testament: 'AT' },
    { name: 'Ézéchiel', chapters: 48, testament: 'AT' },
    { name: 'Daniel', chapters: 12, testament: 'AT' },
    
    // Prophètes Mineurs (12 livres)
    { name: 'Osée', chapters: 14, testament: 'AT' },
    { name: 'Joël', chapters: 3, testament: 'AT' },
    { name: 'Amos', chapters: 9, testament: 'AT' },
    { name: 'Abdias', chapters: 1, testament: 'AT' },
    { name: 'Jonas', chapters: 4, testament: 'AT' },
    { name: 'Michée', chapters: 7, testament: 'AT' },
    { name: 'Nahum', chapters: 3, testament: 'AT' },
    { name: 'Habacuc', chapters: 3, testament: 'AT' },
    { name: 'Sophonie', chapters: 3, testament: 'AT' },
    { name: 'Aggée', chapters: 2, testament: 'AT' },
    { name: 'Zacharie', chapters: 14, testament: 'AT' },
    { name: 'Malachie', chapters: 4, testament: 'AT' },
    
    // NOUVEAU TESTAMENT - Évangiles (4 livres)
    { name: 'Matthieu', chapters: 28, testament: 'NT' },
    { name: 'Marc', chapters: 16, testament: 'NT' },
    { name: 'Luc', chapters: 24, testament: 'NT' },
    { name: 'Jean', chapters: 21, testament: 'NT' },
    
    // Actes et Épîtres Pauliennes (14 livres)
    { name: 'Actes', chapters: 28, testament: 'NT' },
    { name: 'Romains', chapters: 16, testament: 'NT' },
    { name: '1 Corinthiens', chapters: 16, testament: 'NT' },
    { name: '2 Corinthiens', chapters: 13, testament: 'NT' },
    { name: 'Galates', chapters: 6, testament: 'NT' },
    { name: 'Éphésiens', chapters: 6, testament: 'NT' },
    { name: 'Philippiens', chapters: 4, testament: 'NT' },
    { name: 'Colossiens', chapters: 4, testament: 'NT' },
    { name: '1 Thessaloniciens', chapters: 5, testament: 'NT' },
    { name: '2 Thessaloniciens', chapters: 3, testament: 'NT' },
    { name: '1 Timothée', chapters: 6, testament: 'NT' },
    { name: '2 Timothée', chapters: 4, testament: 'NT' },
    { name: 'Tite', chapters: 3, testament: 'NT' },
    { name: 'Philémon', chapters: 1, testament: 'NT' },
    
    // Épîtres Générales (9 livres)
    { name: 'Hébreux', chapters: 13, testament: 'NT' },
    { name: 'Jacques', chapters: 5, testament: 'NT' },
    { name: '1 Pierre', chapters: 5, testament: 'NT' },
    { name: '2 Pierre', chapters: 3, testament: 'NT' },
    { name: '1 Jean', chapters: 5, testament: 'NT' },
    { name: '2 Jean', chapters: 1, testament: 'NT' },
    { name: '3 Jean', chapters: 1, testament: 'NT' },
    { name: 'Jude', chapters: 1, testament: 'NT' },
    { name: 'Apocalypse', chapters: 22, testament: 'NT' }
];

// VERSETS DU JOUR - Matin
const versetsMatin = [
    {
        texte: "Car je sais les pensées que j'ai pour vous, dit l'Éternel, des pensées de paix et non de malheur, pour vous donner un avenir et de l'espérance.",
        reference: "Jérémie 29:11",
        sujet: "La Providence Divine"
    },
    {
        texte: "Le Seigneur est ma lumière et mon salut; de qui aurais-je crainte?",
        reference: "Psaume 27:1",
        sujet: "La Protection Divine"
    },
    {
        texte: "Au matin, fais-moi entendre ta grâce; car je me confie en toi.",
        reference: "Psaume 143:8",
        sujet: "Confiance en Dieu"
    },
    {
        texte: "C'est une chose excellente de te louer, Éternel, et de chanter tes louanges au matin.",
        reference: "Psaume 92:2",
        sujet: "Louange Matinale"
    },
    {
        texte: "Que ta lumière brille sur nous tous les jours; et que ta paix nous garde.",
        reference: "Psaume 4:7",
        sujet: "La Bénédiction du Jour"
    },
    {
        texte: "Remets ton sort à l'Éternel, et il affermira tes pensées.",
        reference: "Proverbes 16:3",
        sujet: "Confiance et Succès"
    },
    {
        texte: "Que chacun de vous regarde non seulement à ses propres intérêts, mais aussi à ceux d'autrui.",
        reference: "Philippiens 2:4",
        sujet: "L'Altruisme Chrétien"
    },
    {
        texte: "En Dieu j'ai mis ma confiance, je ne craindrai pas; que pourrait me faire l'homme?",
        reference: "Psaume 56:11",
        sujet: "Crainte de Dieu seul"
    },
    {
        texte: "Jésus leur dit: Je suis le chemin, la vérité, et la vie.",
        reference: "Jean 14:6",
        sujet: "Jésus le Sauveur"
    },
    {
        texte: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par surcroît.",
        reference: "Matthieu 6:33",
        sujet: "Priorités Spirituelles"
    }
];

// VERSETS DU JOUR - Soir
const versetsSoir = [
    {
        texte: "Tu garderas dans une paix parfaite celui dont l'esprit est ferme, parce qu'il se confie en toi.",
        reference: "Ésaïe 26:3",
        sujet: "La Paix Intérieure"
    },
    {
        texte: "Que la paix de Christ, à laquelle vous avez été appelés en un seul corps, règne dans vos cœurs.",
        reference: "Colossiens 3:15",
        sujet: "La Paix du Christ"
    },
    {
        texte: "Je m'endors et je m'éveille, car l'Éternel me soutient.",
        reference: "Psaume 3:6",
        sujet: "Repos en Dieu"
    },
    {
        texte: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.",
        reference: "Proverbes 3:5",
        sujet: "Confiance totale"
    },
    {
        texte: "Remets ton sort à l'Éternel, et il affermira tes pensées dans la nuit.",
        reference: "Proverbes 16:3",
        sujet: "Repos Nocturne"
    },
    {
        texte: "Or nous savons que, pour ceux qui aiment Dieu, toutes choses concourent au bien.",
        reference: "Romains 8:28",
        sujet: "Le Bien Divin"
    },
    {
        texte: "Que celui qui n'avait pas de péché soit le premier à jeter la pierre.",
        reference: "Jean 8:7",
        sujet: "Jugement et Miséricorde"
    },
    {
        texte: "Seigneur, pardonne-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés.",
        reference: "Matthieu 6:12",
        sujet: "Pardon et Réconciliation"
    },
    {
        texte: "Que votre cœur ne se trouble point. Croyez en Dieu, et croyez en moi.",
        reference: "Jean 14:1",
        sujet: "Paix et Foi"
    },
    {
        texte: "Et la grâce du Seigneur Jésus soit avec vous tous!",
        reference: "Apocalypse 22:21",
        sujet: "La Grâce Finale"
    }
];

// SUJETS BIBLIQUES QUOTIDIENS
const sujetsBibliques = [
    {
        jour: "Lundi",
        sujet: "L'Amour du Prochain",
        versets: ["Matthieu 22:37-40", "Jean 13:34-35", "1 Jean 4:7-8"],
        description: "Comprendre comment aimer sincèrement ceux qui nous entourent."
    },
    {
        jour: "Mardi",
        sujet: "La Prière et la Foi",
        versets: ["Matthieu 21:22", "Marc 11:24", "Jacques 5:15"],
        description: "Découvrir la puissance de la prière et la foi qui accompagne la supplication."
    },
    {
        jour: "Mercredi",
        sujet: "Le Pardon et la Grâce",
        versets: ["Matthieu 18:21-22", "Colossiens 3:13", "1 Jean 1:9"],
        description: "Apprendre à pardonner comme Jésus nous a pardonné."
    },
    {
        jour: "Jeudi",
        sujet: "L'Intégrité et l'Honnêteté",
        versets: ["Proverbes 10:9", "Proverbes 12:17", "Éphésiens 4:25"],
        description: "Cultiver l'intégrité dans tous nos rapports avec les autres."
    },
    {
        jour: "Vendredi",
        sujet: "Le Service et l'Humilité",
        versets: ["Matthieu 23:11", "Jean 13:14-15", "Philippiens 2:3-4"],
        description: "Servir les autres avec humilité et amour sincère."
    },
    {
        jour: "Samedi",
        sujet: "Le Repos et la Sanctification",
        versets: ["Exode 20:8", "Marc 2:27-28", "Hébreux 4:9-10"],
        description: "Observer le repos du sabbat et la sanctification personnelle."
    },
    {
        jour: "Dimanche",
        sujet: "La Résurrection du Christ",
        versets: ["1 Corinthiens 15:57", "Romains 6:9-10", "Jean 11:25-26"],
        description: "Célébrer la résurrection de Jésus et la victoire sur la mort."
    }
];

// PRIÈRES DU MATIN
const priereMatin = [
    {
        titre: "Prière de Consécration Matinale",
        texte: "Seigneur, en ce matin nouveau, je te consacre ma journée. Guide mes pas, inspire mes paroles, et remplis mon cœur de ta présence. Aide-moi à être une bénédiction pour ceux que je rencontrerai. Que ta volonté soit faite en moi. Amen."
    },
    {
        titre: "Prière pour la Force",
        texte: "Père céleste, je commence cette journée en reconnaissant mon besoin de toi. Donne-moi la force pour affronter les défis, la sagesse pour prendre les bonnes décisions, et la grâce pour aimer les autres. Je remets ma journée entre tes mains. Amen."
    },
    {
        titre: "Prière de Louange Matinale",
        texte: "Seigneur, je t'adore et te loue dès le matin. Merci pour la vie nouvelle, pour ta fidélité sans fin, et pour tes miséricordes qui se renouvellent chaque jour. Remplis mon cœur de joie et aide-moi à te servir fidèlement. Amen."
    },
    {
        titre: "Prière pour la Protection",
        texte: "Seigneur, je demande ta protection sur ma vie, ma famille et ceux qui m'entourent. Sois ma lumière dans les ténèbres, mon rocher dans les tempêtes. Entoure-nous de ton amour et de ta garde. Amen."
    },
    {
        titre: "Prière pour la Sagesse",
        texte: "Père, donne-moi la sagesse du ciel pour discerner le bien du mal. Éclaire-moi par ton Saint-Esprit, guide mes décisions, et dirige mes pensées vers ce qui est juste et vrai. Amen."
    }
];

// PRIÈRES DU SOIR
const priereSoir = [
    {
        titre: "Prière de Reconnaissance du Soir",
        texte: "Seigneur, je te rends grâces pour cette journée écoulée. Merci pour tes bénédictions, ta protection et ton amour constant. Pardonne-moi mes fautes et aide-moi à pardonner à ceux qui m'ont offensé. Accorde-moi un repos réparateur. Amen."
    },
    {
        titre: "Prière de Confession du Soir",
        texte: "Père éternel, j'arrive devant toi en reconnaissance de mes fautes. Pardonne-moi pour mes paroles blessantes, mes pensées impures, et mes actions contraires à ta volonté. Purifie-moi par ton pardon et renouvelle-moi de ton Esprit. Amen."
    },
    {
        titre: "Prière pour la Paix Nocturne",
        texte: "Seigneur, donne-moi la paix qui surpasse tout entendement. Calme mon esprit, apaise mon cœur, et remplis mon sommeil de rêves bénéfiques. Sois avec moi la nuit et veille sur moi jusqu'au matin. Amen."
    },
    {
        titre: "Prière pour la Famille",
        texte: "Père céleste, je te demande de bénir ma famille. Préserve-la dans ta sagesse, protège-la par ta puissance, et remplis chaque cœur de ton amour. Accorde-nous l'unité, la compréhension et la paix. Amen."
    },
    {
        titre: "Prière du Pardon et de la Paix",
        texte: "Seigneur, en cette fin de jour, je me réconcilie avec ceux que j'ai offensés et j'offre mon pardon à ceux qui m'ont blessé. Remplis mon cœur de paix et d'amour. Que demain soit un nouveau commencement. Amen."
    }
];

// Fonction pour obtenir la date du jour
function getJourDuJour() {
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const date = new Date();
    return jours[date.getDay()];
}

// Fonction pour obtenir le verset du matin
function getVersetMatin() {
    const date = new Date();
    const index = date.getDate() % versetsMatin.length;
    return versetsMatin[index];
}

// Fonction pour obtenir le verset du soir
function getVersetSoir() {
    const date = new Date();
    const index = (date.getDate() + 5) % versetsSoir.length;
    return versetsSoir[index];
}

// Fonction pour obtenir le sujet du jour
function getSujetDuJour() {
    const jour = getJourDuJour();
    return sujetsBibliques.find(s => s.jour === jour);
}

// Fonction pour obtenir une prière du matin aléatoire
function getPriereMatin() {
    const index = Math.floor(Math.random() * priereMatin.length);
    return priereMatin[index];
}

// Fonction pour obtenir une prière du soir aléatoire
function getPriereSoir() {
    const index = Math.floor(Math.random() * priereSoir.length);
    return priereSoir[index];
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    initBibleSelector();
    afficherVersetDuJour();
    afficherSujetDuJour();
    afficherPrieres();
});

// Initialiser le sélecteur de livres bibliques
function initBibleSelector() {
    const bookSelect = document.getElementById('bookSelect');
    
    biblicalBooks.forEach(book => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = `${book.name} (${book.testament})`;
        bookSelect.appendChild(option);
    });

    bookSelect.addEventListener('change', onBookSelected);
}

// Quand un livre est sélectionné
function onBookSelected(event) {
    const selectedBook = event.target.value;
    const chapterSelect = document.getElementById('chapterSelect');
    
    chapterSelect.innerHTML = '<option>Chapitre...</option>';
    
    if (selectedBook) {
        const book = biblicalBooks.find(b => b.name === selectedBook);
        if (book) {
            for (let i = 1; i <= book.chapters; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `Chapitre ${i}`;
                chapterSelect.appendChild(option);
            }
        }
    }
    
    chapterSelect.addEventListener('change', onChapterSelected);
}

// Quand un chapitre est sélectionné
function onChapterSelected(event) {
    const bookSelect = document.getElementById('bookSelect');
    const selectedBook = bookSelect.value;
    const selectedChapter = event.target.value;
    const bibleContent = document.getElementById('bibleContent');
    
    if (selectedChapter) {
        bibleContent.innerHTML = `
            <h3>${selectedBook} ${selectedChapter}</h3>
            <p><strong>Chargement du contenu biblique...</strong></p>
            <p><em>Le texte complet du chapitre biblique s'affichera ici.</em></p>
        `;
    }
}

// Afficher le verset du jour (matin et soir)
function afficherVersetDuJour() {
    const versetMatinElement = document.getElementById('versetMatin');
    const versetSoirElement = document.getElementById('versetSoir');
    
    if (versetMatinElement) {
        const versetMatin = getVersetMatin();
        versetMatinElement.innerHTML = `
            <div class="verset-card matin">
                <h4>📖 Verset du Matin</h4>
                <p class="verset-texte">"${versetMatin.texte}"</p>
                <p class="verset-reference"><strong>${versetMatin.reference}</strong></p>
                <p class="verset-sujet"><em>Sujet: ${versetMatin.sujet}</em></p>
            </div>
        `;
    }
    
    if (versetSoirElement) {
        const versetSoir = getVersetSoir();
        versetSoirElement.innerHTML = `
            <div class="verset-card soir">
                <h4>🌙 Verset du Soir</h4>
                <p class="verset-texte">"${versetSoir.texte}"</p>
                <p class="verset-reference"><strong>${versetSoir.reference}</strong></p>
                <p class="verset-sujet"><em>Sujet: ${versetSoir.sujet}</em></p>
            </div>
        `;
    }
}

// Afficher le sujet du jour
function afficherSujetDuJour() {
    const sujetElement = document.getElementById('sujetDuJour');
    
    if (sujetElement) {
        const sujet = getSujetDuJour();
        if (sujet) {
            sujetElement.innerHTML = `
                <div class="sujet-card">
                    <h4>📚 Sujet Biblique du ${sujet.jour}</h4>
                    <h3>${sujet.sujet}</h3>
                    <p>${sujet.description}</p>
                    <div class="versets-connexes">
                        <h5>Versets à méditer:</h5>
                        <ul>
                            ${sujet.versets.map(v => `<li>${v}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    }
}

// Afficher les prières du matin et du soir
function afficherPrieres() {
    const priereMaElement = document.getElementById('priereMatin');
    const priereSoElement = document.getElementById('priereSoir');
    
    if (priereMaElement) {
        const priere = getPriereMatin();
        priereMaElement.innerHTML = `
            <div class="priere-card matin">
                <h4>☀️ ${priere.titre}</h4>
                <p>${priere.texte}</p>
            </div>
        `;
    }
    
    if (priereSoElement) {
        const priere = getPriereSoir();
        priereSoElement.innerHTML = `
            <div class="priere-card soir">
                <h4>🌙 ${priere.titre}</h4>
                <p>${priere.texte}</p>
            </div>
        `;
    }
}

// Log pour vérifier que le script fonctionne
console.log('App Mon Apps Bible - Version Complète (66 livres) chargée avec succès!');
console.log('Nombre de livres bibliques disponibles: ' + biblicalBooks.length);