use burger_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT primary key not null,
    burger_name varchar(50) not null,
    devoured bool not null
);