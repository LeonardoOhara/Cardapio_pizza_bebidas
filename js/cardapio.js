const products = [
    {
      "name": "Pecorina",
      "image": "./assets/pecorina.png",
      "description": "Creme de Pecorino, Nduja, pecorino ralado e mussarela."
    },
    {
      "name": "Chutney essa manga",
      "image": "./assets/chutney.png",
      "description": "Presunto de Parma italiano, chutney de manga, lascas de parmesão e mussarela."
    },
    {
      "name": "Funghetti vegana",
      "voice": ["foguete","funguete","fun"],
      "image": "./assets/funghett.png",
      "description": "Funghi artesanal, parmesão vegetal, azeite trufado e mussarela vegetal."
    },
    {
      "name": "Bassanina",
      "voice": ["basanina","banana","ba"],
      "image": "./assets/bassanina.png",
      "description": "Aspargos brancos, abobrinha laminada, gorgonzola vegetal e mussarela vegetal."
    },
    {
      "name": "Carciofi vegana",
      "voice": ["carcio","off","casio"],
      "image": "./assets/carciofi.png",
      "description": "Coração de alcachofra, tomatinhos confitados, parmesão vegetal e mussarela vegetal."
    },
    {
      "name": "Gianna",
      "voice": ["giana"],
      "image": "./assets/gianna.png",
      "description": "Mussarela, berinjela grelhada, parmesão, tomate assado no forno a lenha e manjericão."
    },
    {
      "name": "Nduja",
      "image": "./assets/nduja.png",
      "description": "Mussarela de búfala, Nduja, salaminho picante e melaço de cana."
    },
    {
      "name": "Altopiano",
      "voice": ["alto","piano"],
      "image": "./assets/altopiano.png",
      "description": "Queijo Fontina, funghi artesanal e mussarela."
    },
    {
      "name": "Abobrinha",
      "image": "./assets/abobrinha.jpg",
      "description": "Mussarela, calabresa, cebola, pimenta, picles de cebola, cebolinha, tomate, orégano e azeitona."
    },
    {
      "name": "Atum",
      "image": "./assets/atum.jpg",
      "description": "Atum e Cebola."
    },
    {
      "name": "Bruta",
      "image": "./assets/bruta.jpg",
      "description": "Queijo Emmental, Pancetta Defumada, Bacon crocante e Mussarela."
    },
    {
      "name": "Bella marinara",
      "voice": ["bela","mariana"],
      "image": "./assets/bella.jpg",
      "description": "Muito molho de tomate, alho fresco laminado, tomatinhos confitados e azeite trufado."
    },
    {
      "name": "Calabresa",
      "image": "./assets/calabresa.jpg",
      "description": "Calabresa fatiada e cebolas. Roxa e Branca."
    },
    {
      "name": "Calapiry",
      "voice": ["carla","cala","piri"],
      "image": "./assets/calapiry.jpg",
      "description": "Calabresa moída ou fatiada, catupiry original."
    },
    {
      "name": "Celina",
      "image": "./assets/celina.png",
      "description": "Queijo Fontina, cebola caramelizada, pancetta e mussarela."
    },
    {
      "name": "Contadina",
      "image": "./assets/contadina.jpg",
      "description": "Abobrinha fatiada empanada na farinha de Semola, tomate cereja, mussarela e parmesão."
    },
    {
      "name": "Di Capra",
      "voice": ["de capa","de cabra"],
      "image": "./assets/dicapra.jpg",
      "description": "Queijo de cabra Boursin, tomate assado e nosso molho pesto de manjericão."
    },
    {
      "name": "Diavola e Zucchine",
      "voice": ["zu","exuschini"],
      "image": "./assets/diavolaezucchine.jpg",
      "description": "Salaminho picante, abobrinha e mussarela."
    },
    {
      "name": "Diavola",
      "voice": ["de ávila"],
      "image": "./assets/diavola.jpg",
      "description": "Salaminho picante e mussarela."
    },
    {
      "name": "Eliete",
      "image": "./assets/eliete.jpg",
      "description": "Coração de alcachofra e mussarela."
    },
    {
      "name": "Frango com catupiry",
      "image": "./assets/frangocomcatupiry.jpg",
      "description": "Frango desfiado e requeijão tipo catupiry."
    },
    {
      "name": "Limonata",
      "voice": ["limonada"],
      "image": "./assets/limonata.jpg",
      "description": "Tomatinhos confitados, ricota de búfala, raspas de limão siciliano e mussarela."
    },
    {
      "name": "Marguerita",
      "image": "./assets/marguerita.jpg",
      "description": "Parmesão, tomate, manjericão e mussarela."
    },
    {
      "name": "Marguerita Italiana",
      "voice": ["italiana","margherita"],
      "image": "./assets/margueritaitaliana.jpg",
      "description": "Mussarela de búfala e manjericão."
    },
    {
      "name": "Montanara",
      "image": "./assets/montanara.jpg",
      "description": "Pancetta, gorgonzola, nozes e mussarela."
    },
    {
      "name": "Mussarela",
      "image": "./assets/mussarela.jpg",
      "description": "Mussarela."
    },
    {
      "name": "Nostrana",
      "voice": ["mostrando","montana"],
      "image": "./assets/nostrana.jpg",
      "description": "Linguiça no forno a lenha, funghi artesanal, parmesão e mussarela."
    },
    {
      "name": "Parma e Rúcula",
      "image": "./assets/parmaerucula.jpg",
      "description": "Mussarela, queijo stracchino, presunto Parma italiano e rúcula."
    },
    {
      "name": "Parma e brie",
      "voice": ["bri","br"],
      "image": "./assets/parmaebrie.jpg",
      "description": "Mussarela de búfala, presunto Parma italiano e brie."
    },
    {
      "name": "Portuguesa",
      "image": "./assets/portuguesa.jpg",
      "description": "Presunto, ovos cozidos, ervilhas, cebola e mussarela."
    },
    {
      "name": "Palmito",
      "image": "./assets/palmito.jpg",
      "description": "Palmito, cebola e mussarela."
    },
    {
      "name": "Artesanal",
      "image": "./assets/panna.jpg",
      "description": "Panna, Presunto Parma italiano, azeite trufado e mussarela."
    },
    {
      "name": "Puttanesca",
      "voice": ["putanesca"],
      "image": "./assets/puttanesca.jpg",
      "description": "Tomate cereja, cebola roxa, ricota de búfala, mussarela e azeitonas picadas."
    },
    {
      "name": "Principessa",
      "voice": ["principesa","principe"],
      "image": "./assets/principessa.jpg",
      "description": "Queijo de cabra Boursin, nossa abobrinha marinada e folhas de hortelã."
    },
    {
      "name": "Quatro queijos",
      "image": "./assets/quatroqueijos.jpg",
      "description": "Emmental, provolone, gorgonzola e mussarela."
    },
    {
      "name": "Renata",
      "image": "./assets/renata.jpg",
      "description": "Nossa abobrinha marinada, linguiça no forno a lenha, gorgonzola e mussarela."
    },
    {
      "name": "Rosmarina",
      "image": "./assets/rosmarina.jpg",
      "description": "Linguiça despedaçada, tomate cereja, alecrim e mussarela."
    },
    {
      "name": "Toscana moída",
      "image": "./assets/toscanamoida.jpg",
      "description": "Calabresa moída, cebola e mussarela."
    },
    {
      "name": "Toscana fatiada",
      "image": "./assets/toscanamoida.jpg",
      "description": "Calabresa moída, cebola e mussarela."
    },
    {
      "name": "Tia mania",
      "image": "./assets/tiamania.jpg",
      "description": "Parmesão, alho frito, bacon crocante, tomate e mussarela."
    },
    
  ]


        const jsonData = JSON.stringify(products);

        document.getElementById("search").addEventListener("input", function() {
            let query = this.value.toLowerCase().replace(/\s/g, "");
            displayProduct(query);
        });

        const JsonData = JSON.stringify(products);
        console.log(JsonData);
        console.log(typeof jsonData);

        function displayProduct(query) {
            let product = products[query];
            if (product) {
                document.getElementById("popupName").innerText = product.name;
                document.getElementById("popupImage").src = product.image;
                document.getElementById("popupImage").alt = product.name;
                document.getElementById("popupDescription").innerText = product.description;
                document.getElementById("popup").style.display = "flex";
                document.getElementById("popupOverlay").style.display = "block";

            }
        }


        function createMosaic() {
            const mosaicDiv = document.getElementById("mosaic");
            Object.entries(products)
                .sort((a, b) => a[1].name.localeCompare(b[1].name))
                .forEach(([key, product]) => {
                    let itemDiv = document.createElement("div");
                    itemDiv.classList.add("mosaic-item");
                    itemDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <p>${product.name}</p>
                    `;
                    itemDiv.addEventListener("click", () => displayProduct(key));
                    mosaicDiv.appendChild(itemDiv);
                });
        }

        function closePopup() {
            document.getElementById("popup").style.display = "none";
            document.getElementById("popupOverlay").style.display = "none";
            
        };



        document.getElementById("popupOverlay").addEventListener("click", closePopup);
        document.getElementById("popupClose").addEventListener("click", closePopup);
    
        
        createMosaic();

        