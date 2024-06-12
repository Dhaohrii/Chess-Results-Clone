CREATE DATABASE chess_results;

USE chess_results;

CREATE TABLE Players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating INT,
    country VARCHAR(50)
);

CREATE TABLE Tournaments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    start_date DATE,
    end_date DATE
);

CREATE TABLE Matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tournament_id INT NOT NULL,
    round INT NOT NULL,
    player1_id INT NOT NULL,
    player2_id INT NOT NULL,
    result VARCHAR(10),
    FOREIGN KEY (tournament_id) REFERENCES Tournaments(id),
    FOREIGN KEY (player1_id) REFERENCES Players(id),
    FOREIGN KEY (player2_id) REFERENCES Players(id)
);

CREATE TABLE Scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tournament_id INT NOT NULL,
    player_id INT NOT NULL,
    score FLOAT,
    FOREIGN KEY (tournament_id) REFERENCES Tournaments(id),
    FOREIGN KEY (player_id) REFERENCES Players(id)
);
