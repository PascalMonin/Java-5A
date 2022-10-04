create table users
(
    uid VARCHAR(255),
    constraint users_pk
        primary key (uid),
    display_name TEXT not null,
    email TEXT not null,
    profile_url TEXT not null
);

create table books
(
    id bigint auto_increment,
    constraint books_pk
        primary key (id),
    borrower_id TEXT,
    author TEXT not null,
    title TEXT not null
);

create table rooms
(
    id bigint auto_increment,
    constraint rooms_pk
        primary key (id),
    nom TEXT not null,
    capacite TEXT not null,
    equipements TEXT not null,
    photo TEXT not null
);

create table reservation
(
    id bigint auto_increment,
    constraint rooms_pk
        primary key (id),
    hoteId bigint not null,
    listInvites TEXT not null,
    dateDebut DATETIME not null,
    Datefin DATETIME not null
);
