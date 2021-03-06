var loadState = {
    preload: function () {
        // dodaj 'loading...' oznaka na ekranot dodeka se vlecat izvorite
        // moze i da bide nezabelezitelna
        var pricekajLabela = game.add.text(game.world.centerX, 300, 'Причекајте...',
                                           { font: '40px Arial', fill: '#ffffff' });
        pricekajLabela.anchor.setTo(0.5, 0.5);

        // prikazi go barot za progress 
        var progress = game.add.sprite(game.world.centerX, 400, 'progress');
        progress.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progress);

        // izvleci gi site potrebni resursi za igrata
        game.load.tilemap('map1','resursi/tilemap.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map2','resursi/tilemap2.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map3','resursi/tilemap3.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('walls','resursi/walls.png'); 



        game.load.spritesheet('igrac', 'resursi/igrac.png',85,100);       
        game.load.image('neprijatel', 'resursi/neprijatel.png');
        game.load.image('paricka', 'resursi/paricka.png');
        game.load.image('pozadina2','resursi/backgroundLvl1.png');
        game.load.image('zivot','resursi/zivot.png');
        game.load.image('puka','resursi/laser.png');
        game.load.image('cestitkiParicka','resursi/cestitki.png');
        game.load.image('strelki','resursi/strelki.png');
        game.load.image('wasd','resursi/wasd.png');
        game.load.image('enter','resursi/enter.png');
        game.load.image('space','resursi/space.png');
        game.load.audio('skoka', ['resursi/skoka.ogg', 'resursi/skoka.mp3']);
        game.load.audio('zemaParicka', ['resursi/zemaParicka.ogg', 'resursi/zemaParicka.mp3']);
        game.load.audio('mrtovNeprijatel', ['resursi/mrtovNeprijatel.ogg', 'resursi/mrtovNeprijatel.mp3']);
        game.load.audio('mrtovIgrac', ['resursi/mrtovIgrac.ogg', 'resursi/mrtovIgrac.mp3']);

        // resurs koj kje bide iskoristen za slednata sostojba
        game.load.image('pozadina1', 'resursi/pozadinskaSlika.jpg');

    },
    create: function() {
        // startuvaj sledna sostojba
        game.state.start('menu');
    }
};
