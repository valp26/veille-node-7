"use strict";
const tableau = require('./tableaux.js');

const maxNom = tableau.nom.length;
const maxPrenom = tableau.prenom.length;
const maxPrefixeTel = tableau.prefixeTel.length;
const maxDomaine = tableau.domaine.length;

/*console.log('max=' + max);*/

const peupler = () => {
	let generationMembres = [];

	for (var i = 0; i < 10; i++) {

		let position = Math.floor(Math.random()*maxNom);
		let nom = tableau.nom[position];

		position = Math.floor(Math.random()*maxPrenom);
		let prenom = tableau.prenom[position];

		position = Math.floor(Math.random()*maxPrefixeTel);
		let prefixeTel = tableau.prefixeTel[position];
		let telephone = prefixeTel + '-';

		for (let k=0; k<3; k++) {
			telephone += Math.floor(Math.random()*9);
		}

		telephone += '-';

		for (let k=0; k<4; k++) {
			telephone += Math.floor(Math.random()*9);
		}

		position = Math.floor(Math.random()*maxDomaine);
		let domaine = tableau.domaine[position];
		let courriel = prenom +'.'+ nom + domaine;

		let membre = {
			nom : nom,
			prenom : prenom,
			telephone : telephone,
			courriel : courriel
		}

		generationMembres.push(membre);
	}

	return generationMembres;
}

module.exports = peupler;