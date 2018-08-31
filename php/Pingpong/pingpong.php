<?php

/*
 * A program that randomly scores players 1 and 2 for each round.
 * Winner is selected if the score is 11 or higher, AND;
 * the difference of the two players' score is greater than 2.
 */

$player1 = 0;
$player2 = 0;
$round = 0;

while (abs($player1 - $player2) < 2 || ($player1 < 11 && $player2 < 11)) {
	++$round;
	echo "Round $round\n";
	if (rand(0,1)) {
		++$player1;
	} else {
		++$player2;
	}
	echo "Player 1 = $player1\n";
	echo "Player 2 = $player2\n\n";

}
if ($player1 > $player2) {
	echo "Player 1";
} else {
	echo "Player 2";
}
echo " is the winner after $round rounds!\n";

?>