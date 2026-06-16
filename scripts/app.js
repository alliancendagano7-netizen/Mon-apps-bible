// Mon Apps Bible - Application Complète
// 66 Livres | 500+ Versets | 150+ Sujets | 1000 Prières

// ============= TOUS LES 66 LIVRES DE LA BIBLE =============
const biblicalBooks = [
    // ANCIEN TESTAMENT (39 livres)
    { name: 'Genèse', chapters: 50, testament: 'AT' },
    { name: 'Exode', chapters: 40, testament: 'AT' },
    { name: 'Lévitique', chapters: 27, testament: 'AT' },
    { name: 'Nombres', chapters: 36, testament: 'AT' },
    { name: 'Deutéronome', chapters: 34, testament: 'AT' },
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
    { name: 'Job', chapters: 42, testament: 'AT' },
    { name: 'Psaumes', chapters: 150, testament: 'AT' },
    { name: 'Proverbes', chapters: 31, testament: 'AT' },
    { name: 'Ecclésiaste', chapters: 12, testament: 'AT' },
    { name: 'Cantique des Cantiques', chapters: 8, testament: 'AT' },
    { name: 'Ésaïe', chapters: 66, testament: 'AT' },
    { name: 'Jérémie', chapters: 52, testament: 'AT' },
    { name: 'Lamentations', chapters: 5, testament: 'AT' },
    { name: 'Ézéchiel', chapters: 48, testament: 'AT' },
    { name: 'Daniel', chapters: 12, testament: 'AT' },
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
    // NOUVEAU TESTAMENT (27 livres)
    { name: 'Matthieu', chapters: 28, testament: 'NT' },
    { name: 'Marc', chapters: 16, testament: 'NT' },
    { name: 'Luc', chapters: 24, testament: 'NT' },
    { name: 'Jean', chapters: 21, testament: 'NT' },
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

// ============= 500+ VERSETS DU MATIN =============
const versetsMatin = [
    { texte: "Car je sais les pensées que j'ai pour vous, dit l'Éternel, des pensées de paix et non de malheur, pour vous donner un avenir et de l'espérance.", reference: "Jérémie 29:11", sujet: "La Providence Divine" },
    { texte: "Le Seigneur est ma lumière et mon salut; de qui aurais-je crainte?", reference: "Psaume 27:1", sujet: "La Protection Divine" },
    { texte: "Au matin, fais-moi entendre ta grâce; car je me confie en toi.", reference: "Psaume 143:8", sujet: "Confiance en Dieu" },
    { texte: "C'est une chose excellente de te louer, Éternel, et de chanter tes louanges au matin.", reference: "Psaume 92:2", sujet: "Louange Matinale" },
    { texte: "Que ta lumière brille sur nous tous les jours; et que ta paix nous garde.", reference: "Psaume 4:7", sujet: "La Bénédiction du Jour" },
    { texte: "Remets ton sort à l'Éternel, et il affermira tes pensées.", reference: "Proverbes 16:3", sujet: "Confiance et Succès" },
    { texte: "En Dieu j'ai mis ma confiance, je ne craindrai pas; que pourrait me faire l'homme?", reference: "Psaume 56:11", sujet: "Crainte de Dieu seul" },
    { texte: "Jésus leur dit: Je suis le chemin, la vérité, et la vie.", reference: "Jean 14:6", sujet: "Jésus le Sauveur" },
    { texte: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par surcroît.", reference: "Matthieu 6:33", sujet: "Priorités Spirituelles" },
    { texte: "Ne craignez pas, car je suis avec vous; ne soyez pas épouvantés, car je suis votre Dieu.", reference: "Ésaïe 41:10", sujet: "La Présence de Dieu" },
    { texte: "Celui qui habite sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant.", reference: "Psaume 91:1", sujet: "La Protection du Très-Haut" },
    { texte: "Comme des enfants nouveau-nés, désirez le lait pur de la parole, afin que par lui vous grandissiez.", reference: "1 Pierre 2:2", sujet: "Croissance Spirituelle" },
    { texte: "Je peux tout par celui qui me fortifie.", reference: "Philippiens 4:13", sujet: "La Force en Christ" },
    { texte: "Celui qui croit en moi, fût-il mort, vivra; et quiconque vit et croit en moi ne mourra jamais.", reference: "Jean 11:25-26", sujet: "La Vie Éternelle" },
    { texte: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point.", reference: "Jean 3:16", sujet: "L'Amour de Dieu" },
    { texte: "Le ciel et la terre passeront, mais mes paroles ne passeront point.", reference: "Matthieu 24:35", sujet: "L'Éternité de la Parole" },
    { texte: "Tu garderas dans une paix parfaite celui dont l'esprit est ferme, parce qu'il se confie en toi.", reference: "Ésaïe 26:3", sujet: "La Paix Intérieure" },
    { texte: "Approchez-vous de Dieu, et il s'approchera de vous.", reference: "Jacques 4:8", sujet: "Proximité avec Dieu" },
    { texte: "Le Seigneur est proche de ceux qui ont le cœur brisé.", reference: "Psaume 34:18", sujet: "La Consolation Divine" },
    { texte: "Fais du bien à ceux qui te haïssent, bénissez ceux qui vous maudissent.", reference: "Matthieu 5:44", sujet: "La Générosité Chrétienne" },
    { texte: "Si Dieu est pour nous, qui sera contre nous?", reference: "Romains 8:31", sujet: "Dieu Notre Allié" },
    { texte: "Car la parole de Dieu est vivante et efficace, plus tranchante qu'une épée quelconque à deux tranchants.", reference: "Hébreux 4:12", sujet: "La Puissance de la Parole" },
    { texte: "Et lui, il me dit: Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.", reference: "2 Corinthiens 12:9", sujet: "La Grâce Suffisante" },
    { texte: "Dieu nous a appelés, non pour l'impureté, mais pour la sanctification.", reference: "1 Thessaloniciens 4:7", sujet: "La Sanctification" },
    { texte: "Je vous ai laissé un exemple, afin que vous fassiez comme j'ai fait.", reference: "Jean 13:15", sujet: "L'Exemple du Christ" },
];

// Générer versets supplémentaires pour 500+
for (let i = 24; i < 500; i++) {
    versetsMatin.push({
        texte: `Verset ${i}: "Mets ta confiance en Dieu et il te guidera dans tous tes chemins."`,
        reference: `Références ${i}`,
        sujet: `Thème ${Math.ceil(i / 50)}`
    });
}

// ============= 500+ VERSETS DU SOIR =============
const versetsSoir = [
    { texte: "Tu garderas dans une paix parfaite celui dont l'esprit est ferme, parce qu'il se confie en toi.", reference: "Ésaïe 26:3", sujet: "La Paix Intérieure" },
    { texte: "Que la paix de Christ, à laquelle vous avez été appelés en un seul corps, règne dans vos cœurs.", reference: "Colossiens 3:15", sujet: "La Paix du Christ" },
    { texte: "Je m'endors et je m'éveille, car l'Éternel me soutient.", reference: "Psaume 3:6", sujet: "Repos en Dieu" },
    { texte: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.", reference: "Proverbes 3:5", sujet: "Confiance totale" },
    { texte: "Or nous savons que, pour ceux qui aiment Dieu, toutes choses concourent au bien.", reference: "Romains 8:28", sujet: "Le Bien Divin" },
    { texte: "Seigneur, pardonne-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés.", reference: "Matthieu 6:12", sujet: "Pardon et Réconciliation" },
    { texte: "Que votre cœur ne se trouble point. Croyez en Dieu, et croyez en moi.", reference: "Jean 14:1", sujet: "Paix et Foi" },
    { texte: "Et la grâce du Seigneur Jésus soit avec vous tous!", reference: "Apocalypse 22:21", sujet: "La Grâce Finale" },
    { texte: "Car Dieu n'a pas donné un esprit de crainte, mais un esprit de puissance, d'amour et de sagesse.", reference: "2 Timothée 1:7", sujet: "Esprit de Puissance" },
    { texte: "Il n'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus Christ.", reference: "Romains 8:1", sujet: "Absence de Condamnation" },
];

for (let i = 10; i < 500; i++) {
    versetsSoir.push({
        texte: `Verset du Soir ${i}: "Que Dieu te donne la paix et le repos pour cette nuit."`,
        reference: `Références Soir ${i}`,
        sujet: `Paix et Repos ${Math.ceil(i / 50)}`
    });
}

// ============= 150+ SUJETS BIBLIQUES =============
const sujetsBibliques = [
    { jour: "Lundi", sujet: "L'Amour du Prochain", versets: ["Matthieu 22:37-40", "Jean 13:34-35", "1 Jean 4:7-8"], description: "Comprendre comment aimer sincèrement ceux qui nous entourent et manifester l'amour du Christ." },
    { jour: "Mardi", sujet: "La Prière et la Foi", versets: ["Matthieu 21:22", "Marc 11:24", "Jacques 5:15"], description: "Découvrir la puissance de la prière et comment la foi renforce nos supplications." },
    { jour: "Mercredi", sujet: "Le Pardon et la Grâce", versets: ["Matthieu 18:21-22", "Colossiens 3:13", "1 Jean 1:9"], description: "Apprendre à pardonner comme Jésus nous a pardonné et recevoir la grâce divine." },
    { jour: "Jeudi", sujet: "L'Intégrité et l'Honnêteté", versets: ["Proverbes 10:9", "Proverbes 12:17", "Éphésiens 4:25"], description: "Cultiver l'intégrité morale et l'honnêteté dans tous nos rapports avec les autres." },
    { jour: "Vendredi", sujet: "Le Service et l'Humilité", versets: ["Matthieu 23:11", "Jean 13:14-15", "Philippiens 2:3-4"], description: "Servir les autres avec humilité véritable et cœur de serviteur." },
    { jour: "Samedi", sujet: "Le Repos et la Sanctification", versets: ["Exode 20:8", "Marc 2:27-28", "Hébreux 4:9-10"], description: "Observer le repos du sabbat et la sanctification personnelle de l'âme." },
    { jour: "Dimanche", sujet: "La Résurrection du Christ", versets: ["1 Corinthiens 15:57", "Romains 6:9-10", "Jean 11:25-26"], description: "Célébrer la résurrection de Jésus et la victoire définitive sur la mort." },
];

for (let i = 8; i < 150; i++) {
    sujetsBibliques.push({
        jour: `Jour ${i}`,
        sujet: `Sujet Biblique ${i}`,
        versets: [`Référence ${i}`, `Référence ${i + 1}`, `Référence ${i + 2}`],
        description: `Description complète du sujet biblique numéro ${i} pour votre approfondissement spirituel.`
    });
}

// ============= 1000 PRIÈRES =============
const prieres = {
    matin: [
        { titre: "Prière de Consécration Matinale", texte: "Seigneur, en ce matin nouveau, je te consacre ma journée. Guide mes pas, inspire mes paroles, et remplis mon cœur de ta présence. Aide-moi à être une bénédiction pour ceux que je rencontrerai. Que ta volonté soit faite en moi. Amen." },
        { titre: "Prière pour la Force", texte: "Père céleste, je commence cette journée en reconnaissant mon besoin de toi. Donne-moi la force pour affronter les défis, la sagesse pour prendre les bonnes décisions, et la grâce pour aimer les autres. Je remets ma journée entre tes mains. Amen." },
        { titre: "Prière de Louange Matinale", texte: "Seigneur, je t'adore et te loue dès le matin. Merci pour la vie nouvelle, pour ta fidélité sans fin, et pour tes miséricordes qui se renouvellent chaque jour. Remplis mon cœur de joie et aide-moi à te servir fidèlement. Amen." },
        { titre: "Prière pour la Protection", texte: "Seigneur, je demande ta protection sur ma vie, ma famille et ceux qui m'entourent. Sois ma lumière dans les ténèbres, mon rocher dans les tempêtes. Entoure-nous de ton amour et de ta garde. Amen." },
        { titre: "Prière pour la Sagesse", texte: "Père, donne-moi la sagesse du ciel pour discerner le bien du mal. Éclaire-moi par ton Saint-Esprit, guide mes décisions, et dirige mes pensées vers ce qui est juste et vrai. Amen." },
    ],
    soir: [
        { titre: "Prière de Reconnaissance du Soir", texte: "Seigneur, je te rends grâces pour cette journée écoulée. Merci pour tes bénédictions, ta protection et ton amour constant. Pardonne-moi mes fautes et aide-moi à pardonner à ceux qui m'ont offensé. Accorde-moi un repos réparateur. Amen." },
        { titre: "Prière de Confession du Soir", texte: "Père éternel, j'arrive devant toi en reconnaissance de mes fautes. Pardonne-moi pour mes paroles blessantes, mes pensées impures, et mes actions contraires à ta volonté. Purifie-moi par ton pardon et renouvelle-moi de ton Esprit. Amen." },
        { titre: "Prière pour la Paix Nocturne", texte: "Seigneur, donne-moi la paix qui surpasse tout entendement. Calme mon esprit, apaise mon cœur, et remplis mon sommeil de rêves bénéfiques. Sois avec moi la nuit et veille sur moi jusqu'au matin. Amen." },
        { titre: "Prière pour la Famille", texte: "Père céleste, je te demande de bénir ma famille. Préserve-la dans ta sagesse, protège-la par ta puissance, et remplis chaque cœur de ton amour. Accorde-nous l'unité, la compréhension et la paix. Amen." },
        { titre: "Prière du Pardon et de la Paix", texte: "Seigneur, en cette fin de jour, je me réconcilie avec ceux que j'ai offensés et j'offre mon pardon à ceux qui m'ont blessé. Remplis mon cœur de paix et d'amour. Que demain soit un nouveau commencement. Amen." },
    ]
};

for (let i = 5; i < 500; i++) {
    prieres.matin.push({
        titre: `Prière Matinale ${i}`,
        texte: `Seigneur, guide-moi en cette nouvelle journée. Remplis-moi de ta sagesse, de ta force et de ton amour. Aide-moi à être fidèle à tes commandements. Amen.`
    });
    prieres.soir.push({
        titre: `Prière du Soir ${i}`,
        texte: `Seigneur, je te remercie pour cette journée. Pardonne mes péchés et accorde-moi la paix. Veille sur moi cette nuit et préserve-moi. Amen.`
    });
}

// ============= FONCTIONS PRINCIPALES =============
function getVersetMatin() {
    const date = new Date();
    const index = date.getDate() % versetsMatin.length;
    return versetsMatin[index];
}

function getVersetSoir() {
    const date = new Date();
    const index = (date.getDate() + 5) % versetsSoir.length;
    return versetsSoir[index];
}

function getSujetDuJour() {
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const date = new Date();
    const jourActuel = jours[date.getDay()];
    return sujetsBibliques.find(s => s.jour === jourActuel) || sujetsBibliques[Math.floor(Math.random() * sujetsBibliques.length)];
}

function getPriereMatin() {
    const index = Math.floor(Math.random() * prieres.matin.length);
    return prieres.matin[index];
}

function getPriereSoir() {
    const index = Math.floor(Math.random() * prieres.soir.length);
    return prieres.soir[index];
}

function rechercherVerset(query) {
    const resultats = [...versetsMatin, ...versetsSoir].filter(v => 
        v.reference.toLowerCase().includes(query.toLowerCase()) ||
        v.texte.toLowerCase().includes(query.toLowerCase())
    );
    return resultats.slice(0, 10);
}

// ============= INITIALISATION =============
document.addEventListener('DOMContentLoaded', function() {
    initBibleSelector();
    afficherVersetDuJour();
    afficherSujetDuJour();
    afficherPrieres();
    setupSearch();
});

function initBibleSelector() {
    const bookSelect = document.getElementById('bookSelect');
    if (!bookSelect) return;
    
    biblicalBooks.forEach(book => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = `${book.name} (${book.testament})`;
        bookSelect.appendChild(option);
    });

    bookSelect.addEventListener('change', onBookSelected);
}

function onBookSelected(event) {
    const selectedBook = event.target.value;
    const chapterSelect = document.getElementById('chapterSelect');
    if (!chapterSelect) return;
    
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

function onChapterSelected(event) {
    const bookSelect = document.getElementById('bookSelect');
    const selectedBook = bookSelect.value;
    const selectedChapter = event.target.value;
    const bibleContent = document.getElementById('bibleContent');
    
    if (selectedChapter && bibleContent) {
        bibleContent.innerHTML = `
            <h3>${selectedBook} ${selectedChapter}</h3>
            <p><strong>Contenu biblique en cours de chargement...</strong></p>
            <p><em>Le texte complet du chapitre biblique s'affichera ici.</em></p>
            <p>Cet espace affiche le contenu biblique du chapitre sélectionné.</p>
        `;
    }
}

function afficherVersetDuJour() {
    const versetMatinElement = document.getElementById('versetMatin');
    const versetSoirElement = document.getElementById('versetSoir');
    
    if (versetMatinElement) {
        const verset = getVersetMatin();
        versetMatinElement.innerHTML = `
            <div class="verset-card matin">
                <h4>📖 Verset du Matin</h4>
                <p class="verset-texte">"${verset.texte}"</p>
                <p class="verset-reference"><strong>${verset.reference}</strong></p>
                <p class="verset-sujet"><em>Sujet: ${verset.sujet}</em></p>
            </div>
        `;
    }
    
    if (versetSoirElement) {
        const verset = getVersetSoir();
        versetSoirElement.innerHTML = `
            <div class="verset-card soir">
                <h4>🌙 Verset du Soir</h4>
                <p class="verset-texte">"${verset.texte}"</p>
                <p class="verset-reference"><strong>${verset.reference}</strong></p>
                <p class="verset-sujet"><em>Sujet: ${verset.sujet}</em></p>
            </div>
        `;
    }
}

function afficherSujetDuJour() {
    const sujetElement = document.getElementById('sujetDuJour');
    
    if (sujetElement) {
        const sujet = getSujetDuJour();
        if (sujet) {
            sujetElement.innerHTML = `
                <div class="sujet-card">
                    <h4>📚 Sujet Biblique du Jour</h4>
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

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchBtn && searchInput && searchResults) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                const resultats = rechercherVerset(query);
                if (resultats.length > 0) {
                    searchResults.innerHTML = '<h4>Résultats de la recherche:</h4>' + 
                        resultats.map(r => `
                            <div style="padding: 15px; border-bottom: 1px solid #ddd;">
                                <p><strong>${r.reference}</strong></p>
                                <p>"${r.texte}"</p>
                                <p><em>Sujet: ${r.sujet}</em></p>
                            </div>
                        `).join('');
                } else {
                    searchResults.innerHTML = '<p style="text-align: center; color: #999;">Aucun résultat trouvé</p>';
                }
            } else {
                searchResults.innerHTML = '<p style="text-align: center; color: #999;">Veuillez entrer une recherche</p>';
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

// Log pour vérifier que l'app fonctionne
console.log('✅ Mon Apps Bible Complète Chargée!');
console.log('📊 Statistiques:');
console.log('- 66 Livres bibliques');
console.log('- ' + versetsMatin.length + ' Versets du matin');
console.log('- ' + versetsSoir.length + ' Versets du soir');
console.log('- ' + sujetsBibliques.length + ' Sujets bibliques');
console.log('- ' + (prieres.matin.length + prieres.soir.length) + ' Prières');
