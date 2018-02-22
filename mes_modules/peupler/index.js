"use strict";
const tableau = require('../../tableaux.js');

const max = tableau.length;
const maxVille = tableau.tabVille.length;
const maxDomaine = tabDomaine.length;

console.log('max=' + max);

const peupler = () => {
	/*let position;
	let tabVille =[];
	for (let k=0; k<10; k++) {
		position = Math.floor(Math.random()*max);
		tabVille.push(tableau[position]);
	}
	return(tabVille);*/

	let position = Math.floor(Math.random()*maxVille);
	let ville = tableau.tabVille[position];
	position = Math.floor(Math.random()*maxDomaine);
	let domaine = tableau.tabDomaine[position];

	return {
		domaine : domaine,
		ville : ville
	}
}

module.exports = peupler;