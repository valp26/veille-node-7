"use strict";
const tableau = require('./tableaux.js');

/*const max = tableau.length;*/
const maxVille = tableau.ville.length;
const maxDomaine = tableau.domaine.length;

/*console.log('max=' + max);*/

const peupler = () => {
	/*let position;
	let tabVille =[];
	for (let k=0; k<10; k++) {
		position = Math.floor(Math.random()*max);
		tabVille.push(tableau[position]);
	}
	return(tabVille);*/

	let position = Math.floor(Math.random()*maxVille);
	let ville = tableau.ville[position];
	position = Math.floor(Math.random()*maxDomaine);
	let domaine = tableau.domainee[position];

	return {
		domaine : domaine,
		ville : ville
	}
}

module.exports = peupler;