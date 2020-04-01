DROP table if exists calculator.reise;


CREATE table if not exists calculator.reise

(
    id int not null AUTO_INCREMENT primary key,
    destination VARCHAR(50),
    preis int,
    datum VARCHAR(50)
);


INSERT into calculator.reise

(destination, preis, datum)

VALUES

('Bern', 127, '2019-01-14'),
('Zürich', 81, '2019-01-16'),
('Zürich', 81, '2019-01-17'),
('Zürich', 81, '2019-01-21'),
('Zürich', 81, '2019-01-22'),
('Olten', 116, '2019-01-24'),
('Zürich', 81, '2019-02-06');

DROP table if exists calculator.destinations;

CREATE table if not exists calculator.destinations

(
    zielort varchar(50),
    kosten int
);

INSERT into calculator.destinations

(zielort, kosten) VALUES

('Bern', 127),('Zürich', 81), ('Olten', 116)

