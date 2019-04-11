var express = require('express');
var router = express.Router();

//Tableau des trips
var travel = [
 {
   name:"Paris",
   image:"images/photo1.jpg",
   description:"Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré."
 },
 {
   name:"Panama",
   image:"images/photo2.jpg",
   description:"Le Panama est un pays situé sur l'isthme rattachant l'Amérique centrale et l'Amérique du Sud. Le canal de Panama, célèbre prouesse d'ingénierie, coupe cet isthme en son centre pour relier les océans Atlantique et Pacifique, créant ainsi une voie de navigation essentielle. Dans la capitale du même nom, les gratte-ciel modernes, casinos et discothèques contrastent avec les bâtiments de style colonial du quartier de Casco Viejo et la forêt tropicale du parc naturel métropolitain."
 },
 {
   name:"Bora-Bora",
   image:"images/photo3.jpg",
   description:"Bora-Bora est une petite île du Pacifique sud, située au nord-ouest de Tahiti, en Polynésie française. Entourée d'îlots de sable, appelés 'motus', et d'une eau turquoise protégée par un récif corallien, l'île est un haut lieu de la plongée sous-marine. C'est également une destination touristique prisée pour ses complexes de luxe, dont certains proposent des bungalows sur pilotis. Au centre de l'île s'élève le mont Otemanu, un volcan endormi culminant à 727 m."
 }
]

//Route par défaut.
router.get('/', function(req, res, next) {
 res.render('index', {travel});
});

router.get('/home', function(req, res, next) {
 res.render('index', {travel});
});


router.get('/trips', function(req, res, next) {
 res.render('trips', {travel});
});

router.get('/new', function(req, res, next) {
 res.render('new', {travel});
});

router.get('/card', function(req, res, next) {
 res.render('card', {travel});
});

router.post('/card', function(req, res, next) {
  console.log(req.body);
 res.render('card', {trip:req.body});
});

router.get('/delete-card', function(req, res, next) {
  console.log("Route Delete ----->", req.query);
 res.render('trips', {travel});
});



module.exports = router;
