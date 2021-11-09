--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--
-- @student Brian Langejans
-- @date 10/15/2021
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PlayerState;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

CREATE TABLE PlayerState (
    gameID integer REFERENCES Game(ID),
    playerID integer REFERENCES Player(ID),
    cash money,
    pieceLocation integer
    );

CREATE TABLE Property (
    ID varchar(50),
    gameID integer REFERENCES Game(ID),
    ownerID integer REFERENCES Player(ID),
    houseNum integer,
    hotelNum integer
    );

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerState TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;


-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');
INSERT INTO Game VALUES (4, '2021-07-10 20:30:00');
INSERT INTO Game VALUES (5, '2021-10-16 20:31:24');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (4, 2, 5500.00);

INSERT INTO PlayerState VALUES (4, 1, 500.00, 10);
INSERT INTO PlayerState VALUES (4, 2, 400.00, 5);
INSERT INTO PlayerState VALUES (4, 3, 700.00, 20);

INSERT INTO Property VALUES ('Vine Street', 4, 1, 0, 0);
INSERT INTO Property VALUES ('Regent Street', 4, 2, 2, 0);
INSERT INTO Property VALUES ('Park Lane', 4, 3, 0, 1);

--SELECT * FROM GAME
--ORDER BY Time DESC;

--SELECT * FROM Game
--WHERE Time > '2021-10-15'
--ORDER BY Time DESC;

--SELECT * FROM Player
--WHERE Name IS NOT NULL;

--SELECT playerID FROM PlayerGame
--WHERE score > 2000
--ORDER BY playerID ASC;

--SELECT * FROM Player
--WHERE emailAddress LIKE '%@gmail%';

--SELECT score
--FROM Player, PlayerGame
--WHERE Player.ID = PlayerGame.playerID
  --AND Player.name = 'The King';
--ORDER BY score DESC;

--SELECT Player.name, score
--FROM Player, PlayerGame, Game
--WHERE Player.ID = PlayerGame.playerID
  --AND PlayerGame.gameID = Game.ID
  --AND Game.ID = 2
--ORDER BY score DESC LIMIT 1;

-- It ensures that P1 is at an ID before P2 when comparing them, so that the same ID is not used twice.
-- This is useful for comparing rows within the same table, like comparing two people within the player table.