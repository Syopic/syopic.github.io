require=function n(a,s,d){function u(i,e){if(!s[i]){if(!a[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(r)return r(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var o=s[i]={exports:{}};a[i][0].call(o.exports,function(e){var t=a[i][1][e];return u(t||e)},o,o.exports,n,a,s,d)}return s[i].exports}for(var r="function"==typeof require&&require,e=0;e<d.length;e++)u(d[e]);return u}({MoveScript:[function(e,t,i){"use strict";cc._RF.push(t,"87a04zMvL5Fg7W+fv/f5n5H","MoveScript"),cc.Class({extends:cc.Component,properties:{head:{default:null,type:cc.Node},speed:{default:2,type:cc.Integer}},onLoad:function(){},update:function(e){this.node.x=this.node.x+this.speed}}),cc._RF.pop()},{}],RoadGame:[function(e,t,i){"use strict";cc._RF.push(t,"abe648JMjhHYZ7D0x2YQTK+","RoadGame"),cc.Class({extends:cc.Component,properties:{isPlay:{default:!1},speed:{default:2,type:cc.Integer},score:{default:0,type:cc.Integer},maxScore:{default:0,type:cc.Integer},head1:{default:null,type:cc.Node},head2:{default:null,type:cc.Node},head3:{default:null,type:cc.Node},head4:{default:null,type:cc.Node},scoreLabel:{default:null,type:cc.Label},maxScoreLabel:{default:null,type:cc.Label},logo:{default:null,type:cc.Node},gameover:{default:null,type:cc.Node},startButton:{default:null,type:cc.Node},credits:{default:null,type:cc.Node},menuMusic:{default:null,type:cc.AudioSource},gameMusic:{default:null,type:cc.AudioSource},gameOverSound:{default:null,type:cc.AudioSource},kickSound:{default:null,type:cc.AudioSource},maleOhSound:{default:null,type:cc.AudioSource},femaleOhSound:{default:null,type:cc.AudioSource}},onLoad:function(){this.head1.on("mousedown",function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head2.on("mousedown",function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head3.on("mousedown",function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head4.on("mousedown",function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head1.on(cc.Node.EventType.TOUCH_START,function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head2.on(cc.Node.EventType.TOUCH_START,function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head3.on(cc.Node.EventType.TOUCH_START,function(e){this.dropHead(e.currentTarget)}.bind(this)),this.head4.on(cc.Node.EventType.TOUCH_START,function(e){this.dropHead(e.currentTarget)}.bind(this)),this.menuMusic.play()},startGame:function(){this.head1.y=60,this.head2.y=60,this.head3.y=60,this.head4.y=60,this.score=0,this.scoreLabel.string=0,this.speed=2,this.logo.active=!1,this.gameover.active=!1,this.startButton.active=!1,this.credits.active=!1,this.isPlay=!0,this.menuMusic.stop(),this.gameMusic.play()},update:function(e){if(1==this.isPlay){var t=Math.floor(4*Math.random())+1;this.moveHead(this["head"+t]),this.speed+=.01}},moveHead:function(e){e.y=e.y+this.speed,700<e.y&&this.gameEnd()},dropHead:function(e){1==this.isPlay&&(e.y=60,this.score++,this.scoreLabel.string=this.score,this.kickSound.play(),this.maleOhSound.play())},gameEnd:function(e){this.isPlay=!1,this.startButton.active=!0,this.credits.active=!0,this.gameover.active=!0,this.score>this.maxScore&&(this.maxScore=this.score,this.maxScoreLabel.string=this.maxScore),this.gameOverSound.play(),this.gameMusic.stop(),this.menuMusic.play()}}),cc._RF.pop()},{}]},{},["MoveScript","RoadGame"]);