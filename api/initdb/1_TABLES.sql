create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    age integer not null

);

create table books
(
    id bigint auto_increment,
    constraint books_pk
        primary key (id),
    borrower_id varchar(255),
    author varchar(255) not null,
    title varchar(255) not null
);

create table rooms
(
    id bigint auto_increment,
    constraint rooms_pk
        primary key (id),
    equipements varchar(255) not null,
    nom varchar(255) not null,
    capacite bigint not null,
    photo varchar(255)
);

create table reservations
(
    id bigint auto_increment,
    constraint reservations_pk
        primary key (id),
    list_invites varchar(255) not null,
    date_debut DATETIME not null,
    date_fin DATETIME not null,
    hote_id bigint not null
);

create table equipments(
  id bigint auto_increment,
  constraint equipments_pk
       primary key (id),
       room_id bigint,
    title varchar(255),
    description varchar(255),
    Foreign Key (room_id) REFERENCES rooms(id)

)
