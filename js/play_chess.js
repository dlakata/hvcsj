var board,game=new Chess,makeRandomMove=function(){var a=game.moves();if(game.game_over()!==!0&&game.in_draw()!==!0&&0!==a.length){var o=Math.floor(Math.random()*a.length);game.move(a[o]),board.position(game.fen())}},cfg={showNotation:!1,position:"start"};board=new ChessBoard("board",cfg);